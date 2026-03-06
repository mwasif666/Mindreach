import PageLayout from '../components/layout/PageLayout'

const PAGE_TITLE = "Doctor|| Medizen || Medizen React Template"
const BODY_CLASS = "body-bg"

function DoctorPage() {
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
          {/* Bread Ele */}
          <img src="/assets/img/about/breadcrumnd-shap.png" alt="img" className="bread-ele" />
        </section>
        {/* Banner Section Start */}
        {/* Feature Section Start */}
        <section className="feature-section fix section-padding">
          <div className="container">
            <div className="featue-wrapper feaure-wrapper2 position-relative">
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
                    <img src="/assets/img/choose/feature5.jpg" alt="img" className="extra-feature" />
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
                <div className="ins d-flex flex-column gap-xxl-4 gap-3">
                  <div className="line" />
                  <div className="feature-items">
                    <div className="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
                      <h4><a href="/doctor-details" className="black fw_600 text-nowrap">Dr.Nikol Jons</a>
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
                    <img src="/assets/img/choose/feature4.jpg" alt="img" className="extra-feature" />
                  </div>
                  <div className="line" />
                </div>
                <div className="ins d-flex flex-column gap-xxl-4 gap-3">
                  <div className="line" />
                  <div className="feature-items">
                    <div className="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
                      <h4><a href="/doctor-details" className="black fw_600 text-nowrap">Dr.Harry Kane</a>
                      </h4>
                      <ul className="feature-list d-flex flex-column gap-1">
                        <li className="text-nowrap">
                          Eye Spacilist
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
                    <img src="/assets/img/choose/feature5.jpg" alt="img" className="extra-feature" />
                  </div>
                  <div className="line" />
                </div>
                <div className="ins d-flex flex-column gap-xxl-4 gap-3">
                  <div className="line" />
                  <div className="feature-items">
                    <div className="feature-left d-lg-flex d-grid gap-3 flex-lg-nowrap flex-wrap justify-content-between align-items-center">
                      <h4><a href="#" className="black fw_600 text-nowrap">Dr.Nathan Kyler</a></h4>
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
                    <img src="/assets/img/choose/feature1.jpg" alt="img" className="extra-feature" />
                  </div>
                  <div className="line" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Appiontment Section Start */}
        <section className="appoentment-section fix space-bottom">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 order-lg-0 order-1">
                <div className="apoentment-thumb">
                  <img src="/assets/img/service/sub-contact.jpg" alt="img" className="rounded-4" />
                </div>
              </div>
              <div className="col-lg-6">
                <form action="#" className="appoentment-forms">
                  <div className="section-title mb-60">
                    <span className="cmn-tag p1-bg heading-font">Contact Us</span>
                    <h2 className="wow fadeInUp black visible-slowly-right" data-wow-delay=".3s">
                      Get an
                      <span className="position-relative z-1">
                        Appiontment
                        <img src="/assets/img/element/title-badge1.png" alt="img" className="title-badge1 d-md-block d-none w-100" />
                      </span>
                    </h2>
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
                      <input type="text" placeholder="Subject" />
                    </div>
                    <div className="col-lg-12">
                      <textarea name="message" placeholder="Message" rows={5} defaultValue={""} />
                    </div>
                    <div className="col-lg-12">
                      <a href="/doctor-details" className="common-btn box-style p2-bg w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden rounded100 wow fadeInRight" data-wow-delay="0.8s">
                        Book An Appiontment
                        <img src="/assets/img/icon/arrow-right-white.png" alt="icon" />
                      </a>
                    </div>
                  </div>
                </form>
              </div>
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
                          <img src="/assets/img/logo/logo-white.png" alt="logo-img" />
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

export default DoctorPage
