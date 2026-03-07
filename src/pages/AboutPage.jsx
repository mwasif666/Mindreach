import PageLayout from '../components/layout/PageLayout'

const PAGE_TITLE = "About || Medizen || Medizen React Template"
const BODY_CLASS = "body-bg"

function AboutPage() {
  return (
    <PageLayout title={PAGE_TITLE} bodyClass={BODY_CLASS}>
      <div>
        {/* Start Cursor Pointer */}
        <div className="mouse-follower">
          <span className="cursor-outline" />
          <span className="cursor-dot" />
        </div>
        {/* End Cursor Pointer */}
        {/* header */}
        {/* Header Section Start */}
        <header id="header-sticky" className="header-1 header-style2">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main style-2">
                <div className="header-left">
                  <div className="logo">
                    <a href="/" className="header-logo">
                      <img src="/assets/img/logo/logo.svg" alt="logo-img" />
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
                                    <a href="/home-1" className="homemenu-thumb">
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
                                    <a href="/" className="homemenu-thumb mb-15">
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
                  <a href="#0" className="search-trigger search-icon d-none d-xl-block"><i className="fal fa-search" /></a>
                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle">
                      <img src="/assets/img/icon/menu.png" alt="icon" />
                    </div>
                  </div>
                </div>
                <a href="/contact" className="header-help d-lg-flex d-none align-items-center gap-xxl-3 gap-2">
                  <img src="/assets/img/icon/chat-icon.png" alt="cion" />
                  <span className="cont">
                    <span className="pra d-block">Need help?</span>
                    <span className="black fw_600">(603) 555-0123</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* Banner Section Start */}
        <section className="breadcrumb-section position-relative fix">
          <div className="container">
            <div className="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
              <h2 className="black">About</h2>
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>/</li>
                <li>About</li>
              </ul>
            </div>
          </div>
          {/* Bread Ele */}
          <img src="/assets/img/about/breadcrumnd-shap.png" alt="img" className="bread-ele" />
        </section>
        {/* Banner Section Start */}
        {/* AboutUs Section Start */}
        <section className="about-section fix space-top">
          <div className="container">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title mb-40">
                    <span className="cmn-tag p1-bg heading-font">About Us</span>
                    <h2 className="wow fadeInUp black visible-slowly-right mb-xxl-3 mb-3" data-wow-delay=".3s">
                      Compassionate Care <br /> Always There
                      <span className="position-relative z-1">
                        Health
                        <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                      </span>
                      First
                    </h2>
                    <p className="pra">Health care is a vital aspect of maintaining overall well-being, encompassing
                      a range of services from preventive care
                      to treatment of cuses on promoting</p>
                  </div>
                  <div className="about-steps d-flex flex-column gap-xxl-5 gap-xl-3 gap-3">
                    <div className="about-step-item d-flex gap-sm-3 gap-1 flex-sm-nowrap flex-wrap">
                      <h4 className="fw_700 black">
                        01
                      </h4>
                      <div className="cont">
                        <h4 className="black fw_600 mb-2">
                          Enhancing Lives Through Care
                        </h4>
                        <p className="pra fs-seven">
                          Health care is a vital aspect of maintaining overall well-being, encompassing a
                          range of services from preventive care
                          to treatment of cuses on promoting
                        </p>
                      </div>
                    </div>
                    <div className="about-step-item d-flex gap-sm-3 gap-1 flex-sm-nowrap flex-wrap">
                      <h4 className="fw_700 black">
                        02
                      </h4>
                      <div className="cont">
                        <h4 className="black fw_600 mb-2">
                          Tomorrow's Health, Today's Care
                        </h4>
                        <p className="pra fs-seven">
                          Health care is a vital aspect of maintaining overall well-being, encompassing a
                          range of services from preventive care
                          to treatment of cuses on promoting
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="about-thumb-inner">
                  <div className="thumb">
                    <img src="/assets/img/about/about1.png" alt="img" className="about-img" />
                  </div>
                  <img src="/assets/img/element/about1-bg.png" alt="img" className="about1-bg" />
                  {/* Element */}
                  <img src="/assets/img/element/about1-element1.png" alt="img" className="about1-element1" />
                  <img src="/assets/img/element/about1-element2.png" alt="img" className="about1-element2" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature Section Start */}
        <section className="feature-section fix space-top">
          <div className="container">
            <div className="featue-wrapper position-relative white-bg">
              <div className="section-title mb-60">
                <span className="cmn-tag p1-bg heading-font">Our Feature</span>
                <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                  Compassionate Care <br /> Health
                  <span className="position-relative z-1">
                    Exceptional
                    <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                  </span>
                  Results
                </h2>
              </div>
              <div className="feature-inner">
                <div className="feature-items">
                  <div className="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
                      <div className="icons d-center rounded-circle p1-bg">
                        <img src="/assets/img/icon/f-icon1.png" alt="icon" />
                      </div>
                      <h4><a href="/doctor" className="black fw_600">Quality Care <br /> Exceptional Service</a>
                      </h4>
                    </div>
                    <ul className="feature-list d-flex flex-column gap-1">
                      <li>
                        Your Health, Our Priority
                      </li>
                      <li>
                        Harmony Health
                      </li>
                    </ul>
                  </div>
                  <a href="/doctor" className="common-btn cmn-border text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s">
                    Read More
                    <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                  </a>
                  {/* Extra Hover */}
                  <img src="/assets/img/choose/feature1.jpg" alt="img" className="extra-feature" />
                </div>
                <div className="line" />
                <div className="feature-items">
                  <div className="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
                      <div className="icons d-center rounded-circle p1-bg">
                        <img src="/assets/img/icon/f-icon2.png" alt="icon" />
                      </div>
                      <h4><a href="/doctor" className="black fw_600">Healing Lives One <br /> Patient at a
                          Time</a></h4>
                    </div>
                    <ul className="feature-list d-flex flex-column gap-1">
                      <li>
                        Your Health, Our Priority
                      </li>
                      <li>
                        Harmony Health
                      </li>
                    </ul>
                  </div>
                  <a href="/doctor" className="common-btn cmn-border text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s">
                    Read More
                    <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                  </a>
                  {/* Extra Hover */}
                  <img src="/assets/img/choose/feature2.jpg" alt="img" className="extra-feature" />
                </div>
                <div className="line" />
                <div className="feature-items">
                  <div className="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
                      <div className="icons d-center rounded-circle p1-bg">
                        <img src="/assets/img/icon/f-icon3.png" alt="icon" />
                      </div>
                      <h4><a href="/doctor" className="black fw_600">Caring for You Caring <br /> for
                          Tomorrow</a></h4>
                    </div>
                    <ul className="feature-list d-flex flex-column gap-1">
                      <li>
                        Your Health, Our Priority
                      </li>
                      <li>
                        Harmony Health
                      </li>
                    </ul>
                  </div>
                  <a href="/doctor" className="common-btn cmn-border text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s">
                    Read More
                    <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                  </a>
                  {/* Extra Hover */}
                  <img src="/assets/img/choose/feature3.jpg" alt="img" className="extra-feature" />
                </div>
                <div className="line" />
              </div>
              {/* Element*/}
              <a href="/doctor" className="feature-element">
                <img src="/assets/img/element/feature-element.png" alt="img" className="rounded-4" />
              </a>
            </div>
          </div>
        </section>
        {/* Counter Care Section Start */}
        <section className="care-counter fix">
          <div className="container">
            <div className="care-counter-wrap">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-5">
                  <div className="care-counter-text">
                    <h3 className="black fw_700 visible-slowly-right">Tomorrow's Health <br /> Today's Care</h3>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="care-counter">
                    <div className="counter-items box-style first-box wow fadeIn" data-wow-delay="0.4s">
                      <div className="content">
                        <h2><span className="count">600</span>+</h2>
                        <p className="black">Complte Project</p>
                      </div>
                    </div>
                    <div className="counter-items box-style first-box wow fadeIn" data-wow-delay="0.5s">
                      <div className="content">
                        <h2><span className="count">200</span>+</h2>
                        <p className="black">Team Member</p>
                      </div>
                    </div>
                    <div className="counter-items box-style first-box wow fadeIn" data-wow-delay="0.6s">
                      <div className="content">
                        <h2><span className="count">500</span>k+</h2>
                        <p className="black">Clients Reviews</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Choose Section Start */}
        <section className="choose-section space-bottom space-top">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="choose-left">
                  <div className="section-title mb-60">
                    <span className="cmn-tag p1-bg heading-font">Why Chose Us</span>
                    <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                      Empower Health <br />
                      Lives
                      <span className="position-relative z-1">
                        Expert
                        <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                      </span>
                      Care
                    </h2>
                  </div>
                  <a href="/doctor-details" className="w-100 rounded-4 overflow-hidden">
                    <img src="/assets/img/choose/choose1.jpg" alt="img" className="rounded-4 w-100" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="chosse-middle">
                  <a href="/doctor-details" className="w-100 rounded-4 overflow-hidden mb-xxl-4 mb-3 d-block">
                    <img src="/assets/img/choose/choose2.jpg" alt="img" className="rounded-4 w-100" />
                  </a>
                  <h4 className="mb-xxl-3 mb-2">
                    <a href="/doctor-details" className="black fw_700">
                      The Enhanc Lives care Through Care
                    </a>
                  </h4>
                  <p className="pra fs-seven">
                    Health care is a vital aspect of maintaining overall well-being, encompassing a range of
                    services from preventive
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.8s">
                <div className="choose-right position-relative d-center overflow-hidden rounded-4 w-100">
                  <img src="/assets/img/choose/choose3.jpg" alt="img" className="rounded-4 w-100" />
                  <a href="/doctor-details" className="video-choose d-center rounded-circle p1-bg video-popup">
                    <i className="fa-solid fa-play black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Special Section Start */}
        <section className="special-care-section body-bg space-bottom">
          <div className="container custom-contaienr">
            <div className="special-care-wrap position-relative">
              <div className="row g-4 justify-content-lg-between">
                <div className="col-lg-6">
                  <div className="section-title">
                    <span className="cmn-tag p1-bg heading-font">Spaical Care</span>
                    <h2 className="wow fadeInUp black visible-slowly-right mb-xxl-4 mb-3" data-wow-delay=".3s">
                      Your health, our priority <br />
                      <span className="position-relative z-1">
                        The Healing
                        <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none" />
                      </span>
                      with heart
                    </h2>
                    <p className="pra mb-40">
                      Health care is a vital aspect of maintaining overall well-being, encompassing a range of
                      services from preventive care
                      to treatment of cuses on promoting Health care is a vital aspect of maintaining overall
                      well-being,
                    </p>
                    <div className="d-flex align-items-center gap-sm-4 gap-2">
                      <a href="/doctor-details" className="common-btn box-style cmn-border d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s">
                        Read More
                        <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                      </a>
                      <a href="/contact" className="header-help d-lg-flex d-none align-items-center gap-xxl-3 gap-2">
                        <img src="/assets/img/icon/chat-icon.png" alt="cion" />
                        <span className="cont">
                          <span className="pra d-block">Need help?</span>
                          <span className="black fw_600">(603) 555-0123</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="special-tag-inner d-flex flex-column gap-xxl-4 gap-3">
                    <a href="/project" className="special-tag d-flex align-items-center gap-3 gap-2 rounded-3 heading-font cmn-border">
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                      Caring for you every step of the way
                    </a>
                    <a href="/project" className="special-tag d-flex align-items-center gap-3 gap-2 rounded-3 heading-font cmn-border">
                      <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                      Caring for you every step of the way
                    </a>
                    <div className="special-behaind text-center">
                      <div className="box position-relative">
                        <div className="icon d-center rounded-circle white-bg"><img src="/assets/img/icon/behain.png" alt="icon" /></div>
                        <h4 className="white mb-2 visible-slowly-right">Building healthier communities</h4>
                        <p className="white mb-4">
                          Health care is a vital aspect of maintaining overall well-being, encompassing a
                          range of services from preventive
                          care
                          to treatment of cuses on promoting Health care is a vital aspect
                        </p>
                        <a href="/project" className="common-btn arrow-white-adding box-style white-border d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold py-3 white overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s">
                          Read More
                          <img src="/assets/img/icon/arrow-right-white.png" alt="icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Special Element */}
              <img src="/assets/img/element/special-element.png" alt="element" className="special-element" />
            </div>
          </div>
          <div className="container">
            <div className="testimonail-wrapper-style1">
              <div className="swiper testimonial-slider1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-items1">
                      <span className="fs-eight fw_500 black d-block mb-2">Clients Testimonial</span>
                      <h2 className="black fw_700 mb-xl-4 mb-3">What Our Users <br /> Are Saying</h2>
                      <p className="fs-five black mb-xxl-4 mb-3">
                        Health is wealth, and in the realm of medical health, every life matters. It is a
                        encompasses a wide range of
                        specialties aimed at diagnosing, treating, and preventing diseases and maintaining
                        overall well-being. Medical health
                        for a professionals dedicate their lives to providing care
                      </p>
                      <div className="d-flex align-items-center gap-2 fs-six fw_600 black">
                        <div className="line" /> Mukesh Kumer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="array-button array-button-black wow fadeInUp" data-wow-delay=".5s">
                <button className="array-prev d-center"><img src="/assets/img/icon/arrow-left-black.png" alt="icon" /></button>
                <button className="array-next d-center"><img src="/assets/img/icon/arrow-right-black.png" alt="icon" /></button>
              </div>
              {/* Element */}
              <img src="/assets/img/element/testimap-element.png" alt="element" className="testimonial-element1" />
            </div>
          </div>
        </section>
        {/*<< Footer Section Start >>*/}
        <footer className="footer-section z-1 position-relative blackbg fix">
          <div className="container">
            <div className="footer-newsletter">
              <h2 className="fw_600 white visible-slowly-right position-relative mb-40">
                Ready To Turn Dreams Into Reality Subscribe to Our Newsletter
                {/* Element */}
                <img src="/assets/img/element/newsletter-element.png" alt="element" className="newsletter-element" />
              </h2>
              <form action="#" className="form-cmn-style1">
                <input type="text" placeholder="Enter your email" />
                <button type="button" className="common-btn text-nowrap box-style py-3 first-box d-inline-flex justify-content-center align-items-center fs-seven fw_600 gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p1-bg rounded-5">
                  Subscribe Now
                  <img src="/assets/img/icon/arrow-right-black.png" alt="icon" />
                </button>
              </form>
            </div>
            <div className="footer-space">
              <div className="footer-widgets-wrapper">
                <div className="row g-4 justify-content-between">
                  <div className="col-lg-3 col-md-6 col-sm-7">
                    <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.4s">
                      <div className="widget-head">
                        <a href="/">
                          <img src="/assets/img/logo/logo-white.svg" alt="logo-img" />
                        </a>
                      </div>
                      <div className="footer-content">
                        <p className="pra2">
                          Medical services are an essential part of our lives, offering care and treatment
                          for various health conditions
                        </p>
                        <div className="social-wrapper d-flex align-items-center">
                          <a href="#" className=" black"><i className="fab fa-facebook-f" /></a>
                          <a href="#" className=" black"><i className="fa-brands fa-linkedin-in" /></a>
                          <a href="#" className=" black"><i className="fab fa-instagram" /></a>
                          <a href="#" className=" black"><i className="fa-brands fa-x" /></a>
                        </div>
                      </div>
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
                          <a href="/doctor">
                            Doctors
                          </a>
                        </li>
                        <li>
                          <a href="/blog-details">
                            Blog And News
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-lg-center">
                    <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.6s">
                      <div className="widget-head">
                        <h4 className="white fw_600">Link</h4>
                      </div>
                      <ul className="list-area">
                        <li>
                          <a href="/contact">
                            Trems &amp; Condition
                          </a>
                        </li>
                        <li>
                          <a href="/contact">
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="/contact">
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a href="/contact">
                            Treams Of Use
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-5 d-flex justify-content-lg-center">
                    <div className="single-footer-widget wow fadeInUp" data-wow-delay="0.7s">
                      <div className="widget-head">
                        <h4 className="white">Contact</h4>
                      </div>
                      <ul className="footer-info d-flex flex-column gpa-xxl-4 gap-3">
                        <li className="d-flex align-items-center gap-xl-3 gap-2">
                          <span className="icon d-center"><i className="fa-solid fa-location-dot" /></span>
                          <div className="cont">
                            <span className="pra fs-seven d-block">Address</span>
                            <a href="javascript:void(0)" className="fs-six fw_500 white sub-font">66
                              Broklyant,India</a>
                          </div>
                        </li>
                        <li className="d-flex align-items-center gap-xl-3 gap-2">
                          <span className="icon d-center"><i className="fa-solid fa-phone" /></span>
                          <div className="cont">
                            <span className="pra fs-seven d-block">Phone Number</span>
                            <a href="javascript:void(0)" className="fs-six fw_500 white sub-font">012 345
                              678 9101</a>
                          </div>
                        </li>
                        <li className="d-flex align-items-center gap-xl-3 gap-2">
                          <span className="icon d-center"><i className="fa-solid fa-envelope" /></span>
                          <div className="cont">
                            <span className="pra fs-seven d-block">Email</span>
                            <a href="javascript:void(0)" className="fs-six fw_500 white sub-font">abcd@gmail.com</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom text-center">
            <div className="container">
              <p className="body-font text-center py-4">
                © 2025 MediZen | All Rights Reserved
              </p>
            </div>
          </div>
          {/* Element*/}
          <img src="/assets/img/element/footer-element.png" alt="element" className="footer-element" />
        </footer>
        {/* Offcanvas Area Start */}
        <div className="fix-area">
          <div className="offcanvas__info">
            <div className="offcanvas__wrapper">
              <div className="offcanvas__content">
                <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                  <div className="offcanvas__logo">
                    <a href="/">
                      <img src="/assets/img/logo/logo.svg" alt="logo-img" />
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

export default AboutPage
