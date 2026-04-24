import PageLayout from "../components/layout/PageLayout";

const PAGE_TITLE = "Privacy Policy | MindReach";
const BODY_CLASS = "body-bg";

const PRIVACY_SECTIONS = [
  {
    title: "Information We Collect",
    paragraphs: [
      "We may collect contact details, appointment requests, messages you submit through forms, and basic technical information such as browser type, device information, and pages visited.",
      "If you choose to share health-related information while requesting care, we use it only to respond to your request, support scheduling, and connect you with appropriate services.",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "We use information to respond to inquiries, schedule appointments, provide service information, improve the website, and communicate important updates about your request.",
      "We do not sell personal information. We only share information when needed to operate the website, provide requested services, comply with law, or protect our rights and users.",
    ],
  },
  {
    title: "Health Information",
    paragraphs: [
      "MindReach is designed to support access to mental health services. Please do not submit emergency medical information through the website. If you are experiencing a crisis or immediate danger, contact local emergency services right away.",
      "Any clinical or health information you provide is handled with care and used for the purpose for which it was submitted.",
    ],
  },
  {
    title: "Cookies And Analytics",
    paragraphs: [
      "Our website may use cookies or similar technologies to keep the site working, understand usage, improve performance, and support basic analytics.",
      "You can control cookies through your browser settings. Some website features may not work correctly if cookies are disabled.",
    ],
  },
  {
    title: "Third-Party Services",
    paragraphs: [
      "We may use trusted third-party tools for hosting, forms, scheduling, analytics, or communication. These providers may process information only as needed to support the services they provide to us.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We use reasonable administrative, technical, and organizational safeguards to protect information. No website or internet transmission is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Children",
    paragraphs: [
      "This website is not intended for children under 13. We do not knowingly collect personal information from children under 13 through this website.",
    ],
  },
  {
    title: "Your Choices",
    paragraphs: [
      "You may contact us to request access, correction, or deletion of personal information where applicable. You may also opt out of non-essential communications by contacting us.",
    ],
  },
  {
    title: "Changes To This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or how your information is handled, contact us at care@mindreachcare.com or +92 (300) 555-0100.",
    ],
  },
];

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
              <p>
                This Privacy Policy explains how MindReach collects, uses, and
                protects information submitted through this website. By using
                the website, you agree to the practices described below.
              </p>

              {PRIVACY_SECTIONS.map((section, index) => (
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
  );
}

export default PrivacyPolicyPage;
