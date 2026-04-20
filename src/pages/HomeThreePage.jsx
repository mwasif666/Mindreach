import { createElement } from 'react'
import PageLayout from '../components/layout/PageLayout'
import { FiCalendar, FiChevronLeft, FiChevronRight, FiClock, FiShield, FiUsers } from 'react-icons/fi'
import DoctorCardGrid from '../components/doctors/DoctorCardGrid'
import SiteFooter from '../components/layout/SiteFooter'
import AppImage from '../components/ui/AppImage'
import InsuranceLogoMark from '../components/ui/InsuranceLogoMark'
import DOCTORS from '../data/doctors'
import INSURANCE_LOGOS from '../data/insuranceLogos'
import MENTAL_HEALTH_SERVICES from '../data/mentalHealthServices'

const PAGE_TITLE = "MindReach"
const BODY_CLASS = "body-bg2"
const HOMEPAGE_IMAGES = {
  hero: '/assets/img/homepage-images/ChatGPT Image Mar 6, 2026, 10_50_34 AM.png',
  teamDentistOne: '/assets/img/homepage-images/unsplash-dentist-1.jpg',
  teamDentistTwo: '/assets/img/homepage-images/unsplash-dentist-2.jpg',
  teamDentistThree: '/assets/img/homepage-images/unsplash-dentist-4.jpg',
  featureThumb: '/assets/img/homepage-images/unsplash-feature-thumb.jpg',
  featureBackground: '/assets/img/homepage-images/unsplash-feature-bg.jpg',
  aboutTherapySession: '/assets/img/homepage-images/unsplash-therapy-session.jpg',
  appointment: '/assets/img/homepage-images/pexels-polina-tankilevitch-5234582.jpg',
  resourceOne: '/assets/img/homepage-images/ChatGPT Image Mar 6, 2026, 10_50_34 AM.png',
  resourceTwo: '/assets/img/homepage-images/unsplash-feature-bg.jpg',
  resourceThree: '/assets/img/homepage-images/pexels-cottonbro-4100666.jpg',
  testimonialOne: '/assets/img/homepage-images/unsplash-portrait-1.jpg',
  testimonialTwo: '/assets/img/homepage-images/unsplash-portrait-2.jpg',
  testimonialThree: '/assets/img/homepage-images/unsplash-portrait-3.jpg',
}
const SHOW_HOMEPAGE_PRICING = false
const TEAM_MEMBERS = DOCTORS.slice(0, 4)
const HOMEPAGE_TICKER_ITEMS = [
  'A safe space to speak, heal, and grow',
  'Take the first step toward feeling better',
  'A safe space to speak, heal, and grow',
  'Take the first step toward feeling better',
]
const CARE_COUNTERS = [
  {
    value: '95',
    suffix: '%',
    title: 'Secure Virtual Care',
    detail: 'Sessions designed to stay simple, private, and easier to access from anywhere.',
    icon: FiShield,
  },
  {
    value: '90',
    suffix: '%',
    title: 'Scheduling Convenience',
    detail: 'Appointment times shaped around work, home, school, and everyday routines.',
    icon: FiCalendar,
  },
  {
    value: '24',
    suffix: '/7',
    title: 'Support Access',
    detail: 'Care pathways built to feel reachable when you need guidance and follow-up most.',
    icon: FiClock,
  },
  {
    value: '1',
    suffix: 'k+',
    title: 'Patients Supported',
    detail: 'More people already connected to ongoing online therapy and psychiatry support.',
    icon: FiUsers,
  },
]

function HomepageIconButton({ className, label, iconSrc, iconClassName, iconOnly = false, href, ...props }) {
  const Component = href ? 'a' : 'button'

  return (
    <Component
      className={className}
      aria-label={iconOnly ? label : undefined}
      href={href}
      type={href ? undefined : 'button'}
      {...props}
    >
      {!iconOnly ? <span>{label}</span> : null}
      {iconSrc ? (
        <img src={iconSrc} alt="" aria-hidden="true" />
      ) : iconClassName ? (
        <i className={iconClassName} aria-hidden="true" />
      ) : null}
    </Component>
  )
}

function HomeThreePage() {
  return (
    <PageLayout title={PAGE_TITLE} bodyClass={BODY_CLASS} showSharedFooter={false}>
      <div>
        {/* Banner Section Start */}
        <section className="banner-section3 fix bg-cover" style={{backgroundImage: 'url("/assets/img/banner/bg-color3.jpg")'}}>
          <div className="container">
            <div className="row g-5 justify-content-between">
              <div className="col-xxl-7 col-xl-7 col-md-11">
                <div className="hero-content-version3">
                  <span className="cmn-tag p1-bg heading-font mb-xxl-1 mb-3">Mental Health Care</span>
                  <h1 className="black wow fadeInUp" data-wow-delay="0.6s">
                    We Provide<br />
                    <span className="position-relative z-1 hero-highlight">
                      Therapy Services
                      <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                    </span><br /> &amp; Psychiatry Support
                    <img src="/assets/img/banner/icon3_1.svg" alt="icon" className="img-icon" />
                  </h1>
                  <p>
                    Mental health care supports your emotional well-being through therapy, clinical guidance, and personalized
                    treatment plans. MindReach connects you with licensed professionals for secure virtual sessions so you can get
                    support for anxiety, depression, stress, trauma, ADHD, and more.
                  </p>
                  <div className="d-flex flex-wrap align-items-center gap-xxl-4 gap-xl-3 gap-3">
                    <div className="hero-button">
                      <HomepageIconButton
                        className="common-btn box-style text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white p2-bg overflow-hidden rounded100 wow fadeInRight"
                        label="Book Appointment"
                        iconSrc="/assets/img/icon/arrow-right-white.png"
                        href="/book-appointment"
                        data-wow-delay="0.8s"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5 col-md-7">
                <div className="banner-thumb-items">
                  <div className="thumb-shape-1">
                    <div className="hero-theme-backdrop" aria-hidden="true" />
                  </div>
                  <div className="thumb-shape-2">
                    <img src="/assets/img/banner/shape3_1.png" alt="shape-img" />
                  </div>
                  <div className="thumb-shape-3">
                    <img src="/assets/img/banner/search-shape.png" alt="shape-img" />
                  </div>
                  <div className="thumb">
                    <AppImage
                      src={HOMEPAGE_IMAGES.hero}
                      alt="thumb"
                      wrapperClassName="hero-main-image"
                      className="hero-main-image"
                    />
                  </div>
                  <div className="counter-area-1">
                    <div className="counter-content d-center">
                      <h3><span>1k</span>+</h3>
                      <h4>Patients</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* TextSlide System Section Start */}
        <div className="sponsor-text-slide p1-bg swiper">
          <div className="swiper-wrapper">
            {HOMEPAGE_TICKER_ITEMS.map((item, index) => (
              <div key={`${item}-${index}`} className="swiper-slide w-fit">
                <div className="text-slide-item">
                  <span>{item}</span>
                  <FiShield className="text-slide-icon" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="insurance-acceptance-section white-bg">
          <div className="container">
            <div className="section-title text-center insurance-acceptance__header">
              <h2 className="black wow fadeInUp" data-wow-delay=".3s">We accept insurance</h2>
              <p className="insurance-acceptance__subtitle">
                99% of patients have successfully booked with these insurances
              </p>
            </div>
            <div className="insurance-acceptance__carousel">
              <button
                type="button"
                className="array-prev insurance-acceptance__nav-button"
                aria-label="Show previous insurance logos"
              >
                <FiChevronLeft aria-hidden="true" />
              </button>
              <div className="swiper insurance-acceptance__slider">
                <div className="swiper-wrapper">
                  {INSURANCE_LOGOS.map((logo) => (
                    <div key={logo.id} className="swiper-slide">
                      <div className="insurance-acceptance__logo-card" data-logo={logo.id}>
                        <InsuranceLogoMark id={logo.id} name={logo.name} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="array-next insurance-acceptance__nav-button"
                aria-label="Show next insurance logos"
              >
                <FiChevronRight aria-hidden="true" />
              </button>
            </div>
            <div className="insurance-acceptance__pagination swiper-dot dot" />
            <div className="text-center">
              <HomepageIconButton
                className="common-btn box-style first-box insurance-acceptance__cta d-inline-flex justify-content-center align-items-center fs18 fw-semibold overflow-hidden rounded100"
                label="See All Insurances"
                href="/book-appointment"
              />
            </div>
          </div>
        </section>
        {/* Servie Section Start */}
        <section className="services-section cmn-bg fix section-padding">
          <div className="container">
            <div className="section-title text-center mb-60">
              <span className="cmn-tag p1-bg heading-font">Our Services</span>
              <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                Evidence-based virtual care for <br className="services-title-break" />
                <span className="position-relative z-1">
                  anxiety, depression, panic,
                  <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                </span>{' '}
                and more
              </h2>
            </div>
            <div className="row g-4">
              {MENTAL_HEALTH_SERVICES.slice(0, 3).map((service) => (
                <div key={service.id} className="col-lg-4 col-md-6">
                  <div className="service-item3 overflow-hidden white-bg rounded-4 position-relative">
                    <div className="thumb overflow-hidden reveal-left position-relative">
                      <AppImage src={service.image} alt={service.imageAlt} wrapperClassName="app-image--fill" className="overflow-hidden w-100" />
                    </div>
                    <div className="service-content">
                      <h3 className="black"><a href={service.detailsHref}>{service.title}</a></h3>
                      <span className="d-block black fw-semibold mb-2">{service.subtitle}</span>
                      <p className="pra">
                        {service.summary}
                      </p>
                      <div className="service-btn-inner">
                        <HomepageIconButton
                          className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100"
                          label="Read More"
                          iconSrc="/assets/img/icon/arrow-right-black.png"
                          href={service.detailsHref}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
              <HomepageIconButton
                className="common-btn box-style first-box mindreach-services-cta d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100"
                label="View All Services"
                iconSrc="/assets/img/icon/arrow-right-black.png"
                href="/service"
              />
            </div>
          </div>
        </section>
        {/* Servie Section End */}
        {/* About Section Start */}
        <section className="about-section3 cmn-bg fix">
          <div className="container">
            <div className="about-wrapper3">
              <div className="row g-5 justify-content-between">
                <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="about-content3">
                    <div className="section-title">
                      <span className="cmn-tag p1-bg heading-font">About Us</span>
                      <h2 className="wow fadeInUp black visible-slowly-right mb-xxl-4 mb-3" data-wow-delay=".3s">
                        Care That Meets You<br />
                        Where You Are<br />
                        <span className="position-relative z-1">
                          MindReach
                          <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                        </span>{' '}
                        Makes It Simple
                      </h2>
                      <p className="pra mb-sm-4 mb-3 position-relative syle-pra d-flex align-items-center gap-3">
                        <img src="/assets/img/element/pra-element.png" alt="element" className="d-sm-block d-none" />
                        MindReach is a technology-enabled tele-mental health platform that connects individuals with licensed
                        therapists and psychiatrists for secure virtual sessions, often covered by insurance. We reduce common
                        barriers like long waitlists, commuting, and complicated steps, so you can start care sooner and stay
                        supported in a way that fits real life.
                      </p>
                    </div>
                    <div className="progress-wrap">
                      <div className="pro-items wow fadeInUp" data-wow-delay=".5s">
                        <div className="pro-head">
                          <h4 className="title">
                            Secure Virtual Care Experience
                          </h4>
                          <span className="point style">
                            95%
                          </span>
                        </div>
                        <div className="progress">
                          <div className="progress-value" style={{ width: '95%' }} />
                        </div>
                      </div>
                      <div className="pro-items wow fadeInUp" data-wow-delay=".7s">
                        <div className="pro-head">
                          <h4 className="title">
                            Scheduling &amp; Access Convenience
                          </h4>
                          <span className="point">
                            90%
                          </span>
                        </div>
                        <div className="progress">
                          <div className="progress-value" style={{ width: '90%' }} />
                        </div>
                      </div>
                    </div>
                    <div className="about-btn-inner mt-5">
                      <HomepageIconButton
                        className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100"
                        label="Read More"
                        iconSrc="/assets/img/icon/arrow-right-black.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="0.6s">
                  <div className="about-schedule rounded-4 mindreach-about-image-card">
                    <AppImage
                      src={HOMEPAGE_IMAGES.aboutTherapySession}
                      alt="Therapist listening to a patient during a counseling session"
                      wrapperClassName="app-image--fill mindreach-about-image-card__media"
                      className="mindreach-about-image-card__image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Section Start */}
        <section className="team-section3 fix cmn-bg section-padding pb-0">
          <div className="container">
            <div className="section-title text-center mb-60">
              <span className="cmn-tag p1-bg heading-font">The MindReach Team</span>
              <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                Support That Listens<br />Care That{' '}
                <span className="position-relative z-1">
                  Helps
                  <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                </span>
              </h2>
            </div>
            <DoctorCardGrid doctors={TEAM_MEMBERS} />
            <div className="text-center mt-5">
              <HomepageIconButton
                className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100"
                label="View All Providers"
                iconSrc="/assets/img/icon/arrow-right-black.png"
                href="/doctor"
              />
            </div>
          </div>
        </section>
        {/* Testimonial Section Start */}
        <section className="testimonial-section3 section-padding cmn-bg fix">
          <div className="container">
            <div className="section-title text-center mb-60">
              <span className="cmn-tag p1-bg heading-font">MindReach Support</span>
              <h2 className="wow fadeInUp visible-slowly-right" data-wow-delay=".3s">
                What{' '}
                <span className="position-relative z-1">
                  Healing
                  <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                </span>{' '}
                Can Feel Like
              </h2>
            </div>
            <div className="testimonial-wrapper3">
              <div className="swiper testimonial-slider3">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-items3">
                      <div className="testimonial-content">
                        <div className="thumb">
                          <AppImage src={HOMEPAGE_IMAGES.testimonialOne} alt="MindReach client" wrapperClassName="app-image--fill" />
                        </div>
                        <div className="author-details">
                          <h3>MindReach Client</h3>
                          <div className="icon">
                            <img src="/assets/img/testimonial/quote-icons3.png" alt="icon" />
                          </div>
                          <span>Therapy support</span>
                        </div>
                        <p>MindReach helped me start therapy without the stress of commuting or long waitlists. The care feels private, consistent, and easy to fit into my week.</p>
                        <div className="star">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star color-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-items3">
                      <div className="testimonial-content">
                        <div className="thumb">
                          <AppImage src={HOMEPAGE_IMAGES.testimonialTwo} alt="MindReach member" wrapperClassName="app-image--fill" />
                        </div>
                        <div className="author-details">
                          <h3>MindReach Member</h3>
                          <div className="icon">
                            <img src="/assets/img/testimonial/quote-icons3.png" alt="icon" />
                          </div>
                          <span>Psychiatry support</span>
                        </div>
                        <p>The online psychiatry process was clear from day one. Scheduling was simple, follow-ups were smooth, and I felt listened to instead of rushed.</p>
                        <div className="star">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star color-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-items3">
                      <div className="testimonial-content">
                        <div className="thumb">
                          <AppImage src={HOMEPAGE_IMAGES.testimonialThree} alt="MindReach patient" wrapperClassName="app-image--fill" />
                        </div>
                        <div className="author-details">
                          <h3>MindReach Patient</h3>
                          <div className="icon">
                            <img src="/assets/img/testimonial/quote-icons3.png" alt="icon" />
                          </div>
                          <span>Care coordination</span>
                        </div>
                        <p>Between reminders, secure sessions, and flexible hours, getting support finally feels manageable. It made asking for help much easier than I expected.</p>
                        <div className="star">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star color-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="array-button d-flex align-items-between">
                  <button className="array-prev"><i className="fal fa-arrow-left" /></button>
                  <button className="array-next"><i className="fal fa-arrow-right" /></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Latest Project Section Start */}
        <section className="latest-project3 cmn-bg fix">
          <div className="container">
            <div className="d-flex flex-sm-nowrap flex-wrap gap-2 align-items-end justify-content-between mb-60">
              <div className="section-title">
                <span className="cmn-tag p1-bg heading-font mb-3">Featured Care</span>
                <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                  Support for anxiety, depression,<br />panic, trauma, and more
                </h2>
              </div>
              <div className="array-button d-flex align-items-center gap-3 wow fadeInUp" data-wow-delay=".5s">
                <button className="array-prev d-center">
                  <img src="/assets/img/icon/arrow-left-black.png" alt="icon" />
                </button>
                <button className="array-next d-center active">
                  <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                </button>
              </div>
            </div>
            <div className="swiper latest-project3__wrapper">
              <div className="swiper-wrapper">
                {MENTAL_HEALTH_SERVICES.map((service) => (
                  <div key={`featured-${service.id}`} className="swiper-slide">
                    <div className="latest-project-slide3">
                      <div className="thumb">
                        <AppImage src={service.image} alt={service.imageAlt} wrapperClassName="app-image--fill" />
                      </div>
                      <div className="content">
                        <h4><a href={service.detailsHref}>{service.title}</a></h4>
                        <div className="btn-wrapper">
                          <HomepageIconButton
                            className="cmn-arrows1 link-btn d-center"
                            label={service.title}
                            iconSrc="/assets/img/icon/arrow-right-black.png"
                            iconOnly
                            href={service.detailsHref}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Counter Care Section Start */}
        <section className="care-counter3 cmn-bg fix section-padding">
          <div className="container">
            <div className="care-counter-wrap3 mindreach-care-stats">
              <div className="mindreach-care-stats__grid">
                {CARE_COUNTERS.map(({ value, suffix, title, detail, icon }, index) => (
                  <article
                    key={title}
                    className="mindreach-care-stat wow fadeIn"
                    data-wow-delay={`${0.4 + (index * 0.1)}s`}
                  >
                    <span className="mindreach-care-stat__icon" aria-hidden="true">
                      {createElement(icon)}
                    </span>
                    <h2 className="mindreach-care-stat__value">
                      <span className="count">{value}</span>
                      <span className="mindreach-care-stat__suffix">{suffix}</span>
                    </h2>
                    <h3 className="mindreach-care-stat__title">{title}</h3>
                    <p className="mindreach-care-stat__detail">{detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Feature Section Start */}
        <section className="feature-section3 fix cmn-bg">
          <div className="container">
            <div className="feature-wrapper3">
              <div className="row g-4 mb-30">
                <div className="col-xl-6 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="feature-items1">
                    <div className="content">
                      <h2>Compassionate care, real lasting progress</h2>
                      <p>Mind Reach makes therapy and psychiatry easier to access with secure virtual sessions and evidence-based support.</p>
                      <div className="feature-btn-inner">
                        <HomepageIconButton
                          className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100"
                          label="Read More"
                          iconSrc="/assets/img/icon/arrow-right-black.png"
                        />
                      </div>
                    </div>
                    <div className="icon">
                      <img src="/assets/img/feature/featureIcon3_1.png" alt="icon" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="feature-thumb">
                    <AppImage src={HOMEPAGE_IMAGES.featureThumb} alt="Therapy session" wrapperClassName="app-image--fill" />
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="feature-content">
                    <span>24/7</span>
                    <h4>Support Access</h4>
                    <p>Book online anytime and meet from anywhere. No long waitlists, just private, secure care when you need it.</p>
                  </div>
                </div>
              </div>
              <div className="row g-4">
                <div className="col-xl-9 col-lg-8 wow fadeInUp" data-wow-delay="0.9s">
                  <div className="feature-inner-items2 reveal-left bg-cover rounded-4" style={{backgroundImage: `url(${HOMEPAGE_IMAGES.featureBackground})`}}>
                    <div className="content">
                      <h1>MindReach Makes It Simple</h1>
                      <p>Secure virtual sessions, flexible scheduling, and licensed care that fits your routine.</p>
                      <div className="feature-btn-inner">
                        <HomepageIconButton
                          className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100"
                          label="Read More"
                          iconSrc="/assets/img/icon/arrow-right-black.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 wow fadeInUp" data-wow-delay="1.3s">
                  <div className="feature-inner-items3">
                      <h3>Support That Stays With You</h3>
                    <ul className="list-area d-flex flex-column pb-xl-3">
                      <li className="d-flex align-items-center gap-lg-2 gap-1 fs-six">
                        <i className="fa-solid fa-angles-right" /> Compassionate Care
                      </li>
                      <li className="d-flex align-items-center gap-lg-2 gap-1 fs-six">
                        <i className="fa-solid fa-angles-right" /> Evidence-Based Support
                      </li>
                      <li className="d-flex align-items-center gap-lg-2 gap-1 fs-six">
                        <i className="fa-solid fa-angles-right" /> Confidential Sessions
                      </li>
                      <li className="d-flex align-items-center gap-lg-2 gap-1 fs-six">
                        <i className="fa-solid fa-angles-right" /> Care That Fits Life
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section Start */}
        {SHOW_HOMEPAGE_PRICING ? (
        <section className="pricing-section3 fix section-padding space-top cmn-bg">
          <div className="container">
            <div className="section-title text-center mb-60">
              <span className="cmn-tag p1-bg heading-font">Pricing Plan</span>
              <h2 className="wow fadeInUp visible-slowly-right" data-wow-delay=".3s">
                Care plans that fit your life <br /> built for{' '}
                <span className="position-relative z-1">
                  support
                  <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                </span>
              </h2>
              <div className="pricing-content">
                <div className="pricing-tab-header">
                  <ul className="nav" role="tablist">
                    <li className="nav-item wow fadeInUp" data-wow-delay=".3s" role="presentation">
                      <a href="#monthly" data-bs-toggle="tab" className="nav-link1" aria-selected="false" role="tab" tabIndex={-1}>
                        Per Session
                      </a>
                    </li>
                    <li className="nav-item wow fadeInUp" data-wow-delay=".5s" role="presentation">
                      <a href="#yearly" data-bs-toggle="tab" className="nav-link2 active" aria-selected="true" role="tab">
                        Monthly
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="tab-content">
              <div id="monthly" className="tab-pane fade" role="tabpanel">
                <div className="row g-xxl-5 g-4 justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="pricing-items3">
                      <div className="icon">
                        <svg width={70} height={71} viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_6100_575)">
                            <path d="M50.1116 70.1641C46.5737 70.1641 43.5287 67.6703 42.8753 64.2316L39.6145 47.0903C39.1974 44.9116 37.2578 43.3307 35.0003 43.3307C32.7428 43.3307 30.8032 44.9116 30.3891 47.0903L27.1282 64.2286C26.472 67.6703 23.4299 70.1641 19.8891 70.1641C16.1178 70.1641 12.9707 67.3699 12.5682 63.6628L11.2907 51.9261C10.8299 47.6795 9.92574 43.4736 8.60158 39.4166L6.11074 31.7749C3.99324 25.2736 2.91699 18.5157 2.91699 11.6849C2.91699 5.3324 8.14949 0.164062 14.5837 0.164062C19.3232 0.164062 23.9024 1.31906 28.8287 3.69615C32.982 5.70281 37.0216 5.70281 41.172 3.69615C46.0982 1.31906 50.6774 0.164062 55.1691 0.164062C61.8512 0.164062 67.0837 5.3324 67.0837 11.6849C67.0837 18.5128 66.0074 25.2736 63.8899 31.7778L61.3991 39.4166C60.0749 43.4736 59.1707 47.6795 58.7099 51.9261L57.4324 63.6628C57.0299 67.3699 53.8828 70.1641 50.1116 70.1641ZM35.0003 40.4141C38.6578 40.4141 41.8049 42.9924 42.4757 46.5478L45.7366 63.6861C46.1303 65.7482 47.9707 67.2474 50.1116 67.2474C52.3895 67.2474 54.2912 65.5703 54.5332 63.3478L55.8107 51.6111C56.2949 47.1691 57.2428 42.7591 58.6282 38.5124L61.1191 30.8736C63.1403 24.6641 64.167 18.2066 64.167 11.6849C64.167 6.93948 60.2412 3.08073 55.417 3.08073C51.1237 3.08073 46.9616 4.1424 42.4407 6.32406C37.5028 8.70698 32.4949 8.70698 27.5599 6.32406C23.0391 4.1424 18.877 3.08073 14.8316 3.08073C9.75949 3.08073 5.83366 6.93948 5.83366 11.6849C5.83366 18.2066 6.86033 24.6641 8.88449 30.8736L11.3753 38.5124C12.7607 42.7591 13.7087 47.1661 14.1899 51.6082L15.4674 63.3449C15.7095 65.5703 17.6112 67.2474 19.8891 67.2474C22.0299 67.2474 23.8674 65.7482 24.2612 63.6832L27.522 46.5449C28.1957 42.9924 31.3428 40.4141 35.0003 40.4141Z" fill="#14B8A6" />
                            <path d="M61.9792 32.2474H51.73C48.9504 32.2474 46.4538 30.7044 45.2083 28.2165L44.0563 25.9153C43.3125 24.4249 41.8104 23.4974 40.145 23.4974H29.855C28.1896 23.4974 26.6875 24.4249 25.9438 25.9153L24.7917 28.2165C23.5463 30.7044 21.0496 32.2474 18.27 32.2474H8.02083C7.21583 32.2474 6.5625 31.594 6.5625 30.789C6.5625 29.984 7.21583 29.3307 8.02083 29.3307H18.27C19.9354 29.3307 21.4346 28.4032 22.1813 26.9128L23.3333 24.6115C24.5788 22.1236 27.0754 20.5807 29.855 20.5807H40.145C42.9246 20.5807 45.4212 22.1236 46.6667 24.6115L47.8188 26.9128C48.5625 28.4032 50.0646 29.3307 51.73 29.3307H61.9792C62.7842 29.3307 63.4375 29.984 63.4375 30.789C63.4375 31.594 62.7842 32.2474 61.9792 32.2474Z" fill="#14B8A6" />
                          </g>
                          <defs>
                            <clipPath id="clip0_6100_575">
                              <rect width={70} height={70} fill="white" transform="translate(0 0.164062)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="pricing-head">
                        <h4 className="mb-2">Starter</h4>
                        <div className="d-flex align-items-end">
                          <h2>$29</h2>
                          <h6>/session</h6>
                        </div>
                      </div>
                      <ul className="pricing-list d-flex flex-column mb-4 pb-xl-3">
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> Secure virtual session (video)
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> Therapist matching support
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> Flexible scheduling
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> HIPAA-compliant platform
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-xmark" /> Email support
                        </li>
                      </ul>
                      <HomepageIconButton
                        className="common-btn box-style w-100 first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden bg-color rounded100"
                        label="Book Appointment"
                        iconSrc="/assets/img/icon/arrow-right-black.png"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="pricing-items3 premium">
                      <div className="icon">
                        <svg width={70} height={71} viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_6100_531)">
                            <path d="M41.3731 41.6537C40.956 41.6537 40.5331 41.5983 40.1072 41.4845C38.0072 40.9216 36.5664 39.0433 36.6831 37.0133L37.5347 27.2016C37.5727 26.5454 36.9835 25.8541 36.161 25.6324C35.3414 25.4079 34.4868 25.7199 34.1689 26.347L30.0418 35.1904C29.1085 37.0424 26.9093 37.9466 24.8181 37.3895C22.5722 36.7858 21.1139 34.7179 21.4231 32.577L22.2252 27.0091C22.2835 26.6474 22.4468 23.9495 22.7531 17.5387C22.9018 14.4354 23.386 11.3495 24.1822 8.36869C24.6752 6.52827 25.8535 4.99119 27.5072 4.03744C29.1552 3.08661 31.086 2.82994 32.9206 3.32577C34.1981 3.66702 35.356 4.35244 36.2718 5.30036C38.8531 7.96911 42.671 8.99869 46.2352 7.96911C47.501 7.61036 48.8514 7.59577 50.126 7.93702C53.9264 8.95202 56.1868 12.872 55.1718 16.6724C54.3697 19.6591 53.2439 22.5699 51.8235 25.332C48.8747 31.0487 47.676 33.452 47.5389 33.7962L45.4535 39.0141C44.8031 40.6445 43.1668 41.6537 41.3731 41.6537ZM35.6331 22.6458C36.0589 22.6458 36.4906 22.7012 36.9193 22.8179C39.0777 23.3983 40.5622 25.3291 40.4427 27.4116L39.591 37.2262C39.556 37.827 40.1043 38.4658 40.8627 38.6699C41.6793 38.8887 42.4989 38.562 42.7497 37.9291L44.8352 32.7112C45.0568 32.1541 46.5385 29.2229 49.2335 23.9962C50.5606 21.4179 51.6077 18.7024 52.3514 15.9229C52.646 14.832 52.4972 13.6945 51.9314 12.7204C51.3714 11.7462 50.4585 11.0491 49.3735 10.7574C48.6035 10.5533 47.7956 10.562 47.0372 10.7749C42.4347 12.0933 37.5056 10.772 34.1747 7.33036C33.6264 6.76161 32.9264 6.35036 32.1622 6.14619C31.0772 5.85452 29.9368 6.00619 28.9627 6.56911C27.9885 7.12619 27.2914 8.03619 27.0027 9.12119C26.256 11.9037 25.8068 14.7824 25.6639 17.6787C25.5093 20.9716 25.2293 26.6212 25.1156 27.4262L24.3135 32.9912C24.2172 33.662 24.7714 34.3562 25.5764 34.572C26.3202 34.7674 27.1281 34.4933 27.4227 33.9158L31.5497 25.0724C32.3197 23.547 33.9181 22.6458 35.6331 22.6458Z" fill="#090A0B" />
                            <path d="M62.7083 70.1641H7.29167C3.26958 70.1641 0 66.8916 0 62.8724V36.6224C0 34.2104 1.96292 32.2474 4.375 32.2474H10.4621C12.5242 32.2474 14.3267 33.7204 14.7496 35.7504C16.0125 41.852 16.7563 46.5537 16.7621 46.6004C17.3658 51.7454 21.8021 55.5808 27.0842 55.5808C29.6421 55.5808 32.1008 54.6504 34.0113 52.9587C34.5596 52.4716 35.3937 52.4716 35.9392 52.9558C37.8642 54.6504 40.3404 55.5808 42.9158 55.5808C48.2008 55.5808 52.6342 51.7483 53.2321 46.6616C53.2438 46.5654 53.9525 41.9716 55.2475 35.7474C55.6646 33.7204 57.4671 32.2474 59.5321 32.2474H65.625C68.0371 32.2474 70 34.2104 70 36.6224V62.8724C70 66.8916 66.7304 70.1641 62.7083 70.1641ZM4.375 35.1641C3.57292 35.1641 2.91667 35.8174 2.91667 36.6224V62.8724C2.91667 65.2845 4.87958 67.2474 7.29167 67.2474H62.7083C65.1204 67.2474 67.0833 65.2845 67.0833 62.8724V36.6224C67.0833 35.8174 66.4271 35.1641 65.625 35.1641H59.5321C58.8467 35.1641 58.2458 35.657 58.1058 36.3366C56.8283 42.4849 56.1254 47.0087 56.1196 47.0524C55.3554 53.5566 49.6767 58.4974 42.9158 58.4974C40.0488 58.4974 37.2721 57.5904 34.9796 55.9191C32.6987 57.5904 29.9396 58.4974 27.0842 58.4974C20.3233 58.4974 14.6417 53.5537 13.8717 46.997C13.1017 40.4404 13.1367 42.3624 11.8942 36.3424C11.7513 35.6599 11.1475 35.1641 10.4621 35.1641H4.375Z" fill="#090A0B" />
                            <path d="M7.29174 17.664C6.91841 17.664 6.54508 17.5211 6.25924 17.2382L3.34258 14.3215C2.77383 13.7528 2.77383 12.8282 3.34258 12.2594C3.91133 11.6907 4.83591 11.6907 5.40466 12.2594L8.32133 15.1761C8.89008 15.7449 8.89008 16.6694 8.32133 17.2382C8.03841 17.5211 7.66508 17.664 7.29174 17.664Z" fill="#090A0B" />
                            <path d="M13.1253 14.7474C12.3203 14.7474 11.667 14.0941 11.667 13.2891V10.3724C11.667 9.5674 12.3203 8.91406 13.1253 8.91406C13.9303 8.91406 14.5837 9.5674 14.5837 10.3724V13.2891C14.5837 14.0941 13.9303 14.7474 13.1253 14.7474Z" fill="#090A0B" />
                            <path d="M4.375 23.4974H1.45833C0.653333 23.4974 0 22.844 0 22.039C0 21.234 0.653333 20.5807 1.45833 20.5807H4.375C5.18 20.5807 5.83333 21.234 5.83333 22.039C5.83333 22.844 5.18 23.4974 4.375 23.4974Z" fill="#090A0B" />
                          </g>
                          <defs>
                            <clipPath id="clip0_6100_531">
                              <rect width={70} height={70} fill="white" transform="translate(0 0.164062)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="pricing-head">
                        <h4 className="mb-2">Standard</h4>
                        <div className="d-flex align-items-end">
                          <h2>$39</h2>
                          <h6>/session</h6>
                        </div>
                      </div>
                      <ul className="pricing-list d-flex flex-column mb-4 pb-xl-3">
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six black">
                          <i className="fa-regular fa-check" /> Secure virtual session (video)
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six black">
                          <i className="fa-regular fa-check" /> Therapist matching support
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six black">
                          <i className="fa-regular fa-check" /> Flexible scheduling
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six black">
                          <i className="fa-regular fa-check" /> HIPAA-compliant platform
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six black">
                          <i className="fa-regular fa-xmark" /> Email support
                        </li>
                      </ul>
                      <HomepageIconButton
                        className="common-btn box-style w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white p2-bg overflow-hidden rounded100 wow fadeInRight"
                        label="Book Appointment"
                        iconSrc="/assets/img/icon/arrow-right-white.png"
                        data-wow-delay="0.8s"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
                    <div className="pricing-items3">
                      <div className="icon">
                        <svg width={70} height={71} viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_6100_579)">
                            <path d="M65.625 58.4974H4.375C1.96292 58.4974 0 56.5344 0 54.1224V16.2057C0 13.7936 1.96292 11.8307 4.375 11.8307H10.2083C11.0133 11.8307 11.6667 12.484 11.6667 13.289C11.6667 14.094 11.0133 14.7474 10.2083 14.7474H4.375C3.57 14.7474 2.91667 15.4007 2.91667 16.2057V54.1224C2.91667 54.9244 3.57 55.5807 4.375 55.5807H65.625C66.43 55.5807 67.0833 54.9244 67.0833 54.1224V16.2057C67.0833 15.4007 66.43 14.7474 65.625 14.7474H59.7917C58.9867 14.7474 58.3333 14.094 58.3333 13.289C58.3333 12.484 58.9867 11.8307 59.7917 11.8307H65.625C68.0371 11.8307 70 13.7936 70 16.2057V54.1224C70 56.5344 68.0371 58.4974 65.625 58.4974Z" fill="#14B8A6" />
                            <path d="M48.1253 70.164H21.8753C21.0703 70.164 20.417 69.5106 20.417 68.7056C20.417 67.9006 21.0703 67.2473 21.8753 67.2473H48.1253C48.9303 67.2473 49.5837 67.9006 49.5837 68.7056C49.5837 69.5106 48.9303 70.164 48.1253 70.164Z" fill="#14B8A6" />
                            <path d="M30.6253 70.1641C29.8203 70.1641 29.167 69.5108 29.167 68.7058V57.0391C29.167 56.2341 29.8203 55.5808 30.6253 55.5808C31.4303 55.5808 32.0837 56.2341 32.0837 57.0391V68.7058C32.0837 69.5108 31.4303 70.1641 30.6253 70.1641Z" fill="#14B8A6" />
                            <path d="M39.3753 70.1641C38.5703 70.1641 37.917 69.5108 37.917 68.7058V57.0391C37.917 56.2341 38.5703 55.5808 39.3753 55.5808C40.1803 55.5808 40.8337 56.2341 40.8337 57.0391V68.7058C40.8337 69.5108 40.1803 70.1641 39.3753 70.1641Z" fill="#14B8A6" />
                            <path d="M42.9126 35.1641C40.7368 35.1641 38.8584 33.7203 38.4443 31.7311L36.7293 22.0303C36.5951 21.3886 35.8484 20.8724 34.9997 20.8724C34.1509 20.8724 33.4043 21.3886 33.2613 22.0741L31.5609 31.6874C31.138 33.7203 29.2597 35.1641 27.0868 35.1641C24.7622 35.1641 22.8197 33.5424 22.563 31.3899L21.8951 25.8074C21.8513 25.4428 21.3176 22.812 19.9497 16.5236C19.2905 13.4932 18.958 10.3899 18.958 7.29823C18.958 3.36365 22.1576 0.164062 26.0922 0.164062C27.4134 0.164062 28.7084 0.522813 29.843 1.2024C33.0251 3.1099 36.9743 3.1099 40.1563 1.2024C41.2909 0.522813 42.5888 0.164062 43.9072 0.164062C47.8418 0.164062 51.0413 3.36365 51.0413 7.29823C51.0413 10.3928 50.7088 13.4961 50.0497 16.5266C48.323 24.457 48.1218 25.6353 48.1043 25.8074L47.4393 31.3928C47.1826 33.5424 45.2372 35.1641 42.9126 35.1641ZM34.9997 17.9557C37.2368 17.9557 39.1676 19.4374 39.5934 21.482L41.3084 31.1799C41.4309 31.7691 42.1251 32.2474 42.9126 32.2474C43.7468 32.2474 44.4613 31.7195 44.5401 31.0457L45.208 25.4632C45.2343 25.2474 45.313 24.5911 47.2001 15.9082C47.8126 13.082 48.1247 10.1857 48.1247 7.30115C48.1247 4.97365 46.2347 3.08073 43.9072 3.08073C43.1168 3.08073 42.338 3.29656 41.6584 3.7049C37.5518 6.16948 32.4505 6.16948 28.3438 3.7049C27.6613 3.29656 26.8826 3.08073 26.0922 3.08073C23.7647 3.08073 21.8747 4.97073 21.8747 7.29823C21.8747 10.1828 22.1868 13.0791 22.7993 15.9053C24.0505 21.6511 24.7213 24.8653 24.7913 25.4603L25.4563 31.0457C25.538 31.7195 26.2526 32.2474 27.0868 32.2474C27.8743 32.2474 28.5684 31.7691 28.6997 31.1361L30.4001 21.5257C30.8318 19.4374 32.7626 17.9557 34.9997 17.9557Z" fill="#14B8A6" />
                          </g>
                          <defs>
                            <clipPath id="clip0_6100_579">
                              <rect width={70} height={70} fill="white" transform="translate(0 0.164062)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="pricing-head">
                        <h4 className="mb-2">Complete</h4>
                        <div className="d-flex align-items-end">
                          <h2>$59</h2>
                          <h6>/session</h6>
                        </div>
                      </div>
                      <ul className="pricing-list d-flex flex-column mb-4 pb-xl-3">
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> Secure virtual session (video)
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> Therapist matching support
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> Flexible scheduling
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> HIPAA-compliant platform
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-xmark" /> Email support
                        </li>
                      </ul>
                      <HomepageIconButton
                        className="common-btn box-style w-100 first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden bg-color rounded100"
                        label="Book Appointment"
                        iconSrc="/assets/img/icon/arrow-right-black.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div id="yearly" className="tab-pane fade active show" role="tabpanel">
                <div className="row g-xxl-5 g-4 justify-content-center align-items-center">
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="pricing-items3">
                      <div className="icon">
                        <svg width={70} height={71} viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_6100_575)">
                            <path d="M50.1116 70.1641C46.5737 70.1641 43.5287 67.6703 42.8753 64.2316L39.6145 47.0903C39.1974 44.9116 37.2578 43.3307 35.0003 43.3307C32.7428 43.3307 30.8032 44.9116 30.3891 47.0903L27.1282 64.2286C26.472 67.6703 23.4299 70.1641 19.8891 70.1641C16.1178 70.1641 12.9707 67.3699 12.5682 63.6628L11.2907 51.9261C10.8299 47.6795 9.92574 43.4736 8.60158 39.4166L6.11074 31.7749C3.99324 25.2736 2.91699 18.5157 2.91699 11.6849C2.91699 5.3324 8.14949 0.164062 14.5837 0.164062C19.3232 0.164062 23.9024 1.31906 28.8287 3.69615C32.982 5.70281 37.0216 5.70281 41.172 3.69615C46.0982 1.31906 50.6774 0.164062 55.1691 0.164062C61.8512 0.164062 67.0837 5.3324 67.0837 11.6849C67.0837 18.5128 66.0074 25.2736 63.8899 31.7778L61.3991 39.4166C60.0749 43.4736 59.1707 47.6795 58.7099 51.9261L57.4324 63.6628C57.0299 67.3699 53.8828 70.1641 50.1116 70.1641ZM35.0003 40.4141C38.6578 40.4141 41.8049 42.9924 42.4757 46.5478L45.7366 63.6861C46.1303 65.7482 47.9707 67.2474 50.1116 67.2474C52.3895 67.2474 54.2912 65.5703 54.5332 63.3478L55.8107 51.6111C56.2949 47.1691 57.2428 42.7591 58.6282 38.5124L61.1191 30.8736C63.1403 24.6641 64.167 18.2066 64.167 11.6849C64.167 6.93948 60.2412 3.08073 55.417 3.08073C51.1237 3.08073 46.9616 4.1424 42.4407 6.32406C37.5028 8.70698 32.4949 8.70698 27.5599 6.32406C23.0391 4.1424 18.877 3.08073 14.8316 3.08073C9.75949 3.08073 5.83366 6.93948 5.83366 11.6849C5.83366 18.2066 6.86033 24.6641 8.88449 30.8736L11.3753 38.5124C12.7607 42.7591 13.7087 47.1661 14.1899 51.6082L15.4674 63.3449C15.7095 65.5703 17.6112 67.2474 19.8891 67.2474C22.0299 67.2474 23.8674 65.7482 24.2612 63.6832L27.522 46.5449C28.1957 42.9924 31.3428 40.4141 35.0003 40.4141Z" fill="#14B8A6" />
                            <path d="M61.9792 32.2474H51.73C48.9504 32.2474 46.4538 30.7044 45.2083 28.2165L44.0563 25.9153C43.3125 24.4249 41.8104 23.4974 40.145 23.4974H29.855C28.1896 23.4974 26.6875 24.4249 25.9438 25.9153L24.7917 28.2165C23.5463 30.7044 21.0496 32.2474 18.27 32.2474H8.02083C7.21583 32.2474 6.5625 31.594 6.5625 30.789C6.5625 29.984 7.21583 29.3307 8.02083 29.3307H18.27C19.9354 29.3307 21.4346 28.4032 22.1813 26.9128L23.3333 24.6115C24.5788 22.1236 27.0754 20.5807 29.855 20.5807H40.145C42.9246 20.5807 45.4212 22.1236 46.6667 24.6115L47.8188 26.9128C48.5625 28.4032 50.0646 29.3307 51.73 29.3307H61.9792C62.7842 29.3307 63.4375 29.984 63.4375 30.789C63.4375 31.594 62.7842 32.2474 61.9792 32.2474Z" fill="#14B8A6" />
                          </g>
                          <defs>
                            <clipPath id="clip0_6100_575">
                              <rect width={70} height={70} fill="white" transform="translate(0 0.164062)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="pricing-head">
                        <h4 className="mb-2">Starter</h4>
                        <div className="d-flex align-items-end">
                          <h2>$29</h2>
                          <h6>/month</h6>
                        </div>
                      </div>
                      <ul className="pricing-list d-flex flex-column mb-4 pb-xl-3">
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> Secure virtual session (video)
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> Therapist matching support
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> Flexible scheduling
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> HIPAA-compliant platform
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-xmark" /> Email support
                        </li>
                      </ul>
                      <HomepageIconButton
                        className="common-btn box-style w-100 first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden bg-color rounded100"
                        label="Book Appointment"
                        iconSrc="/assets/img/icon/arrow-right-black.png"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="pricing-items3 premium">
                      <div className="icon">
                        <svg width={70} height={71} viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_6100_531)">
                            <path d="M41.3731 41.6537C40.956 41.6537 40.5331 41.5983 40.1072 41.4845C38.0072 40.9216 36.5664 39.0433 36.6831 37.0133L37.5347 27.2016C37.5727 26.5454 36.9835 25.8541 36.161 25.6324C35.3414 25.4079 34.4868 25.7199 34.1689 26.347L30.0418 35.1904C29.1085 37.0424 26.9093 37.9466 24.8181 37.3895C22.5722 36.7858 21.1139 34.7179 21.4231 32.577L22.2252 27.0091C22.2835 26.6474 22.4468 23.9495 22.7531 17.5387C22.9018 14.4354 23.386 11.3495 24.1822 8.36869C24.6752 6.52827 25.8535 4.99119 27.5072 4.03744C29.1552 3.08661 31.086 2.82994 32.9206 3.32577C34.1981 3.66702 35.356 4.35244 36.2718 5.30036C38.8531 7.96911 42.671 8.99869 46.2352 7.96911C47.501 7.61036 48.8514 7.59577 50.126 7.93702C53.9264 8.95202 56.1868 12.872 55.1718 16.6724C54.3697 19.6591 53.2439 22.5699 51.8235 25.332C48.8747 31.0487 47.676 33.452 47.5389 33.7962L45.4535 39.0141C44.8031 40.6445 43.1668 41.6537 41.3731 41.6537ZM35.6331 22.6458C36.0589 22.6458 36.4906 22.7012 36.9193 22.8179C39.0777 23.3983 40.5622 25.3291 40.4427 27.4116L39.591 37.2262C39.556 37.827 40.1043 38.4658 40.8627 38.6699C41.6793 38.8887 42.4989 38.562 42.7497 37.9291L44.8352 32.7112C45.0568 32.1541 46.5385 29.2229 49.2335 23.9962C50.5606 21.4179 51.6077 18.7024 52.3514 15.9229C52.646 14.832 52.4972 13.6945 51.9314 12.7204C51.3714 11.7462 50.4585 11.0491 49.3735 10.7574C48.6035 10.5533 47.7956 10.562 47.0372 10.7749C42.4347 12.0933 37.5056 10.772 34.1747 7.33036C33.6264 6.76161 32.9264 6.35036 32.1622 6.14619C31.0772 5.85452 29.9368 6.00619 28.9627 6.56911C27.9885 7.12619 27.2914 8.03619 27.0027 9.12119C26.256 11.9037 25.8068 14.7824 25.6639 17.6787C25.5093 20.9716 25.2293 26.6212 25.1156 27.4262L24.3135 32.9912C24.2172 33.662 24.7714 34.3562 25.5764 34.572C26.3202 34.7674 27.1281 34.4933 27.4227 33.9158L31.5497 25.0724C32.3197 23.547 33.9181 22.6458 35.6331 22.6458Z" fill="#090A0B" />
                            <path d="M62.7083 70.1641H7.29167C3.26958 70.1641 0 66.8916 0 62.8724V36.6224C0 34.2104 1.96292 32.2474 4.375 32.2474H10.4621C12.5242 32.2474 14.3267 33.7204 14.7496 35.7504C16.0125 41.852 16.7563 46.5537 16.7621 46.6004C17.3658 51.7454 21.8021 55.5808 27.0842 55.5808C29.6421 55.5808 32.1008 54.6504 34.0113 52.9587C34.5596 52.4716 35.3937 52.4716 35.9392 52.9558C37.8642 54.6504 40.3404 55.5808 42.9158 55.5808C48.2008 55.5808 52.6342 51.7483 53.2321 46.6616C53.2438 46.5654 53.9525 41.9716 55.2475 35.7474C55.6646 33.7204 57.4671 32.2474 59.5321 32.2474H65.625C68.0371 32.2474 70 34.2104 70 36.6224V62.8724C70 66.8916 66.7304 70.1641 62.7083 70.1641ZM4.375 35.1641C3.57292 35.1641 2.91667 35.8174 2.91667 36.6224V62.8724C2.91667 65.2845 4.87958 67.2474 7.29167 67.2474H62.7083C65.1204 67.2474 67.0833 65.2845 67.0833 62.8724V36.6224C67.0833 35.8174 66.4271 35.1641 65.625 35.1641H59.5321C58.8467 35.1641 58.2458 35.657 58.1058 36.3366C56.8283 42.4849 56.1254 47.0087 56.1196 47.0524C55.3554 53.5566 49.6767 58.4974 42.9158 58.4974C40.0488 58.4974 37.2721 57.5904 34.9796 55.9191C32.6987 57.5904 29.9396 58.4974 27.0842 58.4974C20.3233 58.4974 14.6417 53.5537 13.8717 46.997C13.1017 40.4404 13.1367 42.3624 11.8942 36.3424C11.7513 35.6599 11.1475 35.1641 10.4621 35.1641H4.375Z" fill="#090A0B" />
                            <path d="M7.29174 17.664C6.91841 17.664 6.54508 17.5211 6.25924 17.2382L3.34258 14.3215C2.77383 13.7528 2.77383 12.8282 3.34258 12.2594C3.91133 11.6907 4.83591 11.6907 5.40466 12.2594L8.32133 15.1761C8.89008 15.7449 8.89008 16.6694 8.32133 17.2382C8.03841 17.5211 7.66508 17.664 7.29174 17.664Z" fill="#090A0B" />
                            <path d="M13.1253 14.7474C12.3203 14.7474 11.667 14.0941 11.667 13.2891V10.3724C11.667 9.5674 12.3203 8.91406 13.1253 8.91406C13.9303 8.91406 14.5837 9.5674 14.5837 10.3724V13.2891C14.5837 14.0941 13.9303 14.7474 13.1253 14.7474Z" fill="#090A0B" />
                            <path d="M4.375 23.4974H1.45833C0.653333 23.4974 0 22.844 0 22.039C0 21.234 0.653333 20.5807 1.45833 20.5807H4.375C5.18 20.5807 5.83333 21.234 5.83333 22.039C5.83333 22.844 5.18 23.4974 4.375 23.4974Z" fill="#090A0B" />
                          </g>
                          <defs>
                            <clipPath id="clip0_6100_531">
                              <rect width={70} height={70} fill="white" transform="translate(0 0.164062)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="pricing-head">
                        <h4 className="mb-2">Standard</h4>
                        <div className="d-flex align-items-end">
                          <h2>$39</h2>
                          <h6>/month</h6>
                        </div>
                      </div>
                      <ul className="pricing-list d-flex flex-column mb-4 pb-xl-3">
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six black">
                          <i className="fa-regular fa-check" /> Secure virtual session (video)
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six black">
                          <i className="fa-regular fa-check" /> Therapist matching support
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six black">
                          <i className="fa-regular fa-check" /> Flexible scheduling
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six black">
                          <i className="fa-regular fa-check" /> HIPAA-compliant platform
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six black">
                          <i className="fa-regular fa-xmark" /> Email support
                        </li>
                      </ul>
                      <HomepageIconButton
                        className="common-btn box-style w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white p2-bg overflow-hidden rounded100 wow fadeInRight"
                        label="Book Appointment"
                        iconSrc="/assets/img/icon/arrow-right-white.png"
                        data-wow-delay="0.8s"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
                    <div className="pricing-items3">
                      <div className="icon">
                        <svg width={70} height={71} viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_6100_579)">
                            <path d="M65.625 58.4974H4.375C1.96292 58.4974 0 56.5344 0 54.1224V16.2057C0 13.7936 1.96292 11.8307 4.375 11.8307H10.2083C11.0133 11.8307 11.6667 12.484 11.6667 13.289C11.6667 14.094 11.0133 14.7474 10.2083 14.7474H4.375C3.57 14.7474 2.91667 15.4007 2.91667 16.2057V54.1224C2.91667 54.9244 3.57 55.5807 4.375 55.5807H65.625C66.43 55.5807 67.0833 54.9244 67.0833 54.1224V16.2057C67.0833 15.4007 66.43 14.7474 65.625 14.7474H59.7917C58.9867 14.7474 58.3333 14.094 58.3333 13.289C58.3333 12.484 58.9867 11.8307 59.7917 11.8307H65.625C68.0371 11.8307 70 13.7936 70 16.2057V54.1224C70 56.5344 68.0371 58.4974 65.625 58.4974Z" fill="#14B8A6" />
                            <path d="M48.1253 70.164H21.8753C21.0703 70.164 20.417 69.5106 20.417 68.7056C20.417 67.9006 21.0703 67.2473 21.8753 67.2473H48.1253C48.9303 67.2473 49.5837 67.9006 49.5837 68.7056C49.5837 69.5106 48.9303 70.164 48.1253 70.164Z" fill="#14B8A6" />
                            <path d="M30.6253 70.1641C29.8203 70.1641 29.167 69.5108 29.167 68.7058V57.0391C29.167 56.2341 29.8203 55.5808 30.6253 55.5808C31.4303 55.5808 32.0837 56.2341 32.0837 57.0391V68.7058C32.0837 69.5108 31.4303 70.1641 30.6253 70.1641Z" fill="#14B8A6" />
                            <path d="M39.3753 70.1641C38.5703 70.1641 37.917 69.5108 37.917 68.7058V57.0391C37.917 56.2341 38.5703 55.5808 39.3753 55.5808C40.1803 55.5808 40.8337 56.2341 40.8337 57.0391V68.7058C40.8337 69.5108 40.1803 70.1641 39.3753 70.1641Z" fill="#14B8A6" />
                            <path d="M42.9126 35.1641C40.7368 35.1641 38.8584 33.7203 38.4443 31.7311L36.7293 22.0303C36.5951 21.3886 35.8484 20.8724 34.9997 20.8724C34.1509 20.8724 33.4043 21.3886 33.2613 22.0741L31.5609 31.6874C31.138 33.7203 29.2597 35.1641 27.0868 35.1641C24.7622 35.1641 22.8197 33.5424 22.563 31.3899L21.8951 25.8074C21.8513 25.4428 21.3176 22.812 19.9497 16.5236C19.2905 13.4932 18.958 10.3899 18.958 7.29823C18.958 3.36365 22.1576 0.164062 26.0922 0.164062C27.4134 0.164062 28.7084 0.522813 29.843 1.2024C33.0251 3.1099 36.9743 3.1099 40.1563 1.2024C41.2909 0.522813 42.5888 0.164062 43.9072 0.164062C47.8418 0.164062 51.0413 3.36365 51.0413 7.29823C51.0413 10.3928 50.7088 13.4961 50.0497 16.5266C48.323 24.457 48.1218 25.6353 48.1043 25.8074L47.4393 31.3928C47.1826 33.5424 45.2372 35.1641 42.9126 35.1641ZM34.9997 17.9557C37.2368 17.9557 39.1676 19.4374 39.5934 21.482L41.3084 31.1799C41.4309 31.7691 42.1251 32.2474 42.9126 32.2474C43.7468 32.2474 44.4613 31.7195 44.5401 31.0457L45.208 25.4632C45.2343 25.2474 45.313 24.5911 47.2001 15.9082C47.8126 13.082 48.1247 10.1857 48.1247 7.30115C48.1247 4.97365 46.2347 3.08073 43.9072 3.08073C43.1168 3.08073 42.338 3.29656 41.6584 3.7049C37.5518 6.16948 32.4505 6.16948 28.3438 3.7049C27.6613 3.29656 26.8826 3.08073 26.0922 3.08073C23.7647 3.08073 21.8747 4.97073 21.8747 7.29823C21.8747 10.1828 22.1868 13.0791 22.7993 15.9053C24.0505 21.6511 24.7213 24.8653 24.7913 25.4603L25.4563 31.0457C25.538 31.7195 26.2526 32.2474 27.0868 32.2474C27.8743 32.2474 28.5684 31.7691 28.6997 31.1361L30.4001 21.5257C30.8318 19.4374 32.7626 17.9557 34.9997 17.9557Z" fill="#14B8A6" />
                          </g>
                          <defs>
                            <clipPath id="clip0_6100_579">
                              <rect width={70} height={70} fill="white" transform="translate(0 0.164062)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="pricing-head">
                        <h4 className="mb-2">Complete</h4>
                        <div className="d-flex align-items-end">
                          <h2>$59</h2>
                          <h6>/month</h6>
                        </div>
                      </div>
                      <ul className="pricing-list d-flex flex-column mb-4 pb-xl-3">
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> Secure virtual session (video)
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> Therapist matching support
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> Flexible scheduling
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-check" /> HIPAA-compliant platform
                        </li>
                        <li className="d-flex align-items-center gap-lg-3 gap-1 fs-six">
                          <i className="fa-regular fa-xmark" /> Email support
                        </li>
                      </ul>
                      <HomepageIconButton
                        className="common-btn box-style w-100 first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden bg-color rounded100"
                        label="Book Appointment"
                        iconSrc="/assets/img/icon/arrow-right-black.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        ) : null}
        {/*Appointment Section Start */}
        <section className="appointment-section fix cmn-bg">
          <div className="container">
            <div className="appointment-wrapper">
              <div className="row gx-0 gy-5 align-items-end">
                <div className="col-lg-6 order-lg-0 order-1">
                  <div className="appointment-thumb reveal-left">
                    <AppImage src={HOMEPAGE_IMAGES.appointment} alt="img" wrapperClassName="app-image--fill" className="w-100 rounded-2" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="section-title">
                    <span className="cmn-tag p1-bg heading-font">Contact Us</span>
                    <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                      Book Appointment
                    </h2>
                  </div>
                  <form action="#" className="appointment-forms">
                    <div className="row g-lg-3 g-3">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Your Name" />
                      </div>
                      <div className="col-lg-6">
                        <input type="email" placeholder="Your Email" />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="location" />
                      </div>
                      <div className="col-lg-6">
                        <input type="text" placeholder="MM/dd/yyy" />
                      </div>
                      <div className="col-lg-12">
                        <textarea name="message" placeholder="Message" rows={5} defaultValue={""} />
                      </div>
                      <div className="col-lg-12">
                        <HomepageIconButton
                          className="common-btn box-style p2-bg w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden rounded100 wow fadeInRight"
                          label="Book Appointment"
                          iconSrc="/assets/img/icon/arrow-right-white.png"
                          data-wow-delay="0.8s"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<< Blog News Start >>*/}
        <section className="blog-section2 section-padding cmn-bg">
          <div className="container">
            <div className="section-title text-center mb-60">
              <span className="cmn-tag p1-bg heading-font">Resources</span>
              <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                Insights that support your<br />mental well-being
              </h2>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="blog-items3">
                  <div className="thumb rounded-4 position-relative mb-3">
                    <AppImage src={HOMEPAGE_IMAGES.resourceOne} alt="img" wrapperClassName="app-image--fill" className="rounded-4" />
                    <div className="d-flex gap-1 align-items-center blog-date">
                      <div className="icon d-center"><i className="fa-solid fa-calendar-days" /></div>
                      <span className="cont">23 Dec 2023</span>
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="mb-3">
                      <span className="black">How virtual therapy can help with anxiety and overwhelm</span>
                    </h3>
                    <div className="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-3 border-bottom">
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-solid fa-user n900-clr" />
                        Admin
                      </div>
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-regular fa-folder-open n900-clr" />
                        Resource
                      </div>
                    </div>
                    <HomepageIconButton
                      className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden bg-color rounded100"
                      label="Read More"
                      iconSrc="/assets/img/icon/arrow-right-black.png"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="blog-items3">
                  <div className="thumb rounded-4 position-relative mb-3">
                    <AppImage src={HOMEPAGE_IMAGES.resourceTwo} alt="img" wrapperClassName="app-image--fill" className="rounded-4" />
                    <div className="d-flex gap-1 align-items-center blog-date">
                      <div className="icon d-center"><i className="fa-solid fa-calendar-days" /></div>
                      <span className="cont">23 Dec 2023</span>
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="mb-3">
                      <span className="black">What to expect from your first online psychiatry visit</span>
                    </h3>
                    <div className="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-3 border-bottom">
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-solid fa-user n900-clr" />
                        Admin
                      </div>
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-regular fa-folder-open n900-clr" />
                        Resource
                      </div>
                    </div>
                    <HomepageIconButton
                      className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden bg-color rounded100"
                      label="Read More"
                      iconSrc="/assets/img/icon/arrow-right-black.png"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="blog-items3">
                  <div className="thumb rounded-4 position-relative mb-3">
                    <AppImage src={HOMEPAGE_IMAGES.resourceThree} alt="img" wrapperClassName="app-image--fill" className="rounded-4" />
                    <div className="d-flex gap-1 align-items-center blog-date">
                      <div className="icon d-center"><i className="fa-solid fa-calendar-days" /></div>
                      <span className="cont">23 Dec 2023</span>
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="mb-3">
                      <span className="black">5 signs it may be time to ask for support</span>
                    </h3>
                    <div className="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-3 border-bottom">
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-solid fa-user n900-clr" />
                        Admin
                      </div>
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-regular fa-folder-open n900-clr" />
                        Resource
                      </div>
                    </div>
                    <HomepageIconButton
                      className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden bg-color rounded100"
                      label="Read More"
                      iconSrc="/assets/img/icon/arrow-right-black.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<< Blog News End >>*/}
        {/*<< Footer Section Start >>*/}
        <SiteFooter />
        {/*<< All JS Plugins >>*/}
        {/*<< Viewport Js >>*/}
        {/*<< Bootstrap Js >>*/}
        {/*<< Nice Select Js >>*/}
        {/*<< Waypoints Js >>*/}
        {/*<< Counterup Js >>*/}
        {/*<< Swiper Slider Js >>*/}
        {/*<< MeanMenu Js >>*/}
        {/*<< Magnific Popup Js >>*/}
        {/*<< Wow Animation Js >>*/}
        {/*<< Gsap Js >>*/}
        {/*<< Lenis Js >>*/}
        {/*<< ScrollSmoother Js >>*/}
        {/*<< ScrollTrigger Js >>*/}
        {/*<< Spalit Text Js >>*/}
        {/*<< Valina Tilt Js >>*/}
        {/*<< Main.js >>*/}
      </div>

    </PageLayout>
  )
}

export default HomeThreePage
