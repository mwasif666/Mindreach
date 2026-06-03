import { FOOTER_CONTACT_ITEMS } from '../../data/contactDetails'
import { LEGAL_LINKS } from '../../data/legalPages'
import SITE_NAV_ITEMS from '../../data/navigationLinks'

const FOOTER_SOCIAL_LINKS = [
  { iconClassName: 'fab fa-facebook-f', label: 'Facebook', href: '#' },
  {
    iconClassName: 'fa-brands fa-linkedin-in',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/mindreachhealth/',
  },
  { iconClassName: 'fab fa-instagram', label: 'Instagram', href: '#' },
]
const FOOTER_PRIMARY_NAV_ITEMS = SITE_NAV_ITEMS
const FOOTER_ADDITIONAL_NAV_ITEMS = [
  { label: 'Blogs', href: '/blog' },
  { label: 'Insurance', href: '/insurances' },
]
const FOOTER_SECONDARY_NAV_ITEMS = LEGAL_LINKS

function SiteFooter() {
  return (
    <div className="body-bg2">
      <footer className="homepage-footer-shell">
        <div className="container">
          <div className="homepage-footer-newsletter">
            <h2 className="homepage-footer-newsletter__title">
              Ready To Start Your Care
              <br />
              Book Your <span className="homepage-footer-newsletter__highlight">Appointment
                <img src="/assets/img/element/title-badge1.png" alt="" aria-hidden="true" />
              </span>
            </h2>
            <p className="homepage-footer-newsletter__lead">
              Take the first step toward a healthier and calmer mind.
            </p>
            <div className="homepage-footer-newsletter__cta d-flex flex-wrap justify-content-center align-items-center gap-3">
              <a href="/book-appointment" className="homepage-footer-newsletter__button">
                Book Appointment
                <img src="/assets/img/icon/arrow-right-white.png" alt="" aria-hidden="true" />
              </a>
              <a href="tel:+19795958975" className="hero-call-pill d-inline-flex align-items-center gap-2" style={{ borderColor: '#fff' }}>
                <span className="hero-call-pill__icon d-center rounded-circle" style={{ borderColor: '#fff', color: '#fff' }}>
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                </span>
                <span className="d-flex flex-column">
                  <span className="hero-call-pill__label" style={{ color: 'rgba(255,255,255,0.7)' }}>Call Now</span>
                  <span className="hero-call-pill__number fw_600" style={{ color: '#fff' }}>(979) 595 8975</span>
                </span>
              </a>
            </div>
          </div>
          <div className="homepage-footer-card">
            <div className="row g-4">
              <div className="col-xl-4 col-lg-5">
                <div className="homepage-footer-brand">
                  <a href="/" className="homepage-footer-brand__logo">
                    <img src="/assets/img/logo/logo-white.svg" alt="MindReach logo" />
                  </a>
                  <p>
                    Mental health support is an essential part of daily well-being, offering care, guidance,
                    and treatment for a range of emotional health needs.
                  </p>
                  <div className="homepage-footer-socials" aria-label="MindReach social media">
                    {FOOTER_SOCIAL_LINKS.map(({ iconClassName, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="homepage-footer-socials__icon"
                        aria-label={label}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        <i className={iconClassName} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="homepage-footer-column">
                  <ul>
                    {FOOTER_PRIMARY_NAV_ITEMS.map((item) => (
                      <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                    {FOOTER_ADDITIONAL_NAV_ITEMS.map((item) => (
                      <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <div className="homepage-footer-column">
                  <ul>
                    {FOOTER_SECONDARY_NAV_ITEMS.map((item) => (
                      <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12 col-md-4">
                <div className="homepage-footer-column homepage-footer-contact">
                  <ul>
                    {FOOTER_CONTACT_ITEMS.map(({ iconClassName, label, value }) => (
                      <li key={label} className="homepage-footer-contact__item">
                        <span className="homepage-footer-contact__icon">
                          <i className={iconClassName} />
                        </span>
                        <div>
                          <small>{label}</small>
                          <span>{value}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteFooter
