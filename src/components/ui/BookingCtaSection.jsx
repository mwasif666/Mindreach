import AppImage from './AppImage'
import DOCTORS from '../../data/doctors'

const DEFAULT_BOOKING_IMAGE = DOCTORS[0]?.featureImage ?? '/assets/img/homepage-images/unsplash-dentist-1.jpg'
const DEFAULT_BOOKING_IMAGE_ALT = DOCTORS[0]?.featureImageAlt ?? 'MindReach provider during a clinical consultation'

function BookingCtaSection({
  sectionClassName = 'appoentment-section fix',
  imageSrc = DEFAULT_BOOKING_IMAGE,
  imageAlt = DEFAULT_BOOKING_IMAGE_ALT,
  tag = 'Book Appointment',
  leadText = 'Go straight to your',
  highlightText = 'appointment',
  description = 'Choose a provider and open the right Calendly booking flow for the support you need.',
  buttonHref = '/book-appointment',
  buttonLabel = 'Book Appointment',
}) {
  return (
    <section className={sectionClassName}>
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6 order-lg-0 order-1">
            <div className="apoentment-thumb">
              <AppImage
                src={imageSrc}
                alt={imageAlt}
                wrapperClassName="app-image--fill"
                className="rounded-4"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="appoentment-forms">
              <div className="section-title mb-40">
                <span className="cmn-tag p1-bg heading-font">{tag}</span>
                <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                  {leadText}{' '}
                  <span className="position-relative z-1">
                    {highlightText}
                    <img
                      src="/assets/img/element/title-badge1.png"
                      alt=""
                      aria-hidden="true"
                      className="title-badge1 d-md-block d-none w-100"
                    />
                  </span>
                </h2>
                <p className="pra pt-3 mb-0">{description}</p>
              </div>

              <a
                href={buttonHref}
                className="common-btn box-style p2-bg w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden rounded100 wow fadeInRight"
                data-wow-delay="0.8s"
              >
                {buttonLabel}
                <img src="/assets/img/icon/arrow-right-white.png" alt="" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookingCtaSection
