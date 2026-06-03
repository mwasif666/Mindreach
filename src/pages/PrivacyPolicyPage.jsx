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
                <h3>1. Information We Collect</h3>
                <ul className="mindreach-service-detail__list flex-column gap-3">
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Personal Information:</strong> Name, email address, phone number, billing details, and other identifiers.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Technical Data:</strong> IP address, browser type, operating system, and access logs.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Usage Data:</strong> Information on how you interact with our website, products, and services.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Health Information:</strong> If applicable, details related to medical billing and healthcare services.</span>
                  </li>
                </ul>
              </div>

              <div className="privacy-policy-block">
                <h3>2. How We Use Your Information</h3>
                <ul className="mindreach-service-detail__list flex-column gap-3">
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Provide, operate, and improve our services.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Personalize user experiences and respond to inquiries.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Process payments and manage customer accounts.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Send marketing, promotions, and service-related communications (with consent).</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Ensure compliance with The Campaign Registry (TCR) and other legal regulations.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Facilitate medical billing services, including interactions with healthcare providers and insurance companies.</span>
                  </li>
                </ul>
              </div>

              <div className="privacy-policy-block">
                <h3>3. Data Sharing &amp; Compliance</h3>
                <p>We do not sell or share text messaging opt-in data with third parties or affiliates for marketing.</p>
                <p>Third-party services used (e.g., payment processors) follow industry standards to protect user data.</p>
                <p>All data sharing complies with applicable laws and regulations, including HIPAA.</p>
              </div>

              <div className="privacy-policy-block">
                <h3>4. SMS Communications</h3>
                <p>We may send appointment reminders, payment notifications, and other relevant information via SMS on behalf of healthcare providers.</p>
                <p>Consent for receiving SMS messages is obtained through our service agreements or interactions. You can opt out of receiving SMS messages at any time by replying STOP or UNSUBSCRIBE.</p>
              </div>

              <div className="privacy-policy-block">
                <h3>5. Data Security</h3>
                <p>We implement safeguards to protect personal information from unauthorized access, use, or disclosure.</p>
                <p>While we strive to protect your data, no method of transmission over the internet or electronic storage is 100% secure.</p>
              </div>

              <div className="privacy-policy-block">
                <h3>6. Changes to This Privacy Policy</h3>
                <p>We reserve the right to update this Privacy Policy. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
              </div>

              <div className="privacy-policy-block">
                <h2 className="black mb-3">Data Privacy</h2>
                <h3>1. Information We Collect</h3>
                <p><strong>a. Personal Information*</strong> - We collect various types of information to provide and improve our services, including:</p>
                <p><strong>b. Identifying Information:</strong></p>
                <ul className="mindreach-service-detail__list flex-column gap-3">
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Name</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span>Contact details (email addresses, phone numbers)</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Medical Credentialing and Billing Information:</strong> Any information related to medical credentialing and billing services that you provide to us.</span>
                  </li>
                </ul>
              </div>

              <div className="privacy-policy-block">
                <h3>2. How We Use Your Information</h3>
                <ul className="mindreach-service-detail__list flex-column gap-3">
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Providing Services:</strong> To facilitate medical billing and credentialing services as requested by you.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Communication:</strong> To respond to your inquiries, send updates, and provide information related to our services.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Improvement:</strong> To analyze usage patterns and improve the quality of our website and services.</span>
                  </li>
                </ul>
              </div>

              <div className="privacy-policy-block">
                <h3>3. Information Sharing &amp; Disclosure</h3>
                <p>We do not share your personal information with third parties. Your information is solely used for the provision of our medical credentialing services and communication with you.</p>
                <p>No mobile information will be shared with third parties/affiliates for marketing or promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
              </div>

              <div className="privacy-policy-block">
                <h3>4. Your Consent and Control</h3>
                <p>By providing your information, you consent to the collection, processing, and storage of your personal data as outlined in this Privacy Policy.</p>
                <ul className="mindreach-service-detail__list flex-column gap-3">
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Opt-Out:</strong> You may opt out of receiving promotional communications from us by contacting us directly.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-angles-right" />
                    <span><strong>Access and Correction:</strong> You may request access to and correction of your personal information by contacting us.</span>
                  </li>
                </ul>
              </div>

              <div className="privacy-policy-block">
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> info@mindreach.com</p>
                <p><strong>Phone:</strong> (979) 595 8975</p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default PrivacyPolicyPage;
