import PageLayout from "../components/layout/PageLayout";

const PAGE_TITLE = "Privacy Policy | MindReach";
const BODY_CLASS = "body-bg";

function PrivacyPolicyPage() {
  return (
    <PageLayout title={PAGE_TITLE} bodyClass={BODY_CLASS}>
      <div>
        <section className="breadcrumb-section position-relative fix privacy-policy-breadcrumb-section">
          <div className="container">
            <div className="bread-content px-3 d-flex flex-wrap gap-3 align-items-center justify-content-md-between justify-content-center">
              <h2 className="black">Privacy Policy</h2>
              <ul className="d-flex align-items-center gap-3">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>/</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <img
            src="/assets/img/about/breadcrumnd-shap.png"
            alt=""
            aria-hidden="true"
            className="bread-ele"
          />
        </section>

        <section className="privacy-policy-section section-padding fix">
          <div className="container">
            <div className="privacy-policy-content">

              <div className="privacy-policy-block">
                <h2 className="black mb-3">Privacy at MindReach</h2>
                <p>
                  At MindReach, protecting your personal and health information is a core part of our mission to deliver safe, ethical, and effective mental health care. We understand the sensitive nature of mental health support and are committed to handling your data with the utmost care, transparency, and confidentiality.
                </p>
              </div>

              <div className="privacy-policy-block">
                <h3>Our Commitment to Your Privacy</h3>
                <ul className="mindreach-service-detail__list flex-column gap-3">
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>HIPAA-Compliant Practices:</strong> All our services and systems are fully compliant with the Health Insurance Portability and Accountability Act (HIPAA). Your personal health information (PHI) is protected through secure technologies and strict ethical handling.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Secure Telehealth Platform:</strong> All sessions are conducted through encrypted, secure platforms designed specifically for healthcare.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Data Minimization:</strong> We only collect the information necessary to provide care. We never sell your data or share it with third parties for marketing.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Transparent Communication:</strong> You have the right to review, request, or correct your data, and will always be informed if your information is used beyond your care (with your explicit consent).</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Professional Conduct:</strong> Our staff are trained in privacy standards and committed to maintaining confidentiality.</span>
                  </li>
                </ul>
              </div>

              <div className="privacy-policy-block">
                <h3>Information We Collect</h3>
                <p>To provide you with high-quality care and comply with healthcare regulations, MindReach may collect the following types of information:</p>
                <ul className="mindreach-service-detail__list flex-column gap-3">
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Personal Identification:</strong> Name, date of birth, contact information, and insurance details</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Health Information:</strong> Medical history, mental health history, symptoms, medications, and treatment records</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Session Data:</strong> Notes from therapy or psychiatry sessions, appointment history, and communication logs</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Usage Data:</strong> Website usage patterns, IP addresses, and device information (used only for platform performance and security monitoring)</span>
                  </li>
                </ul>
                <p className="mt-3">We only collect what is necessary to provide safe, effective, and personalized care.</p>
              </div>

              <div className="privacy-policy-block">
                <h3>How We Use Your Information</h3>
                <p>MindReach uses your information solely for the following purposes:</p>
                <ul className="mindreach-service-detail__list flex-column gap-3">
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Delivering mental health care services</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Communicating with you about appointments, care plans, and support</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Coordinating care across therapists, psychiatrists, or primary care (with your consent)</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Insurance verification and claims processing</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Internal quality improvement and training (with data de-identified when applicable)</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Responding to your inquiries or feedback</span>
                  </li>
                </ul>
                <p className="mt-3">We do not use your data for advertising, sell it to third parties, or allow any unauthorized access.</p>
              </div>

              <div className="privacy-policy-block">
                <h3>How We Protect Your Data</h3>
                <p>MindReach implements multiple layers of data protection to ensure your privacy:</p>
                <ul className="mindreach-service-detail__list flex-column gap-3">
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>End-to-End Encryption:</strong> All sessions and data transfers are encrypted using industry-leading protocols</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Secure Storage:</strong> Your information is stored in HIPAA-compliant systems with role-based access controls</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Access Restrictions:</strong> Only authorized personnel involved in your care can access your records</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Regular Audits:</strong> We conduct periodic privacy audits and security assessments</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Staff Training:</strong> All staff complete annual privacy and security training, with strict policies on data handling</span>
                  </li>
                </ul>
              </div>

              <div className="privacy-policy-block">
                <h3>Your Rights</h3>
                <p>You have the right to:</p>
                <ul className="mindreach-service-detail__list flex-column gap-3">
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Know how your information is used</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Access or request a copy of your health records</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Request corrections or updates</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Withdraw consent for non-care-related use</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>File a complaint without risk of retaliation</span>
                  </li>
                </ul>
              </div>

              <div className="privacy-policy-block">
                <h3>Contact Us</h3>
                <p>If you have any questions, concerns, or requests related to your privacy at MindReach, please contact:</p>
                <ul className="mindreach-service-detail__list flex-column gap-3">
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Email:</strong> care@mindreachcare.com</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Phone:</strong> +1 (603) 555-0123</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Mail:</strong> MindReach Behavioral Health, 66 Brooklyn, India</span>
                  </li>
                </ul>
              </div>

              <div className="text-center mt-5 pt-2">
                <p className="pra mb-3">Ready to take the first step toward better mental health? Book your appointment today.</p>
                <a
                  href="/contact"
                  className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold black overflow-hidden p1-bg rounded100"
                >
                  Book Appointment
                  <img src="/assets/img/icon/arrow-right-black.png" alt="" aria-hidden="true" />
                </a>
              </div>

            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default PrivacyPolicyPage;
