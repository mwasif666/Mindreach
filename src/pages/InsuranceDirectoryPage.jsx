import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import PageLayout from '../components/layout/PageLayout'
import InsuranceLogoMark from '../components/ui/InsuranceLogoMark'
import INSURANCE_LOGOS from '../data/insuranceLogos'

const PAGE_TITLE = 'Insurances | MindReach'
const BODY_CLASS = 'body-bg'

function InsuranceDirectoryPage() {
  return (
    <PageLayout title={PAGE_TITLE} bodyClass={BODY_CLASS}>
      <div>
        <section className="insurance-directory-hero">
          <div className="container">
            <div className="insurance-directory-hero__content">
              <div className="insurance-directory-hero__eyebrow">
                <span>Insurance Coverage</span>
              </div>
              <div className="insurance-directory-hero__copy">
                <h1>Insurances We Accept</h1>
                <p>
                  Review accepted insurance providers before booking. Final eligibility depends on
                  your member benefits, network, and referral requirements.
                </p>
              </div>
              <div className="insurance-directory-hero__meta" aria-label="Insurance coverage summary">
                <div className="insurance-directory-hero__meta-item">
                  <strong>100+</strong>
                  <span>Plans</span>
                </div>
                <div className="insurance-directory-hero__meta-item">
                  <strong>HIPAA</strong>
                  <span>Compliance</span>
                </div>
                <div className="insurance-directory-hero__meta-item">
                  <strong>Direct</strong>
                  <span>Online booking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="insurance-directory-section insurance-acceptance-section">
          <div className="container">
            <div className="section-title text-center insurance-directory-section__title">
              <span className="cmn-tag p1-bg heading-font">Accepted Coverage</span>
              <h2 className="black wow fadeInUp" data-wow-delay=".3s">
                Insurances we accept
              </h2>
              <p className="insurance-directory-section__subtitle">
                We partner with a wide range of insurances to make expert mental health care more
                accessible and affordable.
              </p>
            </div>

            <div className="insurance-acceptance__carousel">
              <button
                type="button"
                className="array-prev insurance-acceptance__nav-button"
                aria-label="Show previous insurance logos"
              >
                <FiChevronLeft aria-hidden="true" />
              </button>
              <div className="swiper insurance-acceptance__slider">
                <div className="swiper-wrapper">
                  {INSURANCE_LOGOS.map((logo) => (
                    <div key={logo.id} className="swiper-slide">
                      <div
                        className="insurance-acceptance__logo-card"
                        data-logo={logo.id}
                      >
                        <InsuranceLogoMark id={logo.id} name={logo.name} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                type="button"
                className="array-next insurance-acceptance__nav-button"
                aria-label="Show next insurance logos"
              >
                <FiChevronRight aria-hidden="true" />
              </button>
            </div>
            <div className="insurance-acceptance__pagination swiper-dot dot" />
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default InsuranceDirectoryPage
