import { useSearchParams } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import AppImage from '../components/ui/AppImage'
import { CONTACT_INFO_CARDS } from '../data/contactDetails'

const PAGE_TITLE = 'Contact Us | MindReach'
const BODY_CLASS = 'body-bg'
const CONTACT_IMAGE = '/assets/img/homepage-images/pexels-polina-tankilevitch-5234582.jpg'

function ContactPage() {
  const [searchParams] = useSearchParams()
  const selectedDoctor = searchParams.get('doctor')?.trim() ?? ''

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
                    key={selectedDoctor || 'default-contact-form'}
                    action="#"
                    className="appoentment-forms contact-page-form"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <div className="section-title mb-60 contact-page-form-copy">
                      <span className="black fw_700 fs-six d-block mb-3 heading-font">Contact Us</span>
                      <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                        Get an{' '}
                        <span className="position-relative z-1">
                          Appointment
                          <img src="/assets/img/element/title-badge1.png" alt="" aria-hidden="true" className="title-badge1 d-md-block d-none w-100" />
                        </span>
                      </h2>
                      <p className="pra pt-3 mb-0">
                        Reach MindReach for therapy, psychiatry, doctor availability, or appointment scheduling.
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
                        <input type="text" placeholder="Preferred Doctor" defaultValue={selectedDoctor} />
                      </div>
                      <div className="col-lg-12">
                        <textarea name="message" placeholder="Message" rows={5} defaultValue={''} />
                      </div>
                      <div className="col-lg-12">
                        <button
                          type="submit"
                          className="common-btn box-style p2-bg w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden rounded100 wow fadeInRight"
                          data-wow-delay="0.8s"
                        >
                          Book An Appointment
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
