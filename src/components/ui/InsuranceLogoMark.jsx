function InsuranceLogoSvg({ title, viewBox = '0 0 360 120', children }) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {children}
    </svg>
  )
}

function InsuranceLogoMark({ id, name }) {
  switch (id) {
    case 'medicaid':
      return (
        <InsuranceLogoSvg title={name}>
          <g fill="none" stroke="#86a2d2" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M46 67c16-11 28-30 34-52 19 25 36 41 55 49-15 19-35 34-59 43-12-9-21-20-30-40Z" opacity="0.85" />
            <path d="M26 62c12-9 22-22 28-39 14 18 28 30 43 37-11 14-27 25-44 32-11-8-18-17-27-30Z" opacity="0.6" />
          </g>
          <text x="115" y="71" fill="#6f8bc2" fontFamily="Georgia, serif" fontSize="44" fontStyle="italic">
            Medicaid
          </text>
        </InsuranceLogoSvg>
      )

    case 'cigna':
      return (
        <InsuranceLogoSvg title={name}>
          <g transform="translate(26 18)">
            <path d="M30 70c6-26 12-40 19-50" fill="none" stroke="#1c88c9" strokeWidth="6" strokeLinecap="round" />
            <path d="M33 70c5-14 11-25 17-34" fill="none" stroke="#1c88c9" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
            <circle cx="47" cy="10" r="7" fill="#8ccf45" />
            <circle cx="33" cy="18" r="6" fill="#6fcf55" />
            <circle cx="60" cy="18" r="6" fill="#8ed34d" />
            <circle cx="25" cy="32" r="6" fill="#22b573" />
            <circle cx="48" cy="29" r="7" fill="#90d34f" />
            <circle cx="69" cy="31" r="6" fill="#8ccf45" />
          </g>
          <text x="112" y="72" fill="#1693d1" fontFamily="Arial, sans-serif" fontSize="50" fontWeight="500">
            Cigna
          </text>
        </InsuranceLogoSvg>
      )

    case 'optum':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 320 120">
          <text x="18" y="73" fill="#ff7f2a" fontFamily="Arial, sans-serif" fontSize="58" fontWeight="700">
            Optum
          </text>
          <path d="M248 38l18 20-18 20" fill="none" stroke="#0d3f75" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </InsuranceLogoSvg>
      )

    case 'champva':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 280 120">
          <path d="M38 74l16-31 16 31-16 14-16-14Z" fill="#175d9d" />
          <path d="M54 36l5 9 10 1-8 7 2 10-9-5-9 5 2-10-8-7 10-1 5-9Z" fill="#f4b43a" />
          <text x="95" y="72" fill="#175d9d" fontFamily="Arial, sans-serif" fontSize="34" fontWeight="700" letterSpacing="1.5">
            CHAMPVA
          </text>
        </InsuranceLogoSvg>
      )

    case 'magellan':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 300 120">
          <circle cx="52" cy="58" r="17" fill="#f4a43a" />
          <circle cx="52" cy="58" r="9" fill="#fff" />
          <text x="88" y="70" fill="#1e3e73" fontFamily="Arial, sans-serif" fontSize="42" fontWeight="700">
            magellan
          </text>
        </InsuranceLogoSvg>
      )

    case 'tricare':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 300 120">
          <g transform="translate(24 30)" fill="none" stroke="#1a5f9d" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 42l18-26 18 26" />
            <path d="M20 42l10-15 10 15" opacity="0.75" />
          </g>
          <text x="92" y="71" fill="#1a5f9d" fontFamily="Arial, sans-serif" fontSize="44" fontWeight="700" letterSpacing="3">
            TRICARE
          </text>
        </InsuranceLogoSvg>
      )

    case 'umr':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 310 120">
          <g transform="translate(26 24)" fill="none" stroke="#1b5cab" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M0 4v42c0 17 12 29 28 29s28-12 28-29V4" />
            <path d="M24 4v42c0 8-6 14-14 14s-14-6-14-14" opacity="0.45" />
          </g>
          <text x="104" y="72" fill="#1b5cab" fontFamily="Arial, sans-serif" fontSize="54" fontWeight="700">
            umr
          </text>
        </InsuranceLogoSvg>
      )

    case 'ambetter':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 350 120">
          <path d="M38 69c10-12 18-27 22-46 16 20 31 33 46 39-13 17-30 30-50 39-9-7-14-17-18-32Z" fill="#f5b13d" />
          <text x="104" y="60" fill="#234e9d" fontFamily="Arial, sans-serif" fontSize="38" fontWeight="700">
            Ambetter
          </text>
          <text x="104" y="87" fill="#59a947" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="600">
            from Sunshine Health
          </text>
        </InsuranceLogoSvg>
      )

    case 'beacon':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 430 120">
          <g transform="translate(18 18)">
            <circle cx="42" cy="42" r="38" fill="none" stroke="#3ab3e5" strokeWidth="8" />
            <path d="M28 54l13-23 18 11-18 24Z" fill="#2e72b8" />
            <path d="M40 34h14v8H40Z" fill="#fff" opacity="0.9" />
          </g>
          <text x="112" y="62" fill="#111111" fontFamily="Arial, sans-serif" fontSize="54" fontWeight="700">
            beacon
          </text>
          <path d="M360 60l20-24 28 12-24 28Z" fill="#f1bf2b" />
          <path d="M345 60l16-16 16 14-15 17Z" fill="#7c3fb4" />
          <text x="112" y="89" fill="#9ca3af" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="500">
            health options
          </text>
        </InsuranceLogoSvg>
      )

    case 'emblem-health':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 360 120">
          <text x="18" y="72" fill="#6b2f8d" fontFamily="Arial, sans-serif" fontSize="54" fontWeight="700">
            EmblemHealth
          </text>
        </InsuranceLogoSvg>
      )

    case 'united-healthcare':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 420 120">
          <g transform="translate(18 18)" fill="none" stroke="#2457a6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 0v52c0 13 9 23 20 30 11-7 20-17 20-30V0" />
            <path d="M30 0v53" opacity="0.5" />
            <path d="M42 0v44" opacity="0.35" />
          </g>
          <text x="104" y="45" fill="#2457a6" fontFamily="Georgia, serif" fontSize="32" fontWeight="700">
            UnitedHealthcare
          </text>
          <text x="156" y="74" fill="#2457a6" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700">
            All Savers
          </text>
          <text x="126" y="98" fill="#2457a6" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="600">
            Alternate Funding
          </text>
        </InsuranceLogoSvg>
      )

    default:
      return (
        <InsuranceLogoSvg title={name}>
          <text x="18" y="72" fill="#111827" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="700">
            {name}
          </text>
        </InsuranceLogoSvg>
      )
  }
}

export default InsuranceLogoMark
