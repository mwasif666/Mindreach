import PageLayout from '../components/layout/PageLayout'
import AppImage from '../components/ui/AppImage'
import DoctorCardGrid from '../components/doctors/DoctorCardGrid'
import DOCTORS from '../data/doctors'
import MENTAL_HEALTH_SERVICES from '../data/mentalHealthServices'

const PAGE_TITLE = 'About Us | MindReach'
const BODY_CLASS = 'body-bg'
const FEATURED_DOCTORS = DOCTORS.slice(0, 3)
const FEATURED_SERVICES = MENTAL_HEALTH_SERVICES.slice(0, 3)

const ABOUT_IMAGES = {
  heroPrimary: '/assets/img/homepage-images/pexels-alex-green-5699431.jpg',
  heroSecondary: '/assets/img/homepage-images/unsplash-feature-thumb.jpg',
  process: '/assets/img/homepage-images/pexels-polina-tankilevitch-5234582.jpg',
}

const ABOUT_POINTS = [
  'Licensed therapists and psychiatrists in one virtual-first platform',
  'Support for anxiety, depression, trauma, panic, ADHD, and mood concerns',
  'Flexible online appointments designed around real schedules and routines',
]

const ABOUT_METRICS = [
  {
    value: '1k+',
    label: 'patients supported through secure online mental health care',
  },
  {
    value: '6',
    label: 'core support areas featured across therapy and psychiatry services',
  },
  {
    value: '3',
    label: 'featured clinicians currently available on the MindReach website',
  },
]

const ABOUT_VALUES = [
  {
    iconClassName: 'fa-solid fa-shield-heart',
    title: 'Private, secure care',
    text: 'Sessions are designed to feel safe, confidential, and simple to join from home, work, or wherever support is easiest to access.',
  },
  {
    iconClassName: 'fa-solid fa-user-doctor',
    title: 'Therapy and psychiatry together',
    text: 'MindReach gives people access to talk therapy, psychiatric assessment, medication follow-up, and coordinated care in one place.',
  },
  {
    iconClassName: 'fa-solid fa-calendar-check',
    title: 'Built for consistency',
    text: 'The platform is structured for follow-through, with practical scheduling, easier check-ins, and care plans that fit everyday life.',
  },
]

const CARE_STEPS = [
  {
    number: '01',
    title: 'Share what support you need',
    text: 'Start with anxiety, depression, trauma, ADHD, burnout, medication questions, or general emotional overwhelm. The goal is to make the first step clear.',
  },
  {
    number: '02',
    title: 'Get matched with the right clinician',
    text: 'Based on your needs, MindReach guides you toward therapy, psychiatry, or the provider profile that best fits your goals and schedule.',
  },
  {
    number: '03',
    title: 'Continue care with steady follow-up',
    text: 'Treatment stays practical through structured sessions, progress tracking, medication review when needed, and support that is easier to stay with.',
  },
]

function AboutPage() {
  return (
    <PageLayout title={PAGE_TITLE} bodyClass={BODY_CLASS}>
      <div>
        <section className="breadcrumb-section position-relative fix about-breadcrumb-section">
          <div className="container">
            <div className="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
              <h2 className="black">About Us</h2>
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>/</li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
          <img src="/assets/img/about/breadcrumnd-shap.png" alt="" aria-hidden="true" className="bread-ele" />
        </section>

        <section className="about-page-hero section-padding fix">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="about-page-hero__copy">
                  <div className="section-title mb-0">
                    <span className="cmn-tag p1-bg heading-font">About MindReach</span>
                    <h2 className="wow fadeInUp black visible-slowly-right mb-xxl-4 mb-3" data-wow-delay=".3s">
                      Mental health support that is easier to
                      <span className="position-relative z-1">
                        start
                        <img src="/assets/img/element/title-badge1.png" alt="" aria-hidden="true" className="title-badge1 d-md-block d-none w-100" />
                      </span>
                      and easier to stay with
                    </h2>
                  </div>

                  <p className="pra about-page-hero__lead">
                    MindReach is a virtual mental health platform connecting people with licensed therapists and
                    psychiatrists for secure online care. The focus is simple access, clear treatment pathways, and
                    support that fits real schedules instead of adding more friction.
                  </p>
                  <p className="pra mb-0">
                    Whether someone needs therapy for anxiety or trauma, psychiatry for medication planning, or
                    behavior-focused support for motivation and routines, MindReach brings that care into one connected
                    experience.
                  </p>

                  <ul className="about-page-hero__points">
                    {ABOUT_POINTS.map((point) => (
                      <li key={point}>
                        <i className="fa-solid fa-check" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex flex-wrap gap-3 about-page-hero__actions">
                    <a href="/book-appointment" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-2 fs18 fw-semibold black overflow-hidden rounded100">
                      Book Appointment
                      <img src="/assets/img/icon/arrow-right-black.png" alt="" aria-hidden="true" />
                    </a>
                    <a href="/doctor" className="common-btn cmn-border d-inline-flex justify-content-center align-items-center gap-2 fs18 fw-semibold black overflow-hidden rounded100">
                      Meet Our Providers
                      <img src="/assets/img/icon/arrow-right-black.png" alt="" aria-hidden="true" />
                    </a>
                  </div>

                  <div className="row g-3 about-page-hero__stats">
                    {ABOUT_METRICS.map((metric) => (
                      <div key={metric.label} className="col-sm-4 col-12">
                        <div className="about-page-stat-card h-100">
                          <h3>{metric.value}</h3>
                          <p className="pra mb-0">{metric.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="about-page-hero__media">
                  <div className="about-page-hero__primary">
                    <AppImage
                      src={ABOUT_IMAGES.heroPrimary}
                      alt="Therapist listening attentively during an online mental health consultation"
                      wrapperClassName="app-image--fill"
                    />
                  </div>
                  <div className="about-page-hero__secondary">
                    <AppImage
                      src={ABOUT_IMAGES.heroSecondary}
                      alt="MindReach clinician preparing for a supportive virtual session"
                      wrapperClassName="app-image--fill"
                    />
                  </div>
                  <div className="about-page-hero__badge">
                    <span className="about-page-hero__badge-label">Virtual care across Pakistan</span>
                    <strong>Flexible online appointments for therapy and psychiatry</strong>
                    <p className="pra mb-0">
                      Care that works around work, study, family routines, and the realities of daily life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page-values cmn-bg section-padding fix">
          <div className="container">
            <div className="section-title text-center mb-60">
              <span className="cmn-tag p1-bg heading-font">What We Stand For</span>
              <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                Care that feels clear, practical, and
                <span className="position-relative z-1">
                  human
                  <img src="/assets/img/element/title-badge1.png" alt="" aria-hidden="true" className="title-badge1 d-md-block d-none w-100" />
                </span>
              </h2>
            </div>

            <div className="row g-4 justify-content-center">
              {ABOUT_VALUES.map((item, index) => (
                <div key={item.title} className="col-lg-4 col-md-6">
                  <div className="about-page-value-card wow fadeInUp" data-wow-delay={`${0.3 + (index * 0.1)}s`}>
                    <div className="about-page-value-card__icon d-center rounded-circle p1-bg">
                      <i className={item.iconClassName} aria-hidden="true" />
                    </div>
                    <h4 className="black">{item.title}</h4>
                    <p className="pra mb-0">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page-process section-padding fix">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="about-page-process__media">
                  <AppImage
                    src={ABOUT_IMAGES.process}
                    alt="Therapist and patient talking through a care plan in a calm support setting"
                    wrapperClassName="app-image--fill"
                  />
                </div>
              </div>

              <div className="col-lg-7">
                <div className="section-title mb-40">
                  <span className="cmn-tag p1-bg heading-font">How Care Works</span>
                  <h2 className="wow fadeInUp black visible-slowly-right mb-3" data-wow-delay=".3s">
                    A simple process built for people who need
                    <span className="position-relative z-1">
                      support
                      <img src="/assets/img/element/title-badge1.png" alt="" aria-hidden="true" className="title-badge1 d-md-block d-none w-100" />
                    </span>
                    without extra stress
                  </h2>
                  <p className="pra mb-0">
                    MindReach is designed to remove common delays and make care feel more manageable from the first
                    message to ongoing follow-up.
                  </p>
                </div>

                <div className="about-page-process__steps">
                  {CARE_STEPS.map((step) => (
                    <div key={step.number} className="about-page-process__step">
                      <span className="about-page-process__number">{step.number}</span>
                      <div className="about-page-process__content">
                        <h4 className="black">{step.title}</h4>
                        <p className="pra mb-0">{step.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page-support cmn-bg section-padding fix">
          <div className="container">
            <div className="section-title text-center mb-60">
              <span className="cmn-tag p1-bg heading-font">What We Support</span>
              <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                The concerns people delay the
                <span className="position-relative z-1">
                  most
                  <img src="/assets/img/element/title-badge1.png" alt="" aria-hidden="true" className="title-badge1 d-md-block d-none w-100" />
                </span>
              </h2>
            </div>

            <div className="row g-4">
              {FEATURED_SERVICES.map((service, index) => (
                <div key={service.id} className="col-lg-4 col-md-6">
                  <div className="about-page-support-card wow fadeInUp" data-wow-delay={`${0.3 + (index * 0.1)}s`}>
                    <div className="about-page-support-card__icon">
                      <img src={service.icon} alt="" aria-hidden="true" />
                    </div>
                    <span className="about-page-support-card__subtitle">{service.subtitle}</span>
                    <h4 className="black">
                      <a href={service.detailsHref}>{service.title}</a>
                    </h4>
                    <p className="pra">{service.summary}</p>
                    <a href={service.detailsHref} className="about-page-support-card__link">
                      Read Details
                      <img src="/assets/img/icon/arrow-right-black.png" alt="" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-page-team section-padding fix">
          <div className="container">
            <div className="d-flex flex-wrap align-items-end justify-content-between gap-3 mb-60">
              <div className="section-title mb-0">
                <span className="cmn-tag p1-bg heading-font">Our Providers</span>
                <h2 className="wow fadeInUp black visible-slowly-right mb-0" data-wow-delay=".3s">
                  Meet the clinicians currently featured on
                  <span className="position-relative z-1">
                    MindReach
                    <img src="/assets/img/element/title-badge1.png" alt="" aria-hidden="true" className="title-badge1 d-md-block d-none w-100" />
                  </span>
                </h2>
              </div>

              <a href="/doctor" className="common-btn mindreach-provider-outline-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-2 fs18 fw-semibold black overflow-hidden rounded100">
                View All Providers
                <img src="/assets/img/icon/arrow-right-black.png" alt="" aria-hidden="true" />
              </a>
            </div>

            <DoctorCardGrid doctors={FEATURED_DOCTORS} />
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default AboutPage
