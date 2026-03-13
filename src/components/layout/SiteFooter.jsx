const FOOTER_PAGE_ITEMS = ['Home', 'Services', 'Portfolio']
const FOOTER_LINK_ITEMS = ['Terms & Condition', 'Privacy Policy', 'Contact Us', 'Terms Of Use']
const FOOTER_SOCIAL_ICONS = ['fab fa-facebook-f', 'fa-brands fa-linkedin-in', 'fab fa-instagram', 'fa-brands fa-x']
const FOOTER_CONTACT_ITEMS = [
  {
    iconClassName: 'fa-solid fa-location-dot',
    label: 'Address',
    value: '66 Broklyant,India',
  },
  {
    iconClassName: 'fa-solid fa-phone',
    label: 'Phone Number',
    value: '012 345 678 9101',
  },
  {
    iconClassName: 'fa-solid fa-envelope',
    label: 'Email',
    value: 'abcd@gmail.com',
  },
]

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
            <form
              className="homepage-footer-newsletter__form"
              onSubmit={(event) => event.preventDefault()}
            >
              <input type="email" placeholder="Enter your email to get started" aria-label="Enter your email to get started" />
              <button type="button" className="homepage-footer-newsletter__button">
                Book Appointment
                <img src="/assets/img/icon/arrow-right-white.png" alt="" aria-hidden="true" />
              </button>
            </form>
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
                    {FOOTER_PAGE_ITEMS.map((item) => (
                      <li key={item}>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                <div className="homepage-footer-column">
                  <h3>Link</h3>
                  <ul>
                    {FOOTER_LINK_ITEMS.map((item) => (
                      <li key={item}>
                        <span>{item}</span>
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
