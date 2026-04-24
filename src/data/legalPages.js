export const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Notice of Privacy Practices', href: '/notice-of-privacy-practices' },
  { label: 'Terms and Conditions', href: '/terms-and-conditions' },
  { label: 'Good Faith Estimate Notice', href: '/good-faith-estimate-notice' },
]

export const LEGAL_PAGE_CONFIGS = {
  noticeOfPrivacyPractices: {
    title: 'Notice of Privacy Practices',
    path: '/notice-of-privacy-practices',
    intro: [
      'This Notice of Privacy Practices describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.',
      'MindReach is committed to protecting your health information and explaining your privacy rights in clear language.',
    ],
    sections: [
      {
        title: 'Privacy Practices In Summary',
        paragraphs: [
          'Privacy rights include the right to get a copy of your paper or electronic medical record, correct your record, request confidential communication, ask us to limit information we share, receive a list of certain disclosures, and choose someone to act on your behalf.',
          'Some situations allow you to tell us how we may share information, including family involvement, disaster relief, or marketing communications.',
        ],
      },
      {
        title: 'Our Uses And Disclosures Of Your Information',
        paragraphs: [
          'We may use and disclose your information to treat you, run our practice, bill for services, improve care, contact you, comply with the law, respond to health oversight agencies, address lawsuits, and support public health and safety activities.',
          'We will ask for your written permission before using your information for purposes not described in this notice when permission is required by law.',
        ],
      },
      {
        title: 'Your Rights',
        paragraphs: [
          'You may ask to see or get an electronic or paper copy of your medical record. You may ask us to correct health information you think is incorrect or incomplete.',
          'You may request confidential communications, ask us to limit what we use or share, request a list of disclosures, receive a paper copy of this notice, and file a complaint if you believe your rights have been violated.',
        ],
      },
      {
        title: 'Your Choices',
        paragraphs: [
          'You can tell us your choices about sharing information with family, close friends, or others involved in your care. You can also tell us if you do not want fundraising or marketing communications where applicable.',
        ],
      },
      {
        title: 'Our Responsibilities',
        paragraphs: [
          'We are required by law to maintain the privacy and security of protected health information. We will let you know promptly if a breach occurs that may have compromised your information.',
          'We must follow the duties and privacy practices described in this notice and give you a copy of it. We will not use or share information other than as described unless you tell us we can in writing.',
        ],
      },
      {
        title: 'About This Notice',
        paragraphs: [
          'This notice is effective as of January 2026. We may change the terms of this notice, and changes will apply to all information we have about you. The updated notice will be available upon request and on this website.',
        ],
      },
    ],
  },
  termsAndConditions: {
    title: 'Terms And Conditions',
    path: '/terms-and-conditions',
    intro: [
      'These Terms and Conditions govern your access to and use of this website. By using the website, you agree to these terms.',
      'The website is provided for informational and educational purposes and is not a substitute for professional medical advice, diagnosis, or treatment.',
    ],
    sections: [
      {
        title: 'Use Of This Website',
        paragraphs: [
          'You agree to use this website only for lawful purposes and in a way that does not interfere with the operation, security, or availability of the website.',
          'You may not attempt to gain unauthorized access to any portion of the website, related systems, or data.',
        ],
      },
      {
        title: 'No Medical Advice',
        paragraphs: [
          'Information on this website is general information only. It should not be relied upon to treat a health condition or replace advice from a licensed healthcare professional.',
          'If you are experiencing a medical or mental health emergency, call local emergency services immediately.',
        ],
      },
      {
        title: 'Appointments And Communications',
        paragraphs: [
          'Submitting a form or appointment request does not guarantee availability, create a provider-patient relationship, or confirm treatment until accepted by MindReach or a clinician.',
          'Website communications may not be reviewed immediately and should not be used for urgent or emergency needs.',
        ],
      },
      {
        title: 'Intellectual Property',
        paragraphs: [
          'Website content, text, images, design, graphics, logos, and related materials are owned by or licensed to MindReach and may not be copied, distributed, or reused without permission.',
        ],
      },
      {
        title: 'Third-Party Links',
        paragraphs: [
          'This website may link to third-party websites or services. MindReach is not responsible for third-party content, policies, or practices.',
        ],
      },
      {
        title: 'Disclaimer And Limitation Of Liability',
        paragraphs: [
          'The website is provided on an as-is and as-available basis. To the fullest extent permitted by law, MindReach disclaims warranties and is not liable for damages arising from website use.',
        ],
      },
      {
        title: 'Changes To These Terms',
        paragraphs: [
          'We may update these Terms and Conditions from time to time. Continued use of the website after updates means you accept the revised terms.',
        ],
      },
      {
        title: 'Contact',
        paragraphs: [
          'Questions about these Terms and Conditions may be sent to care@mindreachcare.com.',
        ],
      },
    ],
  },
  goodFaithEstimateNotice: {
    title: 'Good Faith Estimate Notice',
    path: '/good-faith-estimate-notice',
    intro: [
      'You have the right to receive a Good Faith Estimate explaining how much your medical care will cost.',
      'Under the law, healthcare providers need to give patients who do not have insurance or who are self-pay an estimate of the bill for medical items and services, including psychiatry services.',
    ],
    sections: [
      {
        title: 'Your Right To An Estimate',
        paragraphs: [
          'You have the right to receive a Good Faith Estimate for the total expected cost of any non-emergency items or services, including psychiatry services.',
          'Ensure your healthcare provider gives you a Good Faith Estimate in writing at least one business day before your services begin. You can also ask your healthcare provider and any other provider you choose for a Good Faith Estimate before you schedule an item or service.',
        ],
      },
      {
        title: 'If Your Bill Is Higher Than Expected',
        paragraphs: [
          'If you receive a bill that is at least $400 more than your Good Faith Estimate, you may dispute the bill.',
          'Make sure to save a copy or picture of your Good Faith Estimate.',
        ],
      },
      {
        title: 'More Information',
        paragraphs: [
          'For questions or more information about your right to a Good Faith Estimate, visit www.cms.gov/nosurprises or call the U.S. Department of Health and Human Services at 1-800-985-3059.',
        ],
      },
    ],
  },
}
