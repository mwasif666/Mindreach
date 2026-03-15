import { Navigate, useParams } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import AppImage from '../components/ui/AppImage'
import DOCTORS, { getDoctorById } from '../data/doctors'

const BODY_CLASS = 'body-bg'

function DoctorDetailsPage() {
  const { doctorId } = useParams()
  const doctor = doctorId ? getDoctorById(doctorId) : DOCTORS[0]

  if (doctorId && !doctor) {
    return <Navigate to="/doctor" replace />
  }

  const otherDoctors = DOCTORS.filter((item) => item.id !== doctor.id)

  return (
    <PageLayout title={`${doctor.name} | MindReach`} bodyClass={BODY_CLASS}>
      <div>
        <section className="breadcrumb-section position-relative fix doctor-breadcrumb-section">
          <div className="container">
            <div className="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
              <h2 className="black">Doctor Details</h2>
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>/</li>
                <li>Doctor Details</li>
              </ul>
            </div>
          </div>
          <img src="/assets/img/about/breadcrumnd-shap.png" alt="" aria-hidden="true" className="bread-ele" />
        </section>

        <section className="doctor-details-section section-padding">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="doctor-details-wraping">
                  <div className="mb-40">
                    <span className="cmn-tag p1-bg heading-font mb-3">{doctor.shortRole}</span>
                    <h2 className="black mb-1">{doctor.name}</h2>
                    <span className="pra">{doctor.role}</span>
                    <p className="pt-xl-3 pt-2">{doctor.intro}</p>
                  </div>

                  <div className="doctor-details-hero thumb rounded-4 overflow-hidden mb-40">
                    <AppImage src={doctor.featureImage} alt={doctor.featureImageAlt} wrapperClassName="app-image--fill" className="rounded-4 w-100" />
                  </div>

                  <ul className="doctor-professional mb-40">
                    <li className="d-flex align-items-center">
                      <span className="names">Expertise</span>
                      <span className="pra">{doctor.expertise}</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="names">Education</span>
                      <span className="pra">{doctor.education}</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="names">Experience</span>
                      <span className="pra">{doctor.experience}</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="names">Profession</span>
                      <span className="pra">{doctor.profession}</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="names">Location</span>
                      <span className="pra">{doctor.location}</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="names">Phone</span>
                      <span className="pra">{doctor.phone}</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="names">Email</span>
                      <span className="pra">{doctor.email}</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <span className="names">Website</span>
                      <span className="pra">{doctor.websiteLabel}</span>
                    </li>
                  </ul>

                  <div className="row g-4 mb-40">
                    <div className="col-md-6">
                      <div className="service-dorp-out mindreach-service-detail__info-card h-100">
                        <h5 className="black mb-3">About</h5>
                        <p className="pra mb-0">{doctor.about}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-dorp-out mindreach-service-detail__info-card h-100">
                        <h5 className="black mb-3">{doctor.approachTitle}</h5>
                        <p className="pra mb-0">{doctor.approachText}</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-dorp-out mindreach-service-detail__info-card h-100">
                        <h5 className="black mb-3">Focus Areas</h5>
                        <ul className="mindreach-service-detail__list">
                          {doctor.careHighlights.map((item) => (
                            <li key={`${doctor.id}-highlight-${item}`}>
                              <i className="fa-solid fa-angles-right" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="service-dorp-out mindreach-service-detail__info-card h-100">
                        <h5 className="black mb-3">{doctor.idealForTitle}</h5>
                        <p className="pra mb-0">{doctor.idealForText}</p>
                      </div>
                    </div>
                  </div>

                  <form
                    action="#"
                    className="contact-forms blog-form wow fadeInUp"
                    data-wow-delay="0.6s"
                    onSubmit={(event) => event.preventDefault()}
                  >
                    <h4 className="black mb-xl-4 mb-3">Write Your Message</h4>
                    <div className="row g-lg-4 g-3">
                      <div className="col-lg-12">
                        <textarea name="message" placeholder="Message here.." rows={5} defaultValue={''} />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your Name" className="rounded-5" />
                      </div>
                      <div className="col-lg-6">
                        <input type="email" placeholder="Your Email" className="rounded-5" />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="Phone Number" className="rounded-5" />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="Preferred Time" className="rounded-5" />
                      </div>
                      <div className="col-lg-12 mt-4">
                        <button
                          type="submit"
                          className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold text-white overflow-hidden p2-bg rounded-5 wow fadeInRight"
                          data-wow-delay="0.8s"
                        >
                          Book An Appointment
                          <img src="/assets/img/icon/arrow-right-white.png" alt="" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="blog-details-right">
                  <div className="details-common pt-3 px-3 pb-4">
                    <div className="thumb m-auto w-100 doctor-details-card__thumb">
                      <AppImage src={doctor.image} alt={doctor.imageAlt} wrapperClassName="app-image--fill" className="rounded-4 w-100" />
                    </div>
                    <div className="cont mt-xl-3 mt-2 text-center mb-3">
                      <h4 className="black mb-1">{doctor.name}</h4>
                      <span className="pra d-block">{doctor.role}</span>
                      <span className="pra d-block">{doctor.experienceValue}</span>
                    </div>
                    <div className="social-wrapper d-flex justify-content-center align-items-center">
                      <a href={doctor.phoneHref} className="black" aria-label={`Call ${doctor.name}`}>
                        <i className="fa-solid fa-phone" />
                      </a>
                      <a href={doctor.emailHref} className="black" aria-label={`Email ${doctor.name}`}>
                        <i className="fa-solid fa-envelope" />
                      </a>
                      <a href={doctor.websiteHref} className="black" aria-label={`View ${doctor.name} profile`}>
                        <i className="fa-solid fa-arrow-right" />
                      </a>
                    </div>
                  </div>

                  <div className="details-common category-service">
                    <div className="mb-4">
                      <h4 className="black d-flex align-items-center gap-2 mb-1 fw_700 visible-slowly-right">
                        Availability
                      </h4>
                      <p className="pra">
                        Choose the slot that suits you best and MindReach will confirm the final session timing.
                      </p>
                    </div>
                    <ul className="cates">
                      {doctor.availability.map((slot) => (
                        <li key={`${doctor.id}-${slot.day}`}>
                          <a href="#schedule" className="d-flex align-items-center justify-content-between rounded-4 fs-five black">
                            <span className="pra fs-seven">{slot.day}</span>
                            <span className="just-serial">{slot.time}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="details-common category-service">
                    <div className="mb-4">
                      <h4 className="black d-flex align-items-center gap-2 mb-1 fw_700 visible-slowly-right">
                        Other Doctors
                      </h4>
                      <p className="pra">
                        Explore the other clinician profiles currently featured on the homepage.
                      </p>
                    </div>
                    <ul className="cates">
                      {otherDoctors.map((item) => (
                        <li key={item.id}>
                          <a
                            href={item.detailsHref}
                            className="d-flex align-items-center justify-content-between rounded-4 fs-five black"
                          >
                            <span className="pra fs-seven">{item.name}</span>
                            <span className="just-serial">{item.shortRole}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
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

export default DoctorDetailsPage
