import { useEffect, useRef, useState } from 'react'
import { Modal } from 'antd'
import MENTAL_HEALTH_SERVICES from '../../data/mentalHealthServices'
import useContactForm from '../../hooks/useContactForm'

const CALENDLY_ACCOUNT_URL = 'https://calendly.com/aliahmed_95'
const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const DEFAULT_CALENDLY_EVENT_TYPE = 'dr-areeba-khan'
const DOCTOR_CALENDLY_EVENT_TYPES = {
  'dr-areeba-khan': 'dr-areeba-khan',
  'dr-hassan-malik': 'dr-hassan-malik',
  'dr-mehak-aslam': 'dr-mehak-aslam',
}
const DOCTOR_BOOKING_EMAILS = {
  'dr-areeba-khan': 'areeba.khan@mindreachcare.com',
  'dr-hassan-malik': 'hassan.malik@mindreachcare.com',
  'dr-mehak-aslam': 'mehak.aslam@mindreachcare.com',
}
const MAX_INSURANCE_IMAGE_BYTES = 1024 * 1024 * 1024
const APPOINTMENT_SERVICE_OPTIONS = Array.from(
  new Set(MENTAL_HEALTH_SERVICES.map((service) => service.title)),
)

function loadCalendlyScript() {
  return new Promise((resolve, reject) => {
    if (window.Calendly?.initInlineWidget) {
      resolve()
      return
    }

    const existingScript = document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)

    if (existingScript) {
      existingScript.addEventListener('load', resolve, { once: true })
      existingScript.addEventListener('error', reject, { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = CALENDLY_SCRIPT_SRC
    script.async = true
    script.addEventListener('load', resolve, { once: true })
    script.addEventListener('error', reject, { once: true })
    document.body.appendChild(script)
  })
}

function buildCalendlyPrefillAnswer(bookingDetails, doctorName) {
  if (!bookingDetails) {
    return ''
  }

  return [
    bookingDetails.contact ? `Contact: ${bookingDetails.contact}` : '',
    bookingDetails.service ? `Service: ${bookingDetails.service}` : '',
    bookingDetails.insurance_front_image?.name ? `Insurance front image: ${bookingDetails.insurance_front_image.name}` : '',
    bookingDetails.insurance_back_image?.name ? `Insurance back image: ${bookingDetails.insurance_back_image.name}` : '',
    doctorName ? `Provider: ${doctorName}` : '',
  ].filter(Boolean).join('\n')
}

function getCalendlyEventType(doctorId) {
  return DOCTOR_CALENDLY_EVENT_TYPES[doctorId] ?? DEFAULT_CALENDLY_EVENT_TYPE
}

function getBookingEmailTo(doctorId) {
  return DOCTOR_BOOKING_EMAILS[doctorId] ?? DOCTOR_BOOKING_EMAILS['dr-areeba-khan']
}

function buildCalendlyUrl(doctorId, doctorName, bookingDetails) {
  const eventType = getCalendlyEventType(doctorId)
  const url = new URL(`${CALENDLY_ACCOUNT_URL}/${eventType}`)
  url.searchParams.set('hide_gdpr_banner', '1')

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
  const backendErrors = error?.responsePayload?.errors
  const responseStatus = error?.response?.status

  if (backendErrors && typeof backendErrors === 'object') {
    const firstError = Object.values(backendErrors)
      .flat()
      .find(Boolean)

    if (firstError) {
      return firstError
    }
  }

  if (
    responseStatus >= 500
    || responseStatus === 0
    || responseStatus === undefined
    || backendMessage.includes('authenticate on SMTP server')
    || backendMessage.includes('Incorrect authentication data')
  ) {
    return 'Your details could not be emailed right now because the booking server is rejecting SMTP authentication. Please fix the API email settings and try again.'
  }

  return 'We could not email your details right now. Please try again after the booking email API is fixed.'
}

function CalendlyInlineModal({ open, onClose, doctorId, doctorName }) {
  const calendlyWidgetRef = useRef(null)
  const [currentStep, setCurrentStep] = useState('form')
  const [bookingDetails, setBookingDetails] = useState(null)
  const [fileSizeError, setFileSizeError] = useState('')

  const calendlyEventType = getCalendlyEventType(doctorId)
  const calendlyUrl = buildCalendlyUrl(doctorId, doctorName, bookingDetails)
  const bookingEmailTo = getBookingEmailTo(doctorId)
  const isCalendarStep = currentStep === 'calendar'
  const {
    formRef,
    handleSubmit,
    isSubmitting,
    toastMessage,
    toastTone,
    isToastVisible,
  } = useContactForm({
    emailTo: bookingEmailTo,
    buildSubject: (formData) => buildAppointmentSubject(
      doctorName,
      formData.get('service'),
    ),
    successMessage: 'Details saved. Please choose your appointment time.',
    errorMessage:
      'We could not email your details right now. Please try again after the booking email API is fixed.',
    getErrorMessage: getBookingSubmitErrorMessage,
    showErrorToast: true,
    onSuccess: ({ values }) => {
      setBookingDetails(values)
      setCurrentStep('calendar')
    },
  })

  useEffect(() => {
    if (!isCalendarStep || !calendlyWidgetRef.current) {
      return undefined
    }

    let isCancelled = false
    const widgetContainer = calendlyWidgetRef.current
    widgetContainer.innerHTML = ''

    loadCalendlyScript()
      .then(() => {
        if (isCancelled || !window.Calendly?.initInlineWidget) {
          return
        }

        widgetContainer.innerHTML = ''
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: widgetContainer,
        })
      })
      .catch(() => {
        if (!isCancelled) {
          widgetContainer.innerHTML = ''
        }
      })

    return () => {
      isCancelled = true
    }
  }, [calendlyUrl, isCalendarStep])

  const heroDescription = isCalendarStep
    ? 'Select an available time below to continue your booking.'
    : 'Complete a few quick details first, then the booking calendar will open.'

  const handleInsuranceImageChange = (event) => {
    const file = event.target.files?.[0]

    if (!file || file.size <= MAX_INSURANCE_IMAGE_BYTES) {
      setFileSizeError('')
      return
    }

    event.target.value = ''
    setFileSizeError('Insurance image must be 1GB or smaller.')
  }

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

        {fileSizeError ? (
          <div
            className="mindreach-calendly-modal__toast mindreach-calendly-modal__toast--error"
            role="alert"
            aria-live="polite"
          >
            {fileSizeError}
          </div>
        ) : null}

        {isCalendarStep ? (
          <>
            <div className="mindreach-calendly-modal__frame">
              <div
                ref={calendlyWidgetRef}
                className="calendly-inline-widget mindreach-calendly-modal__iframe"
                data-url={calendlyUrl}
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
              <input type="hidden" name="doctor_id" defaultValue={doctorId ?? ''} />
              <input type="hidden" name="doctor_name" defaultValue={doctorName ?? ''} />
              <input type="hidden" name="booking_email_to" defaultValue={bookingEmailTo} />
              <input type="hidden" name="calendly_event_type" defaultValue={calendlyEventType} />
              <input type="hidden" name="calendly_url" defaultValue={calendlyUrl} />
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

                <div className="mindreach-booking-form__field">
                  <label htmlFor="booking-insurance-front-image">Insurance Front Image</label>
                  <input
                    id="booking-insurance-front-image"
                    name="insurance_front_image"
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp,.gif,image/jpeg,image/png,image/webp,image/gif"
                    onChange={handleInsuranceImageChange}
                  />
                </div>

                <div className="mindreach-booking-form__field">
                  <label htmlFor="booking-insurance-back-image">Insurance Back Image</label>
                  <input
                    id="booking-insurance-back-image"
                    name="insurance_back_image"
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp,.gif,image/jpeg,image/png,image/webp,image/gif"
                    onChange={handleInsuranceImageChange}
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
                  {isSubmitting ? 'Sending Details...' : 'Next: Choose a Time'}
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
