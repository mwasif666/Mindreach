import PageLayout from '../components/layout/PageLayout'

const PAGE_TITLE = "Project Details|| Medizen || Medizen React Template"
const BODY_CLASS = "body-bg"

function ProjectDetailsPage() {
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
              <h2 className="black">Project Details</h2>
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>/</li>
                <li>Project Details</li>
              </ul>
            </div>
          </div>
          {/* Bread Ele */}
          <img src="/assets/img/about/breadcrumnd-shap.png" alt="img" className="bread-ele" />
        </section>
        {/* Banner Section Start */}
        {/* Project Section Start */}
        <section className="project-details-section space-bottom fix space-top">
          <div className="container">
            <div className="project-details-wrapping">
              <h1 className="black mb-60 text-center wow fadeInUp" data-wow-delay="0.3s">Healing Lives One Patient at a
                Time</h1>
              <div className="project-cate-wrap rounded-4 white-bg wow fadeInUp mb-60" data-wow-delay="0.4s">
                <div className="project-cate-item">
                  <h4 className="black mb-xxl-2 mb-1">Location</h4>
                  <p className="pra">Mirpur 10 Road 14 House 2 ,Dhaka</p>
                </div>
                <div className="project-cate-item">
                  <h4 className="black mb-xxl-2 mb-1">Clients</h4>
                  <p className="pra">Jenny Wilson</p>
                </div>
                <div className="project-cate-item">
                  <h4 className="black mb-xxl-2 mb-1">Website</h4>
                  <p className="pra">www.Medisan.com</p>
                </div>
                <div className="project-cate-item">
                  <h4 className="black mb-xxl-2 mb-1">Date</h4>
                  <p className="pra">16 August 2024</p>
                </div>
              </div>
              <div className="thumb-area">
                <img src="/assets/img/service/project-details1.jpg" alt="img" className="w-100 rounded-4 mb-xxl-5 mb-xl-4 mb-3 wow fadeInUp" data-wow-delay="0.5s" />
                <p className="pra wow fadeInUp" data-wow-delay="0.6s">
                  Medical care encompasses a range of services aimed at promoting health, preventing disease, and
                  treating illnesses. From
                  routine check-ups to life-saving surgeries, medical care plays a crucial role in ensuring the
                  well-being of individuals
                  and communities Medical care encompasses a range of services aimed at promoting health,
                  preventing disease, and treating
                  illnesses. From routine check-ups to life-saving surgeries, medical care plays a crucial role in
                  ensuring the well-being
                  of individuals and communities
                </p>
              </div>
              <div className="project-drop-inner">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="project-drop-item">
                      <div className="thumb mb-xxl-4 mb-3 wow fadeInUp" data-wow-delay="0.3s">
                        <img src="/assets/img/service/project-details2.jpg" alt="img" className="rounded-3 w-100" />
                      </div>
                      <div className="mb-xxl-4 mb-3">
                        <h4 className="black mb-xxl-2 mb-1 wow fadeInUp" data-wow-delay="0.4s">Health Guardians
                        </h4>
                        <p className="pra wow fadeInUp" data-wow-delay="0.5s">
                          Medical care encompasses a range of services aimed at promoting health,
                          preventing
                          disease, and treating illnesses.
                          From
                          routine check-ups to life-saving surgeries
                        </p>
                      </div>
                      <ul className="drop-project d-grid gap-xl-2 gap-1 wow fadeInUp" data-wow-delay="0.3s">
                        <li className="d-flex align-items-center gap-2 pra">
                          <i className="fa-solid fa-angles-right p2-clr" /> Your Health, Our Priority
                        </li>
                        <li className="d-flex align-items-center gap-2 pra">
                          <i className="fa-solid fa-angles-right p2-clr" /> Compassionate Care, Exceptional
                          Results
                        </li>
                        <li className="d-flex align-items-center gap-2 pra">
                          <i className="fa-solid fa-angles-right p2-clr" /> Healing Lives, One Patient at a
                          Time
                        </li>
                        <li className="d-flex align-items-center gap-2 pra">
                          <i className="fa-solid fa-angles-right p2-clr" /> Empowering Health, Empowering
                          Lives
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-drop-item">
                      <div className="thumb mb-xxl-4 mb-3 wow fadeInUp" data-wow-delay="0.3s">
                        <img src="/assets/img/service/project-details3.jpg" alt="img" className="rounded-3 w-100" />
                      </div>
                      <div className="mb-xxl-4 mb-3">
                        <h4 className="black mb-xxl-2 mb-1 wow fadeInUp" data-wow-delay="0.4s">Harmony Health
                        </h4>
                        <p className="pra wow fadeInUp" data-wow-delay="0.5s">
                          Medical care encompasses a range of services aimed at promoting health,
                          preventing
                          disease, and treating illnesses.
                          From
                          routine check-ups to life-saving surgeries
                        </p>
                      </div>
                      <ul className="drop-project d-grid gap-xl-2 gap-1 wow fadeInUp" data-wow-delay="0.3s">
                        <li className="d-flex align-items-center gap-2 pra">
                          <i className="fa-solid fa-angles-right p2-clr" /> Partnering for Better Health
                        </li>
                        <li className="d-flex align-items-center gap-2 pra">
                          <i className="fa-solid fa-angles-right p2-clr" /> Tomorrow's Health, Today's Care
                        </li>
                        <li className="d-flex align-items-center gap-2 pra">
                          <i className="fa-solid fa-angles-right p2-clr" /> Caring for You, Caring for
                          Tomorrow
                        </li>
                        <li className="d-flex align-items-center gap-2 pra">
                          <i className="fa-solid fa-angles-right p2-clr" /> Expert Care, Trusted Results
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-60">
                <h4 className="black mb-xl-3 mb-2">Health Matters We Care</h4>
                <p className="pra mb-xl-2 mb-1">
                  Medical services are an essential part of our lives, offering care and treatment for various
                  health conditions. These
                  are a services encompass a wide range of specialties, including primary care, pediatrics,
                  cardiology Medical services
                  are an essential part of our lives, offering care and treatment for various health conditions
                  These services
                </p>
                <p className="pra">
                  Medical care encompasses a range of services aimed at promoting health, preventing disease, and
                  treating illnesses. From
                  routine check-ups to life-saving surgeries, medical care plays a crucial role in ensuring the
                  well-being of individuals
                  and communities Medical care encompasses a range of services aimed at promoting health,
                  preventing disease, and treating
                  illnesses. From routine check-ups to life-saving surgeries, medical care plays a crucial role in
                  ensuring the well-being
                  of individuals and communities
                </p>
              </div>
              <div className="project-prenext d-flex align-items-center justify-content-between">
                <button type="button" className="d-flex align-items-center gap-xxl-3 gap-2 black fw_600 fs-six">
                  <i className="fa-solid fa-angle-left black" /> Previous post
                </button>
                <button type="button" className="d-flex align-items-center gap-xxl-3 gap-2 black fw_600 fs-six">
                  Next post <i className="fa-solid fa-angle-right p2-clr" />
                </button>
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

export default ProjectDetailsPage
