import DoctorCardGrid from '../components/doctors/DoctorCardGrid'
import PageLayout from '../components/layout/PageLayout'
import BookingCtaSection from '../components/ui/BookingCtaSection'
import DOCTORS from '../data/doctors'

const PAGE_TITLE = 'Our Providers | MindReach'
const BODY_CLASS = 'body-bg'

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

        <BookingCtaSection sectionClassName="appoentment-section fix space-bottom" />
      </div>
    </PageLayout>
  )
}

export default DoctorPage
