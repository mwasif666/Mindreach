import PageLayout from '../components/layout/PageLayout'
import INSURANCE_DIRECTORY from '../data/insuranceDirectory'

const PAGE_TITLE = 'Insurances | MindReach'
const BODY_CLASS = 'body-bg'

function InsuranceDirectoryCard({ state, summary, groups }) {
  const totalPlans = groups.reduce((total, group) => total + group.plans.length, 0)

  return (
    <article className="insurance-directory-card">
      <div className="insurance-directory-card__header">
        <span className="insurance-directory-card__eyebrow">Accepted Coverage</span>
        <div className="insurance-directory-card__title-row">
          <h2>{state}</h2>
          <span className="insurance-directory-card__count">{totalPlans} plans</span>
        </div>
        <p>{summary}</p>
      </div>

      <div className="insurance-directory-card__groups">
        {groups.map((group) => (
          <section key={`${state}-${group.letter}`} className="insurance-directory-group">
            <h3>{group.letter}</h3>
            <ul>
              {group.plans.map((plan) => (
                <li key={`${state}-${group.letter}-${plan}`}>{plan}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <a
        href="/book-appointment"
        className="common-btn box-style p2-bg insurance-directory-card__button d-inline-flex justify-content-center align-items-center fs18 fw-semibold white overflow-hidden rounded100"
      >
        Book Appointment
      </a>
    </article>
  )
}

function InsuranceDirectoryPage() {
  const totalPlans = INSURANCE_DIRECTORY.reduce(
    (overallTotal, state) =>
      overallTotal + state.groups.reduce((stateTotal, group) => stateTotal + group.plans.length, 0),
    0,
  )

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
                  Browse accepted plans by state before booking. Final eligibility depends on your
                  member benefits, network, and referral requirements.
                </p>
              </div>
              <div className="insurance-directory-hero__meta" aria-label="Insurance coverage summary">
                <div className="insurance-directory-hero__meta-item">
                  <strong>{INSURANCE_DIRECTORY.length}</strong>
                  <span>States listed</span>
                </div>
                <div className="insurance-directory-hero__meta-item">
                  <strong>{totalPlans}</strong>
                  <span>Plans shown</span>
                </div>
                <div className="insurance-directory-hero__meta-item">
                  <strong>Direct</strong>
                  <span>Online booking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="insurance-directory-section">
          <div className="container">
            <div className="section-title text-center insurance-directory-section__title">
              <span className="cmn-tag p1-bg heading-font">Accepted Coverage</span>
              <h2 className="black wow fadeInUp" data-wow-delay=".3s">
                Find your state and review the plans we commonly accept
              </h2>
              <p className="insurance-directory-section__subtitle">
                If you do not see your plan listed, contact us before scheduling and we can help
                confirm the right network details.
              </p>
            </div>

            <div className="insurance-directory-grid">
              {INSURANCE_DIRECTORY.map((entry) => (
                <InsuranceDirectoryCard
                  key={entry.state}
                  state={entry.state}
                  summary={entry.summary}
                  groups={entry.groups}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  )
}

export default InsuranceDirectoryPage
