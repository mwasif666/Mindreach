import { useEffect, useRef, useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import AppImage from '../components/ui/AppImage'
import { CONTACT_INFO_CARDS } from '../data/contactDetails'
import MENTAL_HEALTH_SERVICES from '../data/mentalHealthServices'
import useContactForm from '../hooks/useContactForm'

const PAGE_TITLE = 'Contact Us | MindReach'
const BODY_CLASS = 'body-bg'
const CONTACT_IMAGE = '/assets/img/homepage-images/pexels-polina-tankilevitch-5234582.jpg'
const SMS_HELP_PHONE = '+1-979-595-8975'
const SERVICE_OPTIONS = [
  ...MENTAL_HEALTH_SERVICES.map((service) => service.title),
  'Other',
]

function ContactPage() {
  const serviceDropdownRef = useRef(null)
  const [selectedService, setSelectedService] = useState('')
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const {
    formRef,
    handleSubmit,
    isSubmitting,
    toastMessage,
    toastTone,
    isToastVisible,
  } = useContactForm({
    buildSubject: () => 'MindReach contact form submission',
    successMessage: 'Your message has been sent successfully.',
    errorMessage: 'We could not send your message right now. Please try again.',
    onSuccess: () => {
      setSelectedService('')
    },
  })

  useEffect(() => {
    if (!isServiceDropdownOpen) {
      return undefined
    }

    const handlePointerDown = (event) => {
      if (!serviceDropdownRef.current?.contains(event.target)) {
        setIsServiceDropdownOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsServiceDropdownOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isServiceDropdownOpen])

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setIsServiceDropdownOpen(false)
  }

  return (
    <PageLayout title={PAGE_TITLE} bodyClass={BODY_CLASS}>
      <div>
        <section className="breadcrumb-section position-relative fix contact-breadcrumb-section">
          <div className="container">
            <div className="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
              <h2 className="black">Contact Us</h2>
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>/</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <img src="/assets/img/about/breadcrumnd-shap.png" alt="" aria-hidden="true" className="bread-ele" />
        </section>

        <section className="contact-section section-padding fix">
          <div className="container">
            <div className="space-bottom">
              <div className="row g-xl-4 g-4 contact-info-area">
                {CONTACT_INFO_CARDS.map((item, index) => (
                  <div key={item.title} className="col-lg-3 col-md-6 col-sm-6">
                    <div className="contact-info wow fadeInUp" data-wow-delay={`${0.3 + (index * 0.1)}s`}>
                      <div className="icon"><i className={item.iconClassName} /></div>
                      <div className="cont">
                        <h4 className="fw-bold black d-block mb-1">{item.title}</h4>
                        <p className="pra fs-seven mb-0">
                          {item.lines.map((line, lineIndex) => (
                            <span key={`${item.title}-${line}`} className="d-block">
                              {line}
                              {lineIndex < item.lines.length - 1 ? <br /> : null}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="appointment-form" className="contact-wrapper-anys white-bg rounded-4 contact-page-panel">
              <div className="row g-6 align-items-center justify-content-between">
                <div className="col-lg-7">
                  <form
                    ref={formRef}
                    action="#"
                    className="appoentment-forms contact-page-form"
                    onSubmit={handleSubmit}
                  >
                    <input type="hidden" name="source" defaultValue="Contact Us Page" />
                    <div className="section-title mb-60 contact-page-form-copy">
                      <span className="black fw_700 fs-six d-block mb-3 heading-font">Contact Us</span>
                      <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                        We're here to{' '}
                        <span className="position-relative z-1">
                          help
                          <img src="/assets/img/element/title-badge1.png" alt="" aria-hidden="true" className="title-badge1 d-md-block d-none w-100" />
                        </span>
                      </h2>
                      <p className="pra pt-3 mb-0">
                        MindReach is here to answer your questions and guide you to the right support. If you don't see your condition or service listed, contact us and our team will find the right provider for you.
                      </p>
                    </div>

                    {isToastVisible ? (
                      <div
                        className={`mindreach-calendly-modal__toast mindreach-calendly-modal__toast--${toastTone} mb-4`}
                        role={toastTone === 'error' ? 'alert' : 'status'}
                        aria-live="polite"
                      >
                        {toastMessage}
                      </div>
                    ) : null}

                    <div className="row g-lg-4 g-3">
                      <div className="col-lg-6">
                        <input type="text" name="name" placeholder="Your Name" />
                      </div>
                      <div className="col-lg-6">
                        <input type="email" name="email" placeholder="Your Email" />
                      </div>
                      <div className="col-lg-6">
                        <input type="tel" name="phone" placeholder="Phone Number" />
                      </div>
                      <div className="col-lg-6">
                        <input type="hidden" name="service" value={selectedService} />
                        <div
                          ref={serviceDropdownRef}
                          className={`contact-page-service-select${isServiceDropdownOpen ? ' is-open' : ''}`}
                        >
                          <button
                            type="button"
                            className={`contact-page-service-select__button${selectedService ? ' has-value' : ''}`}
                            aria-haspopup="listbox"
                            aria-expanded={isServiceDropdownOpen}
                            onClick={() => setIsServiceDropdownOpen((currentValue) => !currentValue)}
                          >
                            <span>{selectedService || 'Service'}</span>
                            <i className="fas fa-angle-down" aria-hidden="true" />
                          </button>
                          {isServiceDropdownOpen ? (
                            <ul className="contact-page-service-select__menu" role="listbox" aria-label="Service">
                              {SERVICE_OPTIONS.map((service) => (
                                <li key={service} role="option" aria-selected={selectedService === service}>
                                  <button
                                    type="button"
                                    className={selectedService === service ? 'is-selected' : undefined}
                                    onClick={() => handleServiceSelect(service)}
                                  >
                                    {service}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <textarea name="message" placeholder="Message" rows={5} defaultValue={''} />
                      </div>
                      <div className="col-lg-12">
                        <fieldset className="contact-page-sms-consent">
                          <legend>Do you agree to receive SMS from MindReach LLC?</legend>
                          <div className="contact-page-sms-consent__options" role="radiogroup" aria-label="SMS consent">
                            <label>
                              <input type="radio" name="sms_consent" value="yes" />
                              <span>YES</span>
                            </label>
                            <label>
                              <input type="radio" name="sms_consent" value="no" />
                              <span>NO</span>
                            </label>
                          </div>
                          <p>
                            By checking YES, you agree to receive SMS messages from MindReach LLC related to appointment reminders and care coordination updates. You may reply STOP to opt out at any time. Reply HELP to {SMS_HELP_PHONE} for assistance. Messages and data rates may apply. Message frequency will vary. Learn more on our{' '}
                            <a href="/privacy-policy">privacy policy page</a>
                            {' '}and{' '}
                            <a href="/terms-and-conditions">Terms &amp; Conditions</a>
                            .
                          </p>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="common-btn box-style p2-bg w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden rounded100 wow fadeInRight"
                          data-wow-delay="0.8s"
                        >
                          {isSubmitting ? 'Sending...' : 'Submit'}
                          <img src="/assets/img/icon/arrow-right-white.png" alt="" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="col-lg-5">
                  <div className="contact-page-aside">
                    <div className="contact-thumb w-100">
                      <AppImage
                        src={CONTACT_IMAGE}
                        alt="Therapist speaking with a patient during a virtual care planning session"
                        wrapperClassName="app-image--fill"
                        className="rounded-4 w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default ContactPage
