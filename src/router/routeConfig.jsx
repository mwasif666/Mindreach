import AboutPage from '../pages/AboutPage'
import BlogDetailsPage from '../pages/BlogDetailsPage'
import BlogPage from '../pages/BlogPage'
import ContactPage from '../pages/ContactPage'
import DoctorDetailsPage from '../pages/DoctorDetailsPage'
import DoctorPage from '../pages/DoctorPage'
import HomePage from '../pages/HomePage'
import HomeThreePage from '../pages/HomeThreePage'
import HomeTwoPage from '../pages/HomeTwoPage'
import PricingPage from '../pages/PricingPage'
import ProjectDetailsPage from '../pages/ProjectDetailsPage'
import ProjectPage from '../pages/ProjectPage'
import ServiceDetailsPage from '../pages/ServiceDetailsPage'
import ServicePage from '../pages/ServicePage'

export const routeConfig = [
  { path: '/', element: <HomeThreePage /> },
  { path: '/home-1', element: <HomePage /> },
  { path: '/home-2', element: <HomeTwoPage /> },
  { path: '/home-3', element: <HomeThreePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/service', element: <ServicePage /> },
  { path: '/service-details', element: <ServiceDetailsPage /> },
  { path: '/project', element: <ProjectPage /> },
  { path: '/project-details', element: <ProjectDetailsPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/blog-details', element: <BlogDetailsPage /> },
  { path: '/doctor', element: <DoctorPage /> },
  { path: '/doctor-details', element: <DoctorDetailsPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/contact', element: <ContactPage /> },
]
