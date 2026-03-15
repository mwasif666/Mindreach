const SITE_NAV_ITEMS = [
  { label: 'Home', href: '/', matchPaths: ['/', '/home-1', '/home-2', '/home-3'], matchPrefixes: [] },
  { label: 'Services', href: '/service', matchPaths: ['/service', '/service-details'], matchPrefixes: ['/service-details'] },
  { label: 'About Us', href: '/about', matchPaths: ['/about'], matchPrefixes: [], disabledInHeader: true },
  { label: 'Doctors', href: '/doctor', matchPaths: ['/doctor', '/doctor-details'], matchPrefixes: ['/doctor-details'] },
  { label: 'Contact Us', href: '/contact', matchPaths: ['/contact'], matchPrefixes: [] },
]

export default SITE_NAV_ITEMS
