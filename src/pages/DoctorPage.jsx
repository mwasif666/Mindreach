import DoctorCardGrid from '../components/doctors/DoctorCardGrid'
import PageLayout from '../components/layout/PageLayout'
import AppImage from '../components/ui/AppImage'
import DOCTORS from '../data/doctors'

const PAGE_TITLE = 'Our Providers | MindReach'
const BODY_CLASS = 'body-bg'
const FEATURED_PROVIDER = DOCTORS[0]

function DoctorPage() {
  return (
    <PageLayout title={PAGE_TITLE} bodyClass={BODY_CLASS}>
      <div>
        <section className="breadcrumb-section position-relative fix doctor-breadcrumb-section">
          <div className="container">
            <div className="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
              <h2 className="black">Our Providers</h2>
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>/</li>
                <li>Our Providers</li>
              </ul>
            </div>
          </div>
          <img src="/assets/img/about/breadcrumnd-shap.png" alt="" aria-hidden="true" className="bread-ele" />
        </section>

        <section className="feature-section fix section-padding doctor-feature-list">
          <div className="container">
            <div className="doctor-feature-list__inner">
              <div className="section-title text-center mb-60">
                <span className="cmn-tag p1-bg heading-font">Our Providers</span>
                <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                  Choose the provider who fits your{' '}
                  <span className="position-relative z-1">
                    care needs
                    <img src="/assets/img/element/title-badge1.png" alt="" aria-hidden="true" className="title-badge1 d-md-block d-none w-100" />
                  </span>
                </h2>
                <p className="pra pt-3 mb-0">
                  Browse our providers below. Clicking a profile or appointment button now takes you straight to the booking page for that selected provider.
                </p>
              </div>

              <DoctorCardGrid doctors={DOCTORS} />
            </div>
          </div>
        </section>

        <section className="appoentment-section fix space-bottom">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 order-lg-0 order-1">
                <div className="apoentment-thumb">
                  <AppImage
                    src={FEATURED_PROVIDER.featureImage}
                    alt={FEATURED_PROVIDER.featureImageAlt}
                    wrapperClassName="app-image--fill"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="appoentment-forms">
                  <div className="section-title mb-40">
                    <span className="cmn-tag p1-bg heading-font">Book Appointment</span>
                    <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                      Go straight to the{' '}
                      <span className="position-relative z-1">
                        booking page
                        <img src="/assets/img/element/title-badge1.png" alt="" aria-hidden="true" className="title-badge1 d-md-block d-none w-100" />
                      </span>
                    </h2>
                    <p className="pra pt-3 mb-0">
                      The booking page shows the same providers and opens the right Calendly booking flow for the provider you choose.
                    </p>
                  </div>

                  <a
                    href="/book-appointment"
                    className="common-btn box-style p2-bg w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden rounded100 wow fadeInRight"
                    data-wow-delay="0.8s"
                  >
                    Open Booking Page
                    <img src="/assets/img/icon/arrow-right-white.png" alt="" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default DoctorPage
