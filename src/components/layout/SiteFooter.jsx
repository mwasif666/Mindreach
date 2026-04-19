import { FOOTER_CONTACT_ITEMS } from '../../data/contactDetails'
import SITE_NAV_ITEMS from '../../data/navigationLinks'

const FOOTER_SOCIAL_ICONS = ['fab fa-facebook-f', 'fa-brands fa-linkedin-in', 'fab fa-instagram', 'fa-brands fa-x']
const FOOTER_PRIMARY_NAV_ITEMS = SITE_NAV_ITEMS.slice(0, 3)
const FOOTER_SECONDARY_NAV_ITEMS = SITE_NAV_ITEMS.slice(3)

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
            <div className="homepage-footer-newsletter__cta">
              <a href="/contact" className="homepage-footer-newsletter__button">
                Book Appointment
                <img src="/assets/img/icon/arrow-right-white.png" alt="" aria-hidden="true" />
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
                  <div className="homepage-footer-socials" aria-label="MindReach social media placeholders">
                    {FOOTER_SOCIAL_ICONS.map((iconClassName) => (
                      <span key={iconClassName} className="homepage-footer-socials__icon">
                        <i className={iconClassName} />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="homepage-footer-column">
                  <h3>Page</h3>
                  <ul>
                    {FOOTER_PRIMARY_NAV_ITEMS.map((item) => (
                      <li key={item.href}>
                        <a href={item.href}>{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <div className="homepage-footer-column">
                  <h3>Link</h3>
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
                  <h3>Contact</h3>
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
