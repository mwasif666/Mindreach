import { useLocation } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import BLOGS from '../data/blogs'

const BODY_CLASS = 'body-bg'

const ALL_CATEGORIES = [...new Set(BLOGS.map((b) => b.category))]

function BlogPage() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const activeCategory = params.get('category') || ''

  const filtered = activeCategory
    ? BLOGS.filter((b) => b.category === activeCategory)
    : BLOGS

  const pageTitle = activeCategory
    ? `${activeCategory} Articles | MindReach Blog`
    : 'Blog | MindReach Mental Health'

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
                              <li><a href="/doctor">Doctors</a></li>
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

        {/* Breadcrumb */}
        <section className="breadcrumb-section position-relative fix">
          <div className="container">
            <div className="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
              <h2 className="black">{activeCategory ? `${activeCategory} Articles` : 'Blog'}</h2>
              <ul className="d-flex align-items-center gap-3">
                <li><a href="/">Home</a></li>
                <li>/</li>
                <li><a href="/blog">Blog</a></li>
                {activeCategory && (
                  <>
                    <li>/</li>
                    <li>{activeCategory}</li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <img src="/assets/img/about/breadcrumnd-shap.png" alt="img" className="bread-ele" />
        </section>

        {/* Blog Cards — same layout as homepage */}
        <section className="blog-section2 section-padding cmn-bg">
          <div className="container">


            {filtered.length === 0 ? (
              <div className="text-center py-5">
                <p className="pra fs-five mb-4">No articles found in this category.</p>
                <a href="/blog" className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-2 fs18 fw-semibold black overflow-hidden white-bg rounded100">
                  View All Articles
                  <img src="/assets/img/icon/arrow-right-black.png" alt="" />
                </a>
              </div>
            ) : (
              <div className="row g-4">
                {filtered.map((blog, i) => (
                  <div
                    key={blog.id}
                    className="col-lg-4 col-md-6 wow fadeInUp"
                    data-wow-delay={`${0.3 + i * 0.2}s`}
                  >
                    <div className="blog-items3">
                      <div className="thumb rounded-4 position-relative mb-3">
                        <img
                          src={blog.image}
                          alt={blog.imageAlt}
                          className="rounded-4 w-100"
                          style={{ objectFit: 'cover', height: '240px' }}
                        />
                        <div className="d-flex gap-1 align-items-center blog-date">
                          <div className="icon d-center">
                            <i className="fa-solid fa-calendar-days" />
                          </div>
                          <span className="cont">{blog.date}</span>
                        </div>
                      </div>
                      <div className="content">
                        <h3 className="mb-3">
                          <a href={blog.detailsHref} className="black">{blog.title}</a>
                        </h3>
                        <div className="admin-area d-flex align-items-center gap-xl-4 gap-3 mb-xl-3 mb-3 border-bottom pb-3">
                          <div className="d-flex align-items-center gap-1 fs-eight pra">
                            <i className="fa-solid fa-user n900-clr" /> {blog.author}
                          </div>
                          <div className="d-flex align-items-center gap-1 fs-eight pra">
                            <i className="fa-regular fa-folder-open n900-clr" />
                            <a href={`/blog?category=${encodeURIComponent(blog.category)}`} className="pra">{blog.category}</a>
                          </div>
                        </div>
                        <a
                          href={blog.detailsHref}
                          className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden bg-color rounded100"
                        >
                          Read More
                          <img src="/assets/img/icon/arrow-right-black.png" alt="" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default BlogPage
