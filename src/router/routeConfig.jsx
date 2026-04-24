import AboutPage from '../pages/AboutPage'
import BookAppointmentPage from '../pages/BookAppointmentPage'
import BlogDetailsPage from '../pages/BlogDetailsPage'
import BlogPage from '../pages/BlogPage'
import ContactPage from '../pages/ContactPage'
import DoctorDetailsPage from '../pages/DoctorDetailsPage'
import DoctorPage from '../pages/DoctorPage'
import HomePage from '../pages/HomePage'
import HomeThreePage from '../pages/HomeThreePage'
import HomeTwoPage from '../pages/HomeTwoPage'
import InsuranceDirectoryPage from '../pages/InsuranceDirectoryPage'
import LegalPage from '../pages/LegalPage'
import PricingPage from '../pages/PricingPage'
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage'
import ServiceDetailsPage from '../pages/ServiceDetailsPage'
import ServicePage from '../pages/ServicePage'
import { LEGAL_PAGE_CONFIGS } from '../data/legalPages'

export const routeConfig = [
  { path: '/', element: <HomeThreePage /> },
  { path: '/home-1', element: <HomePage /> },
  { path: '/home-2', element: <HomeTwoPage /> },
  { path: '/home-3', element: <HomeThreePage /> },
  { path: '/insurances', element: <InsuranceDirectoryPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/service', element: <ServicePage /> },
  { path: '/service-details', element: <ServiceDetailsPage /> },
  { path: '/service-details/:serviceId', element: <ServiceDetailsPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/blog-details', element: <BlogDetailsPage /> },
  { path: '/book-appointment', element: <BookAppointmentPage /> },
  { path: '/doctor', element: <DoctorPage /> },
  { path: '/doctor-details', element: <DoctorDetailsPage /> },
  { path: '/doctor-details/:doctorId', element: <DoctorDetailsPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
  {
    path: LEGAL_PAGE_CONFIGS.noticeOfPrivacyPractices.path,
    element: <LegalPage config={LEGAL_PAGE_CONFIGS.noticeOfPrivacyPractices} />,
  },
  {
    path: LEGAL_PAGE_CONFIGS.termsAndConditions.path,
    element: <LegalPage config={LEGAL_PAGE_CONFIGS.termsAndConditions} />,
  },
  {
    path: LEGAL_PAGE_CONFIGS.goodFaithEstimateNotice.path,
    element: <LegalPage config={LEGAL_PAGE_CONFIGS.goodFaithEstimateNotice} />,
  },
  { path: '/contact', element: <ContactPage /> },
]
