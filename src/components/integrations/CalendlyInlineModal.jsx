import { Modal } from 'antd'

const CALENDLY_BASE_URL = 'https://calendly.com/mwasif66625426'

function buildCalendlyUrl(doctorName) {
  const url = new URL(CALENDLY_BASE_URL)
  url.searchParams.set('hide_landing_page_details', '1')
  url.searchParams.set('hide_gdpr_banner', '1')
  url.searchParams.set('text_color', '1f2a37')
  url.searchParams.set('primary_color', '22b573')

  if (doctorName) {
    url.searchParams.set('utm_content', doctorName)
  }

  return url.toString()
}

function CalendlyInlineModal({ open, onClose, doctorName }) {
  const calendlyUrl = buildCalendlyUrl(doctorName)

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
          <p>Select an available time below to continue your booking.</p>
        </div>

        <div className="mindreach-calendly-modal__frame">
          <iframe
            key={calendlyUrl}
            src={calendlyUrl}
            title={doctorName ? `Calendly booking for ${doctorName}` : 'Calendly booking'}
            className="mindreach-calendly-modal__iframe"
            frameBorder="0"
          />
        </div>
      </div>
    </Modal>
  )
}

export default CalendlyInlineModal
