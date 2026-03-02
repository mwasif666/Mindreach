import PageLayout from '../components/layout/PageLayout'

const PAGE_TITLE = "Home Two || Medizen || Medizen React Template"
const BODY_CLASS = "body-bg2"

function HomeTwoPage() {
  return (
    <PageLayout title={PAGE_TITLE} bodyClass={BODY_CLASS}>
      <div>
        {/* Start Cursor Pointer */}
        <div className="mouse-follower">
          <span className="cursor-outline" />
          <span className="cursor-dot" />
        </div>
        {/* End Cursor Pointer */}
        {/* Header Section Start */}
        <header id="header-sticky" className="header-1 bg-transparent sticky-header1">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main style-2">
                <div className="header-left">
                  <div className="logo">
                    <a href="/" className="header-logo">
                      <img src="/assets/img/logo/logo.png" alt="logo-img" />
                    </a>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="has-dropdown active menu-thumb">
                            <a href="/">
                              Home
                              <i className="fas fa-angle-down" />
                            </a>
                            <ul className="submenu has-homemenu">
                              <li>
                                <div className="homemenu-items">
                                  <div className="homemenu">
                                    <a href="/" className="homemenu-thumb">
                                      <img src="/assets/img/header/home-1.jpg" alt="img" />
                                      <span className="demo-button">
                                        <span className="theme-btn p1-bg box-style first-box">
                                          <span className="black">Home 01</span>
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="homemenu">
                                    <a href="/home-2" className="homemenu-thumb mb-15">
                                      <img src="/assets/img/header/home-2.jpg" alt="img" />
                                      <span className="demo-button">
                                        <span className="theme-btn p1-bg box-style first-box">
                                          <span className="black">Home 02</span>
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                  <div className="homemenu">
                                    <a href="/home-3" className="homemenu-thumb mb-15">
                                      <img src="/assets/img/header/home-3.jpg" alt="img" />
                                      <span className="demo-button">
                                        <span className="theme-btn p1-bg box-style first-box">
                                          <span className="black">Home 03</span>
                                        </span>
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#!">
                              Service
                              <i className="fas fa-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li><a href="/service">Service</a></li>
                              <li><a href="/service-details">Service Details</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="#!">
                              Projects
                              <i className="fas fa-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li><a href="/project">Project</a></li>
                              <li><a href="/project-details">Project Details</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="#!">
                              Blog
                              <i className="fas fa-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li><a href="/blog">Blog</a></li>
                              <li><a href="/blog-details">Blog Details</a></li>
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="#!">
                              Pages
                              <i className="fas fa-angle-down" />
                            </a>
                            <ul className="submenu">
                              <li><a href="/about">About Us</a></li>
                              <li><a href="/doctor">Doctor</a></li>
                              <li><a href="/doctor-details">Doctor Details</a></li>
                              <li><a href="/pricing">Pricing</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <a href="#0" className="search-trigger search-icon d-none d-xl-block"><i className="fal fa-search" />
                  </a>
                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle">
                      <img src="/assets/img/icon/menu.png" alt="icon" />
                    </div>
                  </div>
                </div>
                <div className="header-btn d-xl-block d-none">
                  <a href="/contact" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p1-bg rounded100">
                    Contact us
                    <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Banner Section Start */}
        <section className="banner-section2 white-bg fix">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xxl-5 col-xl-5 col-lg-5">
                <div className="hero-content-version2">
                  <span className="cmn-tag p1-bg heading-font mb-xxl-1 mb-3">Madical Care</span>
                  <h1 className="black wow fadeInUp mb-40" data-wow-delay="0.6s">
                    Quality health <br />
                    <span className="position-relative z-1 w-100">
                      Care
                      <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                    </span>
                    <span className="fw-normal">Health Excellence</span>
                  </h1>
                  <div className="d-flex align-items-center gap-xl-2 gap-1">
                    <a href="https://www.youtube.com/watch?v=0pYoyQCau5k" className="video-choose d-center rounded-circle p2-bg video-popup">
                      <i className="fa-solid fa-play white" />
                    </a>
                    <span className="fs-six pra">
                      Play Now
                    </span>
                  </div>
                  <div className="hero2-counter-wrap">
                    <div className="hero-count-item d-xl-flex align-items-center gap-2">
                      <h2 className="black">120+</h2>
                      <p className="black">
                        Winning <br /> award
                      </p>
                    </div>
                    <div className="hero-count-item d-xl-flex align-items-center gap-2">
                      <h2 className="black">500+</h2>
                      <p className="black">
                        Clients <br /> Reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-3 col-lg-3 d-lg-block d-none">
                <div className="hero2-thumb">
                  <img src="/assets/img/banner/hero2-thumb.png" alt="img" />
                </div>
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-4">
                <form action="#" className="hero-appoinment">
                  <h4 className="black mb-xxl-3 mb-2">Appiontment</h4>
                  <p className="pra mb-xxl-3 mb-2">Health care is a vital aspect of overall well-being</p>
                  <input type="text" placeholder="Your Name" className="mb-3" />
                  <input type="text" placeholder="Your Phone" className="mb-3" />
                  <input type="email" placeholder="Your Email" className="mb-3" />
                  <select name="selected" className="mb-3">
                    <option value={1}>Select One</option>
                    <option value={1}>3:25 Am</option>
                    <option value={1}>3:25 Am</option>
                    <option value={1}>3:25 Pm</option>
                  </select>
                  <a href="/doctor-details" className="common-btn box-style p2-bg w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs-seven fw-medium white overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s">
                    Book Appiontment
                    <img src="/assets/img/icon/arrow-right-white.png" alt="icon" />
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Servie Section Start */}
        <section className="services-section cmn-bg fix section-padding">
          <div className="container">
            <div className="section-title text-center mb-60">
              <span className="cmn-tag p1-bg heading-font">Latest Service</span>
              <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                Your Wellness Our Priority <br />
                <span className="position-relative z-1">
                  Healthier
                  <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                </span>
                Lives
              </h2>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="service-item overflow-hidden white-bg rounded-4 position-relative">
                  <div className="icon-area d-flex align-items-center gap-2">
                    <div className="icon d-center">
                      <img src="/assets/img/icon/ser1.png" alt="icon" />
                    </div>
                    <h4 className="black"><a href="/service-details">Quality Care Service</a></h4>
                  </div>
                  <p className="pra">
                    Health care is a vital aspect maintaining overall well-being, encompassing a range
                  </p>
                  <div className="thumb overflow-hidden reveal-left position-relative">
                    <img src="/assets/img/service/service2-v1.jpg" alt="img" className="rounded-4 overflow-hidden w-100" />
                  </div>
                  <div className="text-center service-btn-inner">
                    <a href="/service-details" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100">
                      Read More
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item overflow-hidden white-bg rounded-4 position-relative">
                  <div className="icon-area d-flex align-items-center gap-2">
                    <div className="icon d-center">
                      <img src="/assets/img/icon/ser2.png" alt="icon" />
                    </div>
                    <h4 className="black"><a href="/service-details">Your Wellness Priority</a></h4>
                  </div>
                  <p className="pra">
                    Health care is a vital aspect maintaining overall well-being, encompassing a range
                  </p>
                  <div className="thumb overflow-hidden reveal-left position-relative">
                    <img src="/assets/img/service/service2-v2.jpg" alt="img" className="rounded-4 overflow-hidden w-100" />
                  </div>
                  <div className="text-center service-btn-inner">
                    <a href="/service-details" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100">
                      Read More
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="service-item overflow-hidden white-bg rounded-4 position-relative">
                  <div className="icon-area d-flex align-items-center gap-2">
                    <div className="icon d-center">
                      <img src="/assets/img/icon/ser3.png" alt="icon" />
                    </div>
                    <h4 className="black"><a href="/service-details">Caring for You Always</a></h4>
                  </div>
                  <p className="pra">
                    Health care is a vital aspect maintaining overall well-being, encompassing a range
                  </p>
                  <div className="thumb overflow-hidden reveal-left position-relative">
                    <img src="/assets/img/service/service2-v3.jpg" alt="img" className="rounded-4 overflow-hidden w-100" />
                  </div>
                  <div className="text-center service-btn-inner">
                    <a href="/service-details" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100">
                      Read More
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section Start */}
        <section className="about-section2 space-bottom cmn-bg fix">
          <div className="container">
            <div className="row g-4 align-items-center justify-content-between flex-row-reverse">
              <div className="col-lg-6">
                <div className="about-content2">
                  <div className="section-title mb-4">
                    <span className="cmn-tag p1-bg heading-font">About Us</span>
                    <h2 className="wow fadeInUp black visible-slowly-right mb-xxl-4 mb-3" data-wow-delay=".3s">
                      Compassionate Care <br /> Always
                      <span className="position-relative z-1">
                        There
                        <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                      </span>
                      Health First
                    </h2>
                    <p className="pra mb-sm-4 mb-3 position-relative syle-pra d-flex align-items-center gap-3">
                      <img src="/assets/img/element/pra-element.png" alt="element" className="d-sm-block d-none" />
                      Over 30 year’s experience providing top quality country'sacross world. The energy that
                      is
                      sourceable , free and healthy.
                    </p>
                    <p className="pra">
                      Health care is a vital aspect of maintaining overall well-being, encompassing a range of
                      services from preventive care
                      to treatment of cuses on promoting Health care is a vital aspect of maintaining overall
                      well-being, encompassing a range
                      of services
                    </p>
                  </div>
                  <div className="about-point mb-40">
                    <div className="about-point-item d-flex align-items-center gap-sm-3 gap-2">
                      <img src="/assets/img/icon/about-icon1.png" alt="icon" />
                      <h4 className="black">Vitality Clinic <br /> Wellness</h4>
                    </div>
                    <div className="about-point-item d-flex align-items-center gap-sm-3 gap-2">
                      <img src="/assets/img/icon/about-icon2.png" alt="icon" />
                      <h4 className="black">CarePoint <br /> Health</h4>
                    </div>
                  </div>
                  <a href="/about" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100">
                    Read More
                    <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                  </a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="about-thumb2 reveal-left rounded-4">
                  <img src="/assets/img/about/about2.jpg" alt="img" className="w-100 rounded-4" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature Section Start */}
        <section className="feature-section fix section-padding">
          <div className="container">
            <div className="section-title text-center mb-60">
              <span className="cmn-tag p1-bg heading-font">Our Team Member</span>
              <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                Compassionate Care <br /> Health Exceptional
                <span className="position-relative z-1">
                  Results
                  <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                </span>
              </h2>
            </div>
            <div className="featue-wrapper feaure-wrapper2 position-relative white-bg">
              <div className="feature-inner">
                <div className="ins d-flex flex-column gap-xxl-4 gap-3">
                  <div className="line" />
                  <div className="feature-items">
                    <div className="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
                      <h4><a href="/doctor-details" className="black fw_600 text-nowrap">Dr.Alvin Eclair</a>
                      </h4>
                      <ul className="feature-list d-flex flex-column gap-1">
                        <li className="text-nowrap">
                          Neurology Expert
                        </li>
                      </ul>
                      <p className="pra fs-seven">
                        Medical care encompasses a range of services aimed at promoting health, preventing
                        disease
                      </p>
                    </div>
                    <a href="/doctor-details" className="cmn-arrows d-center">
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                    </a>
                    {/* Extra Hover */}
                    <img src="/assets/img/choose/feature4.jpg" alt="img" className="extra-feature" />
                  </div>
                  <div className="line" />
                </div>
                <div className="ins d-flex flex-column gap-xxl-4 gap-3">
                  <div className="line" />
                  <div className="feature-items">
                    <div className="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
                      <h4><a href="/doctor-details" className="black fw_600 text-nowrap">Dr.Alan Jellybean</a>
                      </h4>
                      <ul className="feature-list d-flex flex-column gap-1">
                        <li className="text-nowrap">
                          Dental Care
                        </li>
                      </ul>
                      <p className="pra fs-seven">
                        Medical care encompasses a range of services aimed at promoting health, preventing
                        disease
                      </p>
                    </div>
                    <a href="/doctor-details" className="cmn-arrows d-center">
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                    </a>
                    {/* Extra Hover */}
                    <img src="/assets/img/choose/feature1.jpg" alt="img" className="extra-feature" />
                  </div>
                  <div className="line" />
                </div>
                <div className="ins d-flex flex-column gap-xxl-4 gap-3">
                  <div className="line" />
                  <div className="feature-items">
                    <div className="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
                      <h4><a href="/doctor-details" className="black fw_600 text-nowrap">Dr.Dean R.
                          Chassay</a></h4>
                      <ul className="feature-list d-flex flex-column gap-1">
                        <li className="text-nowrap">
                          Eye Expert
                        </li>
                      </ul>
                      <p className="pra fs-seven">
                        Medical care encompasses a range of services aimed at promoting health, preventing
                        disease
                      </p>
                    </div>
                    <a href="/doctor-details" className="cmn-arrows d-center">
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                    </a>
                    {/* Extra Hover */}
                    <img src="/assets/img/choose/feature2.jpg" alt="img" className="extra-feature" />
                  </div>
                  <div className="line" />
                </div>
                <div className="ins d-flex flex-column gap-xxl-4 gap-3">
                  <div className="line" />
                  <div className="feature-items">
                    <div className="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
                      <h4><a href="/doctor-details" className="black fw_600 text-nowrap">Dr.Alan Jellybean</a>
                      </h4>
                      <ul className="feature-list d-flex flex-column gap-1">
                        <li className="text-nowrap">
                          Heart Spacialist
                        </li>
                      </ul>
                      <p className="pra fs-seven">
                        Medical care encompasses a range of services aimed at promoting health, preventing
                        disease
                      </p>
                    </div>
                    <a href="/doctor-details" className="cmn-arrows d-center">
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                    </a>
                    {/* Extra Hover */}
                    <img src="/assets/img/choose/feature3.jpg" alt="img" className="extra-feature" />
                  </div>
                  <div className="line" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Latest Project Section Start */}
        <section className="latest-projects fix">
          <div className="container">
            <div className="d-flex flex-sm-nowrap flex-wrap gap-2 align-items-end justify-content-between mb-60">
              <div className="section-title">
                <span className="cmn-tag p1-bg heading-font mb-3">Latest Project</span>
                <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                  A healthy tomorrow <br /> starts today
                  <span className="position-relative z-1">
                    Where
                    <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                  </span>
                  health
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
            <div className="swiper lastes-project__wrapper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="latest-project-slide">
                    <img src="/assets/img/choose/ls1.jpg" alt="img" />
                    <div className="ls-content text-center">
                      <span className="white d-block mb-2">StrategyCraft</span>
                      <h4 className="white"><a href="/project-details" className="white">Caring for You Caring</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="latest-project-slide">
                    <img src="/assets/img/choose/ls2.png" alt="img" />
                    <div className="ls-content text-center">
                      <span className="white d-block mb-2">StrategyCraft</span>
                      <h4 className="white"><a href="/project-details" className="white">Caring for You Caring</a>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="latest-project-slide">
                    <img src="/assets/img/choose/ls3.jpg" alt="img" />
                    <div className="ls-content text-center">
                      <span className="white d-block mb-2">StrategyCraft</span>
                      <h4 className="white"><a href="/project-details" className="white">Caring for You Caring</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Helth Compassionate */}
        <section className="helth-compassionate cmn-bg section-padding">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-7 h-100">
                <div className="compassionate-left-content">
                  <div className="box">
                    <h4 className="black mb-md-3 mb-2">Compassionate Care There Health First</h4>
                    <p className="black mb-40 pb-2">Health care is a vital aspect of maintaining overall well-being
                      encompassing a range of services from preventive</p>
                    <a href="/doctor-details" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100">
                      Book An Appiontment
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                    </a>
                  </div>
                  <div className="thumb d-md-block d-none">
                    <img src="/assets/img/global/compassionate.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 h-100">
                <div className="compassionate-right">
                  <div className="compassionate-item">
                    <div className="icon d-center rounded-circle"><img src="/assets/img/icon/compasi1.png" alt="icon" /></div>
                    <div className="cont">
                      <h4 className="white mb-2">Your health our priority</h4>
                      <p className="white">
                        Medical care encompasses a range of services aimed at the a promoting health,
                        preventing
                      </p>
                    </div>
                  </div>
                  <div className="compassionate-item">
                    <div className="icon d-center rounded-circle"><img src="/assets/img/icon/compasi2.png" alt="icon" /></div>
                    <div className="cont">
                      <h4 className="white mb-2">wellness Healing with heart</h4>
                      <p className="white">
                        Medical care encompasses a range of services aimed at the a promoting health,
                        preventing
                      </p>
                    </div>
                  </div>
                  <div className="compassionate-item">
                    <div className="icon d-center rounded-circle"><img src="/assets/img/icon/compasi3.png" alt="icon" /></div>
                    <div className="cont">
                      <h4 className="white mb-2">Care Point Health Institute</h4>
                      <p className="white">
                        Medical care encompasses a range of services aimed at the a promoting health,
                        preventing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Pricing Section Start */}
        <section className="pricing-section fix n900-bg space-top">
          <div className="container">
            <div className="section-title text-center mb-60">
              <span className="cmn-tag p1-bg heading-font">Pricing Plane</span>
              <h2 className="wow fadeInUp white visible-slowly-right" data-wow-delay=".3s">
                Where health meets hope <br /> partner in
                <span className="position-relative z-1">
                  wellness
                  <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                </span>
              </h2>
            </div>
            <div className="row g-xxl-5 g-4 justify-content-center align-items-center">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="pricing-items">
                  <div className="pricing-head">
                    <h4 className="white mb-2">Perfect</h4>
                    <div className="d-flex align-items-end white">
                      <h2 className="white">$29</h2>
                      <h6 className="white">/month</h6>
                    </div>
                  </div>
                  <ul className="pricing-list d-flex flex-column mb-4 pb-xl-3">
                    <li className="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
                      <i className="fa-solid fa-angles-right white" /> Mistakes To Avoid
                    </li>
                    <li className="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
                      <i className="fa-solid fa-angles-right white" /> Knew About Fonts
                    </li>
                    <li className="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
                      <i className="fa-solid fa-angles-right white" /> Winning Metric for Your Startup
                    </li>
                  </ul>
                  <a href="/pricing" className="common-btn box-style w-100 first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden n900-bg rounded100">
                    Book An Appiontment
                    <img src="/assets/img/icon/arrow-right-white.png" alt="icon" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="pricing-items premium">
                  <div className="pricing-head">
                    <h4 className="white mb-2">Easy</h4>
                    <div className="d-flex align-items-end white">
                      <h2 className="white">$19</h2>
                      <h6 className="white">/month</h6>
                    </div>
                  </div>
                  <ul className="pricing-list d-flex flex-column mb-4 pb-xl-3">
                    <li className="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
                      <i className="fa-solid fa-angles-right white" /> Mistakes To Avoid
                    </li>
                    <li className="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
                      <i className="fa-solid fa-angles-right white" /> Knew About Fonts
                    </li>
                    <li className="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
                      <i className="fa-solid fa-angles-right white" /> Winning Metric for Your Startup
                    </li>
                  </ul>
                  <a href="/pricing" className="common-btn box-style w-100 first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden n900-bg rounded100">
                    Book An Appiontment
                    <img src="/assets/img/icon/arrow-right-white.png" alt="icon" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="pricing-items">
                  <div className="pricing-head">
                    <h4 className="white mb-2">Perfect</h4>
                    <div className="d-flex align-items-end white">
                      <h2 className="white">$29</h2>
                      <h6 className="white">/month</h6>
                    </div>
                  </div>
                  <ul className="pricing-list d-flex flex-column mb-4 pb-xl-3">
                    <li className="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
                      <i className="fa-solid fa-angles-right white" /> Mistakes To Avoid
                    </li>
                    <li className="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
                      <i className="fa-solid fa-angles-right white" /> Knew About Fonts
                    </li>
                    <li className="d-flex align-items-center gap-lg-2 gap-1 fs-six white">
                      <i className="fa-solid fa-angles-right white" /> Winning Metric for Your Startup
                    </li>
                  </ul>
                  <a href="/pricing" className="common-btn box-style w-100 first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden n900-bg rounded100">
                    Book An Appiontment
                    <img src="/assets/img/icon/arrow-right-white.png" alt="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Video Bg Section Start */}
        <div className="video-section section-padding cmn-bg fix">
          <div className="container">
            <div className="video-uniquewrap position-relative d-center w-100">
              <img src="/assets/img/global/video-unique.png" alt="img" className="w-100 rounded-4" />
              <a href="https://www.youtube.com/watch?v=0pYoyQCau5k" className="video-choose position-absolute d-center rounded-circle p1-bg video-popup">
                <i className="fa-solid fa-play white" />
              </a>
            </div>
          </div>
        </div>
        {/* Testimonial Section Start */}
        <section className="testimonial-sectio2 cmn-bg fix">
          <div className="container">
            <div className="row g-4 justify-content-between">
              <div className="col-xxl-4 col-xl-5 col-lg-5">
                <div className="section-title">
                  <span className="cmn-tag p1-bg heading-font mb-3">Clients Reviews</span>
                  <h2 className="wow fadeInUp black visible-slowly-right mb-xxl-4 mb-3" data-wow-delay=".3s">
                    What Our Users Are
                    <span className="position-relative z-1">
                      Saying
                      <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                    </span>
                  </h2>
                  <p className="pra mb-40">
                    Health care is a vital aspect of maintaining overall well-being, encompassing a range of
                    services from preventive care
                    to treatment
                  </p>
                  <div className="array-button d-flex align-items-center gap-3 wow fadeInUp" data-wow-delay=".5s">
                    <button className="array-prev"><i className="fal fa-arrow-left" /></button>
                    <button className="array-next"><i className="fal fa-arrow-right" /></button>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7">
                <div className="swiper testimonial-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-items style2">
                        <div className="ratting mb-3">
                          <i className="fa-solid fa-star p3-clr fs-six" />
                          <i className="fa-solid fa-star p3-clr fs-six" />
                          <i className="fa-solid fa-star p3-clr fs-six" />
                          <i className="fa-solid fa-star p3-clr fs-six" />
                          <i className="fa-solid fa-star p3-clr fs-six" />
                        </div>
                        <p className="fs-five pra mt-xxl-4 mt-4 mb-4">
                          Health is wealth, and in the realm of medical heal every life matters. It
                          encompasses a wide range of specialties aimed
                          at diagnosing, treating, and preventing diseases and maintaining overall very
                          famous
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
                            <img src="/assets/img/testimonial/testimonial-john.png" alt="img" className="rounded-circle" />
                            <div className="cont">
                              <h4 className="black">Michael Ramirez</h4>
                              <span className="fs-seven pra">Ceo</span>
                            </div>
                          </div>
                          <img src="/assets/img/testimonial/quote-icons.png" alt="img" className="quote" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<< Blog News Start >>*/}
        <section className="blog-section2 section-padding cmn-bg">
          <div className="container">
            <div className="section-title text-center mb-60">
              <span className="cmn-tag p1-bg heading-font">Latest Blog and news</span>
              <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                Caring for You, Caring for <br /> Health
                <span className="position-relative z-1">
                  Guardians
                  <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                </span>
              </h2>
            </div>
            <div className="row g-4">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="blog-items2 rounded-4">
                  <div className="thumb rounded-4 position-relative">
                    <img src="/assets/img/blog/blog2-v1.jpg" alt="img" className="rounded-4" />
                    <div className="d-flex gap-1 align-items-center blog-date">
                      <div className="icon d-center"><i className="fa-solid fa-calendar-days" /></div>
                      <span className="cont">23 Dec 2023</span>
                    </div>
                  </div>
                  <div className="content">
                    <div className="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-2">
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-solid fa-user n900-clr" />
                        Admin
                      </div>
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-regular fa-folder-open n900-clr" />
                        Catagory
                      </div>
                    </div>
                    <h4 className="mb-4"><a href="/blog-details" className="black">Empowering Futures an Quality
                        Care</a></h4>
                    <a href="/blog-details" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100">
                      Read More
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="blog-items2 rounded-4">
                  <div className="thumb rounded-4 position-relative">
                    <img src="/assets/img/blog/blog2-v2.jpg" alt="img" className="rounded-4" />
                    <div className="d-flex gap-1 align-items-center blog-date">
                      <div className="icon d-center"><i className="fa-solid fa-calendar-days" /></div>
                      <span className="cont">23 Dec 2023</span>
                    </div>
                  </div>
                  <div className="content">
                    <div className="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-2">
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-solid fa-user n900-clr" />
                        Admin
                      </div>
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-regular fa-folder-open n900-clr" />
                        Catagory
                      </div>
                    </div>
                    <h4 className="mb-4"><a href="/blog-details" className="black">Health Matters, We Care Wellness
                        Begins</a></h4>
                    <a href="/blog-details" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100">
                      Read More
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="blog-items2 rounded-4">
                  <div className="thumb rounded-4 position-relative">
                    <img src="/assets/img/blog/blog2-v3.jpg" alt="img" className="rounded-4" />
                    <div className="d-flex gap-1 align-items-center blog-date">
                      <div className="icon d-center"><i className="fa-solid fa-calendar-days" /></div>
                      <span className="cont">23 Dec 2023</span>
                    </div>
                  </div>
                  <div className="content">
                    <div className="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-2">
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-solid fa-user n900-clr" />
                        Admin
                      </div>
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-regular fa-folder-open n900-clr" />
                        Catagory
                      </div>
                    </div>
                    <h4 className="mb-4"><a href="/blog-details" className="black">CareMed Solutions Vitality
                        Health</a></h4>
                    <a href="/blog-details" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100">
                      Read More
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.9s">
                <div className="blog-items2 rounded-4">
                  <div className="thumb rounded-4 position-relative">
                    <img src="/assets/img/blog/blog2-v4.jpg" alt="img" className="rounded-4" />
                    <div className="d-flex gap-1 align-items-center blog-date">
                      <div className="icon d-center"><i className="fa-solid fa-calendar-days" /></div>
                      <span className="cont">23 Dec 2023</span>
                    </div>
                  </div>
                  <div className="content">
                    <div className="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-2">
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-solid fa-user n900-clr" />
                        Admin
                      </div>
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-regular fa-folder-open n900-clr" />
                        Catagory
                      </div>
                    </div>
                    <h4 className="mb-4"><a href="/blog-details" className="black">Center Serene Care Services
                        Peak</a></h4>
                    <a href="/blog-details" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100">
                      Read More
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<< Footer News Appinment Start >>*/}
        <div className="footer-new-appoinment position-relative cmn-bg">
          <div className="container">
            <div className="newsletter-appoinment-wrap p1-bg rounded-4">
              <div className="section-title text-center">
                <h2 className="wow fadeInUp black mb-xxl-4 mb-3 visible-slowly-right" data-wow-delay=".3s">
                  Ready To Turn Dreams Into Reality Lets Get
                  <span className="position-relative z-1">
                    Started
                    <img src="/assets/img/element/newsletter-element.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                  </span>
                  Now
                </h2>
                <p className="black mb-4">
                  Health care is a vital aspect of maintaining overall well-being, encompassing a range of
                  services from preventive care
                  to treatment of cuses on promoting Health care is a vital aspect of maintaining
                </p>
                <a href="/doctor-details" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p2-bg rounded100 wow fadeInRight" data-wow-delay="0.8s">
                  Book An Appiontment
                  <img src="/assets/img/icon/arrow-right-white.png" alt="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*<< Footer Section Start >>*/}
        <footer className="footer-section footer-style2 z-1 position-relative blackbg">
          <div className="container">
            <div className="footer-social-logo d-flex align-items-center justify-content-sm-between justify-content-center">
              <a href="/">
                <img src="/assets/img/logo/logo-white.png" alt="logo-img" />
              </a>
              <div className="social-wrapper d-flex align-items-center">
                <a href="#" className=" black"><i className="fab fa-facebook-f" /></a>
                <a href="#" className=" black"><i className="fa-brands fa-linkedin-in" /></a>
                <a href="#" className=" black"><i className="fab fa-instagram" /></a>
                <a href="#" className=" black"><i className="fa-brands fa-x" /></a>
              </div>
            </div>
            <div className="footer-widgets-wrapper">
              <div className="row g-4 justify-content-between">
                <div className="col-lg-3 col-md-6 col-sm-5 d-flex justify-content-lg-center">
                  <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.7s">
                    <div className="widget-head">
                      <h4 className="white">Contact</h4>
                    </div>
                    <ul className="footer-info d-flex flex-column gpa-xxl-4 gap-3">
                      <li className="d-flex align-items-center gap-xl-3 gap-2">
                        <span className="icon d-center"><i className="p1-clr fa-solid fa-location-dot" /></span>
                        <div className="cont">
                          <span className="white fs-seven d-block">Address</span>
                          <a href="javascript:void(0)" className="fs-six fw_500 white sub-font">66
                            Broklyant,India</a>
                        </div>
                      </li>
                      <li className="d-flex align-items-center gap-xl-3 gap-2">
                        <span className="icon d-center"><i className="p1-clr fa-solid fa-phone" /></span>
                        <div className="cont">
                          <span className="white fs-seven d-block">Phone Number</span>
                          <a href="javascript:void(0)" className="fs-six fw_500 white sub-font">012 345
                            678 9101</a>
                        </div>
                      </li>
                      <li className="d-flex align-items-center gap-xl-3 gap-2">
                        <span className="icon d-center"><i className="p1-clr fa-solid fa-envelope" /></span>
                        <div className="cont">
                          <span className="white fs-seven d-block">Email</span>
                          <a href="javascript:void(0)" className="fs-six fw_500 white sub-font">abcd@gmail.com</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-5 d-flex justify-content-lg-center">
                  <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.6s">
                    <div className="widget-head">
                      <h4 className="white fw_600">Page</h4>
                    </div>
                    <ul className="list-area">
                      <li>
                        <a href="/about">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/service">
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="/contact">
                          Why Chose Us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Doctors
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Blog And News
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-center">
                  <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.6s">
                    <div className="widget-head">
                      <h4 className="white fw_600">Services</h4>
                    </div>
                    <ul className="list-area">
                      <li>
                        <a href="javascript:void(0)" className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-angles-right" /> Vitality Vitals Clinic
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-angles-right" /> MedEx Wellness Center
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-angles-right" /> HopeHealth Medical Group
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-angles-right" /> SwiftCare Urgent Center
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="d-flex align-items-center gap-2">
                          <i className="fa-solid fa-angles-right" /> WellSpring Women's Clinic
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-7">
                  <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.4s">
                    <div className="widget-head">
                      <h4 className="white fw_600">Newsletter</h4>
                    </div>
                    <div className="footer-content">
                      <p className="white">
                        Medical services are an essential part of our lives, offering care and treatment for
                        various
                      </p>
                    </div>
                    <form action="#" className="form-cmn-style1">
                      <input type="text" placeholder="Enter your email" />
                      <button type="button" className="common-btn text-nowrap box-style first-box d-inline-flex justify-content-center align-items-center fs-seven fw_600 gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p1-bg rounded-5">
                        Subscribe
                        <svg width={21} height={16} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M20.7074 8.79688H0.291016V7.04688H20.7074V8.79688Z" fill="#090A0B" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M19.8338 7.04688C15.7184 7.04688 12.3555 10.666 12.3555 14.5252V15.4002H14.1055V14.5252C14.1055 11.5951 16.7218 8.79688 19.8338 8.79688H20.7083V7.04688H19.8338Z" fill="#090A0B" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M19.8338 8.79675C15.7184 8.79675 12.3555 5.17759 12.3555 1.31836V0.443359H14.1055V1.31836C14.1055 4.24854 16.7218 7.04675 19.8338 7.04675H20.7083V8.79675H19.8338Z" fill="#090A0B" />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <div className="footer-bottom-wrap">
                <p className="body-font fs-seven">
                  © 2025 MediZen | All Rights Reserved
                </p>
                <ul className="privacy">
                  <li><a href="javascript:void(0)" className="fs-seven">Terms &amp; Condition</a></li>
                  <li><a href="javascript:void(0)" className="fs-seven">Privacy Policy</a></li>
                  <li><a href="javascript:void(0)" className="fs-seven">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/* Offcanvas Area Start */}
        <div className="fix-area">
          <div className="offcanvas__info">
            <div className="offcanvas__wrapper">
              <div className="offcanvas__content">
                <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                  <div className="offcanvas__logo">
                    <a href="/">
                      <img src="/assets/img/logo/logo.png" alt="logo-img" />
                    </a>
                  </div>
                  <div className="offcanvas__close">
                    <button>
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <div className="mobile-menu fix mb-3" />
                <div className="offcanvas__contact">
                  <h4>Contact Info</h4>
                  <ul>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a target="_blank" href="#">Mirpur,10 Road 1 House 12 Mirpur Dhaka Bangladesh</a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="mailto:info@example.com"><span className="mailto:info@example.com">info@example.com</span></a>
                        <a href="mailto:info@example.com"><span className="mailto:info@example.com">ex@example.com</span></a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="fal fa-clock" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a target="_blank" href="#">Sat-friday, 02am -09pm</a>
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="offcanvas__contact-icon mr-15">
                        <i className="far fa-phone" />
                      </div>
                      <div className="offcanvas__contact-text">
                        <a href="tel:+11002345909" className="d-block">017 5552-0127</a>
                        <a href="tel:+11002345909">017458632718</a>
                      </div>
                    </li>
                  </ul>
                  <div className="header-button mt-4">
                    <a href="/contact" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p1-bg rounded100">
                      Get Start
                      <i className="fa-solid fa-arrow-right" />
                    </a>
                  </div>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#"><i className="fab fa-facebook-f" /></a>
                    <a href="#"><i className="fab fa-twitter" /></a>
                    <a href="#"><i className="fab fa-youtube" /></a>
                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="offcanvas__overlay" />
        {/* Search Area Start */}
        <div className="search-wrap">
          <div className="search-inner">
            <i className="fas fa-times search-close" id="search-close" />
            <div className="search-cell">
              <form method="get">
                <div className="search-field-holder">
                  <input type="search" className="main-search-input" placeholder="Search..." />
                </div>
              </form>
            </div>
          </div>
        </div>
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

export default HomeTwoPage
