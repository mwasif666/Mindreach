import PageLayout from '../components/layout/PageLayout'

const PAGE_TITLE = "Blog Details || Medizen || Medizen React Template"
const BODY_CLASS = "body-bg"

function BlogDetailsPage() {
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
              <h2 className="black">Blog Details</h2>
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>/</li>
                <li>Blog Details</li>
              </ul>
            </div>
          </div>
          {/* Bread Ele */}
          <img src="/assets/img/about/breadcrumnd-shap.png" alt="img" className="bread-ele" />
        </section>
        {/* Banner Section Start */}
        {/* blog Section Start*/}
        <section className="blog-details-section section-padding">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="blog-details-wraping">
                  <div className="mb-xxl-4 mb-4">
                    <h2 className="black mb-xxl-4 mb-3 wow fadeInUp">Tomorrow's Health Today's Care</h2>
                    <div className="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-2">
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-solid fa-calendar-days p2-clr" />
                        October 19, 2022
                      </div>
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-solid fa-user p2-clr" />
                        By admin
                      </div>
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-regular fa-folder-open p2-clr" />
                        Catagory
                      </div>
                    </div>
                    <p className="pra wow fadeInUp" data-wow-delay="0.2s">
                      Medical services are an essential part of our lives, offering care and treatment for
                      various health conditions.
                      These
                      services encompass a wide range of specialties, including primary care, pediatrics,
                      cardiology
                    </p>
                  </div>
                  <div className="thumb w-100 rounded-4 mb-4 wow fadeInUp" data-wow-delay="0.3s">
                    <img src="/assets/img/blog/blog-details1.jpg" alt="img" className="w-100 rounded-4" />
                  </div>
                  <div className="mb-4 wow fadeInUp" data-wow-delay="0.4s">
                    <h4 className="mb-3">Serenity Health Center</h4>
                    <p className="pra">Medical services are an essential part of our lives, offering care and
                      treatment for various health conditions. These
                      services encompass a wide range of specialties, including primary care, pediatrics,
                      cardiology</p>
                  </div>
                  <div className="lee-pragraph mb-4 wow fadeInUp" data-wow-delay="0.5s">
                    <img src="/assets/img/icon/blog-quote.png" alt="icon" />
                    <div className="lcont">
                      <p className="pra mb-3">
                        Medical services are an essential part of our lives, offering care and treatment for
                        various health conditions.
                        These
                        services encompass a wide range of specialties, including primary
                      </p>
                      <span className="d-block fw_500 black mb-1">Devid Bekham</span>
                      <span className="pra fs-seven">
                        Brand Maneger
                      </span>
                    </div>
                  </div>
                  <div className="mb-4 wow fadeInUp" data-wow-delay="0.2s">
                    <p className="pra mb-3">Medical services are an essential part of our lives, offering care and
                      treatment for various health conditions. These
                      services encompass a wide range of specialties, including primary care, pediatrics,
                      cardiology</p>
                    <h5 className="black mb-3">Senior Care Coordination</h5>
                    <ul className="d-grid gap-xl-2 gap-1">
                      <li className="d-flex align-items-center gap-xxl-3 gap-2 pra">
                        <i className="fa-solid fa-angles-right p2-clr" /> Dental operations involve various
                        procedures performed by dentists
                      </li>
                      <li className="d-flex align-items-center gap-xxl-3 gap-2 pra">
                        <i className="fa-solid fa-angles-right p2-clr" /> Medical services are an essential
                        part of our lives, offering care
                      </li>
                      <li className="d-flex align-items-center gap-xxl-3 gap-2 pra">
                        <i className="fa-solid fa-angles-right p2-clr" /> These services encompass a wide
                        range of specialties, including primary care, pediatrics, cardiology
                      </li>
                      <li className="d-flex align-items-center gap-xxl-3 gap-2 pra">
                        <i className="fa-solid fa-angles-right p2-clr" /> Empowering Health, Empowering Lives
                        Expert Care, Trusted Results
                      </li>
                    </ul>
                  </div>
                  <div className="mb-40 wow fadeInUp" data-wow-delay="0.3s">
                    <h5 className="black mb-3">
                      Holistic Health Consultations
                    </h5>
                    <p className="pra mb-3">Medical services are an essential part of our lives, offering care and
                      treatment for various health conditions. These
                      services encompass a wide range of specialties, including primary care, pediatrics,
                      cardiology</p>
                    <p className="pra">
                      Medical services are an essential part of our lives, offering care and treatment for
                      various health conditions. These
                      are a services encompass a wide range of specialties, including primary care,
                      pediatrics, cardiology Medical services
                      are an essential part of our lives, offering care and treatment for various health
                      conditions These services
                    </p>
                  </div>
                  <div className="content border-0 p-0">
                    <div className="tag-social-wrap d-flex justify-content-md-between justify-content-center flex-md-nowrap flex-wrap gap-3 align-items-center wow fadeInUp" data-wow-delay="0.4s">
                      <div className="tags d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
                        <h4 className="black">Tags:</h4>
                        <ul className="tags">
                          <li><a href="javascript:void(0)">LifeHarbor</a></li>
                          <li><a href="javascript:void(0)">Thrive Clinic</a></li>
                          <li><a href="javascript:void(0)">Life</a></li>
                          <li><a href="javascript:void(0)">Health</a></li>
                        </ul>
                      </div>
                      <div className="social-wrapper d-flex align-items-center">
                        <a href="#" className=" black"><i className="fab fa-facebook-f" /></a>
                        <a href="#" className=" black"><i className="fab fa-instagram" /></a>
                        <a href="#" className=" black">
                          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_5855_218)">
                              <path d="M8.30314 5.92804L13.4029 0H12.1944L7.7663 5.14724L4.22958 0H0.150391L5.4986 7.78354L0.150391 14H1.35894L6.03514 8.56434L9.77017 14H13.8494L8.30284 5.92804H8.30314ZM6.64787 7.85211L6.10598 7.07705L1.79439 0.909771H3.65065L7.13015 5.88696L7.67204 6.66202L12.195 13.1316H10.3387L6.64787 7.85241V7.85211Z" fill="#090A0B" />
                            </g>
                            <defs>
                              <clipPath id="clip0_5855_218">
                                <rect width={14} height={14} fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                        <a href="#" className=" black"><i className="fa-brands fa-linkedin-in" /></a>
                      </div>
                    </div>
                    <h4 className="mb-xl-4 mb-3 black mt-60 wow fadeInUp" data-wow-delay="0.4s">
                      Unity Health Services
                    </h4>
                    <div className="blog-details-reply-area d-flex flex-column mb-60">
                      <div className="blog-reply-box wow fadeInUp" data-wow-delay="0.4s">
                        <div className="replay-name rounded-circle">
                          <img src="/assets/img/blog/replay1.jpg" alt="blo" className="rounded-circle" />
                        </div>
                        <div className="cont-box">
                          <div className="d-flex flex-sm-nowrap flex-wrap gap-2 align-items-center justify-content-between mb-3">
                            <div className="cont">
                              <h5 className="black fw_700 mb-1">Theresa Webb</h5>
                              <p className="pra fs-seven">August 12, 2024 at 8:50 P.M</p>
                            </div>
                            <button type="button">Reply</button>
                          </div>
                          <p className="fs-seven pra">
                            Medical services are an essential part of our lives, offering care and
                            treatment for various health conditions.
                            These
                            services encompass a wide range of specialties, including primary
                          </p>
                        </div>
                      </div>
                      <div className="blog-reply-box wow fadeInUp" data-wow-delay="0.4s">
                        <div className="replay-name rounded-circle">
                          <img src="/assets/img/blog/replay1.jpg" alt="blo" className="rounded-circle" />
                        </div>
                        <div className="cont-box">
                          <div className="d-flex flex-sm-nowrap flex-wrap gap-2 align-items-center justify-content-between mb-3">
                            <div className="cont">
                              <h5 className="black fw_700 mb-1">Theresa Webb</h5>
                              <p className="pra fs-seven">August 12, 2024 at 8:50 P.M</p>
                            </div>
                            <button type="button">Reply</button>
                          </div>
                          <p className="fs-seven pra">
                            Medical services are an essential part of our lives, offering care and
                            treatment for various health conditions.
                            These
                            services encompass a wide range of specialties, including primary
                          </p>
                        </div>
                      </div>
                    </div>
                    <form action="#" className="contact-forms blog-form wow fadeInUp" data-wow-delay="0.6s">
                      <h4 className="black mb-xl-4 mb-3">Write Your Message</h4>
                      <div className="row g-lg-3 g-3">
                        <div className="col-lg-12">
                          <textarea name="message" placeholder="Message here.." rows={5} defaultValue={""} />
                        </div>
                        <div className="col-lg-6">
                          <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="col-lg-6">
                          <input type="email" placeholder="Your Email" />
                        </div>
                        <div className="col-lg-12 mt-xxl-5">
                          <button className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold text-white overflow-hidden p2-bg rounded-5 wow fadeInRight" data-wow-delay="0.8s">
                            Reply
                            <img src="/assets/img/icon/arrow-right-white.png" alt="icon" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-details-right">
                  <div className="details-common search-box">
                    <h5 className="black d-flex align-items-center gap-2 mb-4 fw_700 visible-slowly-right"><img src="/assets/img/element/cate-badge.png" alt="ele" /> Search</h5>
                    <form action="#">
                      <input type="text" placeholder="Search..." />
                      <button type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
                    </form>
                  </div>
                  <div className="details-common category-blog">
                    <h5 className="black d-flex align-items-center gap-2 mb-4 fw_700 visible-slowly-right"><img src="/assets/img/element/cate-badge.png" alt="ele" /> Category</h5>
                    <ul className="cates">
                      <li>
                        <a href="javascript:void(0)" className="d-flex align-items-center justify-content-between fs-five black">
                          Serenity Med
                          <span className="seri d-center"><i className="fa-solid fa-plus" /></span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="d-flex align-items-center justify-content-between fs-five black">
                          Serenity Health Center
                          <span className="seri d-center"><i className="fa-solid fa-plus" /></span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="d-flex align-items-center justify-content-between fs-five black">
                          Unity Health Services
                          <span className="seri d-center"><i className="fa-solid fa-plus" /></span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="d-flex align-items-center justify-content-between fs-five black">
                          Revive Medical Care
                          <span className="seri d-center"><i className="fa-solid fa-plus" /></span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:void(0)" className="d-flex align-items-center justify-content-between fs-five black">
                          Harmony Holistic Health
                          <span className="seri d-center"><i className="fa-solid fa-plus" /></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="details-common search-box">
                    <h5 className="black d-flex align-items-center gap-2 mb-4 fw_700 visible-slowly-right"><img src="/assets/img/element/cate-badge.png" alt="ele" /> Recent post</h5>
                    <div className="blog-latest">
                      <div className="blog-latest-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="thumb">
                          <img src="/assets/img/blog/latest1.png" alt="icon" />
                        </div>
                        <div className="content">
                          <div className="d-flex black align-items-center gap-2 mb-1">
                            <i className="fa-regular fa-folder-open p2-clr" /> Category
                          </div>
                          <a href="/blog-details" className="black">
                            Building health communities A healthy tomorrow
                          </a>
                        </div>
                      </div>
                      <div className="blog-latest-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="thumb">
                          <img src="/assets/img/blog/lates2.png" alt="icon" />
                        </div>
                        <div className="content">
                          <div className="d-flex black align-items-center gap-2 mb-1">
                            <i className="fa-regular fa-folder-open p2-clr" /> Category
                          </div>
                          <a href="/blog-details" className="black">
                            Quality health, close to home Caring for
                          </a>
                        </div>
                      </div>
                      <div className="blog-latest-item wow fadeInUp" data-wow-delay="0.4s">
                        <div className="thumb">
                          <img src="/assets/img/blog/lates3.png" alt="icon" />
                        </div>
                        <div className="content">
                          <div className="d-flex black align-items-center gap-2 mb-1">
                            <i className="fa-regular fa-folder-open p2-clr" /> Category
                          </div>
                          <a href="/blog-details" className="black">
                            you every step of the way Renew Health Center
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="details-common quick-call text-center">
                    <h4 className="black">Need Help?Call Us</h4>
                    <a href="#" className="d-center call rounded-circle p1-bg"><i className="fa-solid fa-phone" /></a>
                    <p className="pra mb-xxl-4 mb-3">Health care is a vital aspect of maintaining overall
                      well-being, encompassing a range of services from preventive care</p>
                    <a href="#" className="numbs heading-font">(+888) 178 456 765</a>
                  </div>
                  <div className="details-common category-blog">
                    <h5 className="black d-flex align-items-center gap-2 mb-4 fw_700 visible-slowly-right"><img src="/assets/img/element/cate-badge.png" alt="ele" /> Tags</h5>
                    <ul className="tags">
                      <li><a href="javascript:void(0)">LifeHarbor</a></li>
                      <li><a href="javascript:void(0)">Thrive Clinic</a></li>
                      <li><a href="javascript:void(0)">Life</a></li>
                      <li><a href="javascript:void(0)">Health</a></li>
                      <li><a href="javascript:void(0)">CareUnity</a></li>
                      <li><a href="javascript:void(0)">Harmony</a></li>
                      <li><a href="javascript:void(0)">Care Plus</a></li>
                      <li><a href="javascript:void(0)">Well</a></li>
                    </ul>
                  </div>
                </div>
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

export default BlogDetailsPage
