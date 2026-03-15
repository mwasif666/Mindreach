import PageLayout from '../components/layout/PageLayout'
import AppImage from '../components/ui/AppImage'
import DOCTORS from '../data/doctors'

const PAGE_TITLE = 'Doctors | MindReach'
const BODY_CLASS = 'body-bg'

function DoctorPage() {
  return (
    <PageLayout title={PAGE_TITLE} bodyClass={BODY_CLASS}>
      <div>
        <section className="breadcrumb-section position-relative fix doctor-breadcrumb-section">
          <div className="container">
            <div className="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
              <h2 className="black">Doctor</h2>
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>/</li>
                <li>Doctor</li>
              </ul>
            </div>
          </div>
          <img src="/assets/img/about/breadcrumnd-shap.png" alt="" aria-hidden="true" className="bread-ele" />
        </section>

        <section className="feature-section fix section-padding doctor-feature-list">
          <div className="container">
            <div className="featue-wrapper feaure-wrapper2 position-relative">
              <div className="feature-inner">
                {DOCTORS.map((doctor) => (
                  <div key={doctor.id} className="ins d-flex flex-column gap-xxl-4 gap-3">
                    <div className="line" />
                    <div className="feature-items">
                      <div className="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
                        <h4>
                          <a href={doctor.detailsHref} className="black fw_600 text-nowrap">
                            {doctor.name}
                          </a>
                        </h4>
                        <ul className="feature-list d-flex flex-column gap-1">
                          <li>{doctor.role}</li>
                        </ul>
                        <p className="pra fs-seven">{doctor.summary}</p>
                      </div>
                      <a href={doctor.detailsHref} className="cmn-arrows d-center" aria-label={`View ${doctor.name} profile`}>
                        <img src="/assets/img/icon/arrow-right-black.png" alt="" aria-hidden="true" />
                      </a>
                      <AppImage src={doctor.featureImage} alt={doctor.featureImageAlt} wrapperClassName="extra-feature app-image--fill" />
                    </div>
                    <div className="line" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="appoentment-section fix space-bottom">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 order-lg-0 order-1">
                <div className="apoentment-thumb">
                  <AppImage
                    src={DOCTORS[1].featureImage}
                    alt={DOCTORS[1].featureImageAlt}
                    wrapperClassName="app-image--fill"
                    className="rounded-4"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <form
                  action="#"
                  className="appoentment-forms"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <div className="section-title mb-60">
                    <span className="cmn-tag p1-bg heading-font">Book Appointment</span>
                    <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                      Start with the
                      <span className="position-relative z-1">
                        right doctor
                        <img src="/assets/img/element/title-badge1.png" alt="" aria-hidden="true" className="title-badge1 d-md-block d-none w-100" />
                      </span>
                    </h2>
                    <p className="pra pt-3">
                      Review the linked doctor profiles above, then send your request. MindReach will match you with the
                      best available clinician based on your needs, schedule, and treatment goals.
                    </p>
                  </div>
                  <div className="row g-lg-4 g-3">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Preferred Doctor" />
                    </div>
                    <div className="col-lg-12">
                      <textarea name="message" placeholder="Tell us what support you need" rows={5} defaultValue={''} />
                    </div>
                    <div className="col-lg-12">
                      <a
                        href={DOCTORS[0].detailsHref}
                        className="common-btn box-style p2-bg w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden rounded100 wow fadeInRight"
                        data-wow-delay="0.8s"
                      >
                        View First Available Profile
                        <img src="/assets/img/icon/arrow-right-white.png" alt="" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default DoctorPage
