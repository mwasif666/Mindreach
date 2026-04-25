import { useState } from 'react'
import { Modal } from 'antd'
import MENTAL_HEALTH_SERVICES from '../../data/mentalHealthServices'
import useContactForm from '../../hooks/useContactForm'

const CALENDLY_BASE_URL = 'https://calendly.com/mwasif66625426/30min'
const APPOINTMENT_SERVICE_OPTIONS = Array.from(
  new Set(MENTAL_HEALTH_SERVICES.map((service) => service.title)),
)

function buildCalendlyPrefillAnswer(bookingDetails, doctorName) {
  if (!bookingDetails) {
    return ''
  }

  return [
    bookingDetails.contact ? `Contact: ${bookingDetails.contact}` : '',
    bookingDetails.service ? `Service: ${bookingDetails.service}` : '',
    bookingDetails.insurance_image?.name ? `Insurance image: ${bookingDetails.insurance_image.name}` : '',
    doctorName ? `Provider: ${doctorName}` : '',
  ].filter(Boolean).join('\n')
}

function buildCalendlyUrl(doctorName, bookingDetails) {
  const url = new URL(CALENDLY_BASE_URL)
  url.searchParams.set('hide_landing_page_details', '1')
  url.searchParams.set('hide_gdpr_banner', '1')
  url.searchParams.set('text_color', '1f2a37')
  url.searchParams.set('primary_color', '22b573')

  if (doctorName) {
    url.searchParams.set('utm_content', doctorName)
  }

  if (bookingDetails?.name) {
    url.searchParams.set('name', bookingDetails.name)
  }

  if (bookingDetails?.email) {
    url.searchParams.set('email', bookingDetails.email)
  }

  const prefillAnswer = buildCalendlyPrefillAnswer(bookingDetails, doctorName)

  if (prefillAnswer) {
    url.searchParams.set('a1', prefillAnswer)
  }

  return url.toString()
}

function buildAppointmentSubject(doctorName, service) {
  const serviceLabel = typeof service === 'string' ? service.trim() : ''
  const serviceSuffix = serviceLabel ? ` - ${serviceLabel}` : ''

  if (doctorName) {
    return `Appointment Request - ${doctorName}${serviceSuffix}`
  }

  return `Appointment Request${serviceSuffix}`
}

function getBookingSubmitErrorMessage(error) {
  const backendMessage = error?.responsePayload?.message || error?.message || ''
  const responseStatus = error?.response?.status

  if (
    responseStatus >= 500
    || responseStatus === 0
    || responseStatus === undefined
    || backendMessage.includes('authenticate on SMTP server')
    || backendMessage.includes('Incorrect authentication data')
  ) {
    return 'Your details could not be emailed right now because the booking server email is temporarily unavailable. You can continue to the calendar and we can fix the email delivery separately.'
  }

  return 'We could not save your details right now. You can try again or continue to the calendar.'
}

function CalendlyInlineModal({ open, onClose, doctorName }) {
  const [currentStep, setCurrentStep] = useState('form')
  const [bookingDetails, setBookingDetails] = useState(null)

  const calendlyUrl = buildCalendlyUrl(doctorName, bookingDetails)
  const isCalendarStep = currentStep === 'calendar'
  const {
    formRef,
    handleSubmit,
    isSubmitting,
    toastMessage,
    toastTone,
    isToastVisible,
  } = useContactForm({
    buildSubject: (formData) => buildAppointmentSubject(
      doctorName,
      formData.get('service'),
    ),
    successMessage: 'Details saved. Please choose your appointment time.',
    errorMessage:
      'We could not save your details right now. You can try again or continue to the calendar.',
    getErrorMessage: getBookingSubmitErrorMessage,
    showErrorToast: false,
    onSuccess: ({ values }) => {
      setBookingDetails(values)
      setCurrentStep('calendar')
    },
    onError: (error, { values } = {}) => {
      setBookingDetails(values ?? null)
      setCurrentStep('calendar')
    },
  })

  const heroDescription = isCalendarStep
    ? 'Select an available time below to continue your booking.'
    : 'Complete a few quick details first, then the booking calendar will open.'

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={920}
      className="mindreach-calendly-modal"
      title={null}
      destroyOnHidden
    >
      <div className="mindreach-calendly-modal__shell">
        <div className="mindreach-calendly-modal__hero">
          <span className="mindreach-calendly-modal__eyebrow">Secure Online Booking</span>
          <h2>{doctorName ? `Book Appointment - ${doctorName}` : 'Book Appointment'}</h2>
          <p>{heroDescription}</p>
        </div>

        {isToastVisible ? (
          <div
            className={`mindreach-calendly-modal__toast mindreach-calendly-modal__toast--${toastTone}`}
            role={toastTone === 'error' ? 'alert' : 'status'}
            aria-live="polite"
          >
            {toastMessage}
          </div>
        ) : null}

        {isCalendarStep ? (
          <>
            <div className="mindreach-calendly-modal__frame">
              <iframe
                key={calendlyUrl}
                src={calendlyUrl}
                title={doctorName ? `Calendly booking for ${doctorName}` : 'Calendly booking'}
                className="mindreach-calendly-modal__iframe"
                frameBorder="0"
              />
            </div>
          </>
        ) : (
          <div className="mindreach-calendly-modal__frame mindreach-calendly-modal__form-panel">
            <form
              key={doctorName ?? 'default-booking-form'}
              ref={formRef}
              className="mindreach-booking-form"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="doctor_name" defaultValue={doctorName ?? ''} />
              <input type="hidden" name="source" defaultValue="Book Appointment Modal" />

              <div className="mindreach-booking-form__grid">
                <div className="mindreach-booking-form__field">
                  <label htmlFor="booking-name">Name</label>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="mindreach-booking-form__field">
                  <label htmlFor="booking-contact">Contact</label>
                  <input
                    id="booking-contact"
                    name="contact"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="mindreach-booking-form__field">
                  <label htmlFor="booking-email">Email</label>
                  <input
                    id="booking-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="mindreach-booking-form__field">
                  <label htmlFor="booking-service">Service</label>
                  <select
                    id="booking-service"
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {APPOINTMENT_SERVICE_OPTIONS.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mindreach-booking-form__field mindreach-booking-form__field--wide">
                  <label htmlFor="booking-insurance-image">Insurance Image</label>
                  <input
                    id="booking-insurance-image"
                    name="insurance_image"
                    type="file"
                    accept="image/*"
                  />
                </div>
              </div>

              <div className="mindreach-booking-form__context">
                <span>Selected provider</span>
                <strong>{doctorName ?? 'MindReach team'}</strong>
              </div>

              <div className="mindreach-booking-form__actions">
                <button
                  type="submit"
                  className="common-btn box-style p2-bg text-nowrap d-inline-flex justify-content-center align-items-center gap-2 fs18 fw-semibold white overflow-hidden rounded100 mindreach-booking-form__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Opening Calendar...' : 'Next: Choose a Time'}
                  <img src="/assets/img/icon/arrow-right-white.png" alt="" aria-hidden="true" />
                </button>

              </div>
            </form>
          </div>
        )}
      </div>
    </Modal>
  )
}

export default CalendlyInlineModal
