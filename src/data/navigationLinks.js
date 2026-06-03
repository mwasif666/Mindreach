import BLOGS from "./blogs";
import MENTAL_HEALTH_SERVICES from "./mentalHealthServices";

const SERVICE_NAV_CHILDREN = MENTAL_HEALTH_SERVICES.map((service) => ({
  label: service.title,
  href: service.detailsHref,
  matchPaths: [service.detailsHref],
  matchPrefixes: [],
}));

const BLOG_NAV_CHILDREN = [
  {
    label: "All Articles",
    href: "/blog",
    matchPaths: ["/blog"],
    matchPrefixes: [],
  },
  ...BLOGS.map((blog) => ({
    label: blog.title,
    href: blog.detailsHref,
    matchPaths: [blog.detailsHref],
    matchPrefixes: [],
  })),
];

const SITE_NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    matchPaths: ["/", "/home-1", "/home-2", "/home-3"],
    matchPrefixes: [],
  },
  {
    label: "Services",
    href: "/service",
    matchPaths: ["/service", "/service-details"],
    matchPrefixes: ["/service-details"],
    children: SERVICE_NAV_CHILDREN,
  },
  {
    label: "About Us",
    href: "/about",
    matchPaths: ["/about"],
    matchPrefixes: [],
  },
  // {
  //   label: 'Blog',
  //   href: '/blog',
  //   matchPaths: ['/blog'],
  //   matchPrefixes: ['/blog-details'],
  //   children: BLOG_NAV_CHILDREN,
  // },
  {
    label: "Our Providers",
    href: "/provider",
    matchPaths: ["/provider", "/doctor", "/doctor-details", "/book-appointment"],
    matchPrefixes: ["/doctor-details"],
  },
  {
    label: "Contact Us",
    href: "/contact",
    matchPaths: ["/contact"],
    matchPrefixes: [],
  },
];

export default SITE_NAV_ITEMS;
