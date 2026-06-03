import { Navigate, useParams } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import BLOGS, { getBlogById } from '../data/blogs'

const BODY_CLASS = 'body-bg'

function renderSectionContent(section, idx) {
  return (
    <div key={idx} className="mb-4 wow fadeInUp" data-wow-delay="0.2s">
      {section.heading && <h4 className="black mb-3">{section.heading}</h4>}
      {section.stat && (
        <div className="lee-pragraph mb-4">
          <img src="/assets/img/icon/blog-quote.png" alt="icon" />
          <div className="lcont">
            <p className="pra mb-3">{section.stat}</p>
          </div>
        </div>
      )}
      {section.text && section.text.split('\n\n').map((para, pi) => (
        <p key={pi} className="pra mb-3">{para}</p>
      ))}
      {section.bullets && (
        <ul className="d-grid gap-xl-2 gap-1 mb-3">
          {section.bullets.map((item, bi) => (
            <li key={bi} className="d-flex align-items-start gap-xxl-3 gap-2 pra">
              <i className="fa-solid fa-angles-right p2-clr mt-1 flex-shrink-0" /> {item}
            </li>
          ))}
        </ul>
      )}
      {section.textAfter && <p className="pra mb-3">{section.textAfter}</p>}
      {section.subsections && section.subsections.map((sub, si) => (
        <div key={si} className="mb-3">
          <h5 className="black mb-2">{sub.heading}</h5>
          {sub.text && sub.text.split('\n\n').map((para, pi) => (
            <p key={pi} className="pra mb-2">{para}</p>
          ))}
          {sub.bullets && (
            <ul className="d-grid gap-xl-2 gap-1 mb-2">
              {sub.bullets.map((item, bi) => (
                <li key={bi} className="d-flex align-items-start gap-xxl-3 gap-2 pra">
                  <i className="fa-solid fa-angles-right p2-clr mt-1 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          )}
          {sub.textAfter && <p className="pra mb-2">{sub.textAfter}</p>}
        </div>
      ))}
    </div>
  )
}

function BlogDetailsPage() {
  const { blogId } = useParams()
  const blog = blogId ? getBlogById(blogId) : BLOGS[0]

  if (!blog) {
    return <Navigate to="/blog" replace />
  }

  const pageTitle = blog.metaTitle

  return (
    <PageLayout title={pageTitle} bodyClass={BODY_CLASS}>
      <div>
        <div className="mouse-follower">
          <span className="cursor-outline" />
          <span className="cursor-dot" />
        </div>

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
                            <a href="/">Home <i className="fas fa-angle-down" /></a>
                            <ul className="submenu has-homemenu">
                              <li>
                                <div className="homemenu-items">
                                  <div className="homemenu">
                                    <a href="/home-1" className="homemenu-thumb">
                                      <img src="/assets/img/header/home-1.jpg" alt="img" />
                                      <span className="demo-button"><span className="theme-btn p1-bg box-style first-box"><span className="black">Home 01</span></span></span>
                                    </a>
                                  </div>
                                  <div className="homemenu">
                                    <a href="/home-2" className="homemenu-thumb mb-15">
                                      <img src="/assets/img/header/home-2.jpg" alt="img" />
                                      <span className="demo-button"><span className="theme-btn p1-bg box-style first-box"><span className="black">Home 02</span></span></span>
                                    </a>
                                  </div>
                                  <div className="homemenu">
                                    <a href="/" className="homemenu-thumb mb-15">
                                      <img src="/assets/img/header/home-3.jpg" alt="img" />
                                      <span className="demo-button"><span className="theme-btn p1-bg box-style first-box"><span className="black">Home 03</span></span></span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li><a href="/service">Service</a></li>
                          <li className="has-dropdown">
                            <a href="/blog">Blog <i className="fas fa-angle-down" /></a>
                            <ul className="submenu">
                              <li><a href="/blog">All Articles</a></li>
                              {BLOGS.map((b) => (
                                <li key={b.id}><a href={b.detailsHref}>{b.title}</a></li>
                              ))}
                            </ul>
                          </li>
                          <li className="has-dropdown">
                            <a href="#!">Pages <i className="fas fa-angle-down" /></a>
                            <ul className="submenu">
                              <li><a href="/about">About Us</a></li>
                              <li><a href="/provider">Doctors</a></li>
                              <li><a href="/pricing">Pricing</a></li>
                            </ul>
                          </li>
                          <li><a href="/contact">Contact</a></li>
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
                  <img src="/assets/img/icon/chat-icon.png" alt="icon" />
                  <span className="cont">
                    <span className="pra d-block">Need help?</span>
                    <span className="black fw_600">(603) 555-0123</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="breadcrumb-section position-relative fix">
          <div className="container">
            <div className="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
              <h2 className="black">{blog.title}</h2>
              <ul className="d-flex align-items-center gap-3">
                <li><a href="/">Home</a></li>
                <li>/</li>
                <li><a href="/blog">Blog</a></li>
                <li>/</li>
                <li>{blog.category}</li>
              </ul>
            </div>
          </div>
          <img src="/assets/img/about/breadcrumnd-shap.png" alt="img" className="bread-ele" />
        </section>

        <section className="blog-details-section section-padding">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="blog-details-wraping">

                  {/* Title & meta */}
                  <div className="mb-xxl-4 mb-4">
                    <h2 className="black mb-2 wow fadeInUp">{blog.title}</h2>
                    {blog.subtitle && <h5 className="pra fw-normal mb-3">{blog.subtitle}</h5>}
                    <div className="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-2">
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-solid fa-calendar-days p2-clr" /> {blog.date}
                      </div>
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-solid fa-user p2-clr" /> By {blog.author}
                      </div>
                      <div className="d-flex align-items-center gap-1 fs-eight pra">
                        <i className="fa-regular fa-folder-open p2-clr" /> {blog.category}
                      </div>
                    </div>
                    <p className="pra wow fadeInUp" data-wow-delay="0.2s">{blog.intro}</p>
                  </div>

                  {/* Featured image */}
                  <div className="thumb w-100 rounded-4 mb-4 wow fadeInUp" data-wow-delay="0.3s">
                    <img src={blog.image} alt={blog.imageAlt} className="w-100 rounded-4" style={{ objectFit: 'cover', maxHeight: '460px' }} />
                  </div>

                  {/* Article sections */}
                  {blog.sections.map((section, idx) => renderSectionContent(section, idx))}

                  {/* CTA button */}
                  {blog.cta && (
                    <div className="mb-40 wow fadeInUp" data-wow-delay="0.3s">
                      <a
                        href={blog.cta.href}
                        className="common-btn box-style p2-bg w-100 text-nowrap d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden rounded100"
                      >
                        {blog.cta.text}
                        <img src="/assets/img/icon/arrow-right-white.png" alt="" aria-hidden="true" />
                      </a>
                    </div>
                  )}

                  {/* FAQ section */}
                  {blog.faqs && blog.faqs.length > 0 && (
                    <div className="mb-40 wow fadeInUp" data-wow-delay="0.3s">
                      <h4 className="black mb-4">Frequently Asked Questions</h4>
                      <div className="accordion" id={`faq-${blog.id}`}>
                        {blog.faqs.map((faq, fi) => (
                          <div key={fi} className="accordion-item border-0 mb-3" style={{ borderBottom: '1px solid #eee' }}>
                            <h5 className="accordion-header">
                              <button
                                className="accordion-button collapsed fw_600 black bg-transparent shadow-none px-0"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#faq-${blog.id}-${fi}`}
                                aria-expanded="false"
                              >
                                {faq.question}
                              </button>
                            </h5>
                            <div id={`faq-${blog.id}-${fi}`} className="accordion-collapse collapse" data-bs-parent={`#faq-${blog.id}`}>
                              <div className="accordion-body px-0 pra">{faq.answer}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags & social */}
                  <div className="content border-0 p-0">
                    <div className="tag-social-wrap d-flex justify-content-md-between justify-content-center flex-md-nowrap flex-wrap gap-3 align-items-center wow fadeInUp" data-wow-delay="0.4s">
                      <div className="tags d-flex align-items-center gap-xxl-4 gap-xl-3 gap-2">
                        <h4 className="black">Tags:</h4>
                        <ul className="tags">
                          {blog.tags.map((tag) => (
                            <li key={tag}><a href={`/blog?category=${encodeURIComponent(tag)}`}>{tag}</a></li>
                          ))}
                        </ul>
                      </div>
                      <div className="social-wrapper d-flex align-items-center">
                        <a href="#" className="black"><i className="fab fa-facebook-f" /></a>
                        <a href="#" className="black"><i className="fab fa-instagram" /></a>
                        <a href="#" className="black"><i className="fa-brands fa-linkedin-in" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="blog-details-right">
                  <div className="details-common search-box">
                    <h5 className="black d-flex align-items-center gap-2 mb-4 fw_700 visible-slowly-right">
                      <img src="/assets/img/element/cate-badge.png" alt="ele" /> Search
                    </h5>
                    <form action="#">
                      <input type="text" placeholder="Search..." />
                      <button type="submit"><i className="fa-solid fa-magnifying-glass" /></button>
                    </form>
                  </div>

                  <div className="details-common search-box">
                    <h5 className="black d-flex align-items-center gap-2 mb-4 fw_700 visible-slowly-right">
                      <img src="/assets/img/element/cate-badge.png" alt="ele" /> Recent Posts
                    </h5>
                    <div className="blog-latest">
                      {BLOGS.filter((b) => b.id !== blog.id).map((b, i) => (
                        <div key={b.id} className="blog-latest-item wow fadeInUp" data-wow-delay={`${0.4 + i * 0.1}s`}>
                          <div className="thumb">
                            <img src={b.image} alt={b.imageAlt} style={{ objectFit: 'cover', width: '80px', height: '60px', borderRadius: '6px' }} />
                          </div>
                          <div className="content">
                            <div className="d-flex black align-items-center gap-2 mb-1">
                              <i className="fa-regular fa-folder-open p2-clr" /> {b.category}
                            </div>
                            <a href={b.detailsHref} className="black">{b.title}</a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="details-common quick-call text-center">
                    <h4 className="black">Need Help? Call Us</h4>
                    <a href="/contact" className="d-center call rounded-circle p1-bg"><i className="fa-solid fa-phone" /></a>
                    <p className="pra mb-xxl-4 mb-3">Our team is here to help you find the right mental health support for your needs.</p>
                    <a href="/book-appointment" className="numbs heading-font">Book Appointment</a>
                  </div>

                  <div className="details-common category-blog">
                    <h5 className="black d-flex align-items-center gap-2 mb-4 fw_700 visible-slowly-right">
                      <img src="/assets/img/element/cate-badge.png" alt="ele" /> Tags
                    </h5>
                    <ul className="tags">
                      {['Anxiety', 'Therapy', 'ADHD', 'Telehealth', 'Depression', 'Mental Health', 'CBT', 'Wellness'].map((tag) => (
                        <li key={tag}><span>{tag}</span></li>
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

export default BlogDetailsPage
