import PageLayout from '../components/layout/PageLayout'

const BODY_CLASS = 'body-bg'

function LegalPage({ config }) {
  return (
    <PageLayout title={`${config.title} | MindReach`} bodyClass={BODY_CLASS}>
      <div>
        <section className="breadcrumb-section position-relative fix legal-breadcrumb-section">
          <div className="container">
            <div className="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
              <h2 className="black">{config.title}</h2>
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>/</li>
                <li>{config.title}</li>
              </ul>
            </div>
          </div>
          <img src="/assets/img/about/breadcrumnd-shap.png" alt="" aria-hidden="true" className="bread-ele" />
        </section>

        <section className="privacy-policy-section section-padding fix">
          <div className="container">
            <div className="privacy-policy-content">
              {config.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {config.sections.map((section, index) => (
                <section key={section.title} className="privacy-policy-block">
                  <h3>
                    {index + 1}. {section.title}
                  </h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default LegalPage
