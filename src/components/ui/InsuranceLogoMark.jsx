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

    case 'aetna':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 300 120">
          {/* Purple heart */}
          <path
            d="M38 38 C38 28 48 22 56 30 C64 22 74 28 74 38 C74 50 56 68 56 68 C56 68 38 50 38 38Z"
            fill="#6b1f7c"
          />
          <text x="88" y="72" fill="#6b1f7c" fontFamily="Arial, sans-serif" fontSize="46" fontWeight="700">
            aetna
          </text>
          <text x="248" y="46" fill="#6b1f7c" fontFamily="Arial, sans-serif" fontSize="20">™</text>
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

    case 'medicare':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 340 120">
          {/* HHS eagle silhouette (simplified) */}
          <g transform="translate(14 10)" fill="#1a2f6e">
            <ellipse cx="38" cy="52" rx="18" ry="26" opacity="0.15" />
            <path d="M20 55 Q22 30 38 22 Q54 30 56 55 Q46 70 38 76 Q30 70 20 55Z" opacity="0.18" />
            <circle cx="38" cy="30" r="9" opacity="0.25" />
            {/* wings */}
            <path d="M4 44 Q18 36 30 42" fill="none" stroke="#1a2f6e" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M72 44 Q58 36 46 42" fill="none" stroke="#1a2f6e" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            {/* circle outline */}
            <circle cx="38" cy="50" r="36" fill="none" stroke="#1a2f6e" strokeWidth="2.5" opacity="0.35" />
          </g>
          <text x="106" y="72" fill="#1a2f6e" fontFamily="Georgia, serif" fontSize="48" fontWeight="700">
            Medicare
          </text>
        </InsuranceLogoSvg>
      )

    case 'medicaid':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 340 120">
          <g transform="translate(14 10)" fill="#1a2f6e">
            <ellipse cx="38" cy="52" rx="18" ry="26" opacity="0.15" />
            <path d="M20 55 Q22 30 38 22 Q54 30 56 55 Q46 70 38 76 Q30 70 20 55Z" opacity="0.18" />
            <circle cx="38" cy="30" r="9" opacity="0.25" />
            <path d="M4 44 Q18 36 30 42" fill="none" stroke="#1a2f6e" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <path d="M72 44 Q58 36 46 42" fill="none" stroke="#1a2f6e" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
            <circle cx="38" cy="50" r="36" fill="none" stroke="#1a2f6e" strokeWidth="2.5" opacity="0.35" />
          </g>
          <text x="106" y="72" fill="#1a2f6e" fontFamily="Georgia, serif" fontSize="48" fontWeight="700">
            Medicaid
          </text>
        </InsuranceLogoSvg>
      )

    case 'united-healthcare':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 380 120">
          {/* Shield/U shape */}
          <g transform="translate(14 14)" fill="none" stroke="#2457a6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 0v52c0 13 9 23 20 30 11-7 20-17 20-30V0" />
            <path d="M30 0v53" opacity="0.5" />
            <path d="M42 0v44" opacity="0.35" />
          </g>
          <text x="100" y="52" fill="#2457a6" fontFamily="Georgia, serif" fontSize="30" fontWeight="700">
            UnitedHealthcare
          </text>
          <text x="100" y="82" fill="#2457a6" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="500">
            ®
          </text>
        </InsuranceLogoSvg>
      )

    case 'tricare':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 300 120">
          {/* American flag stripes */}
          <g transform="translate(14 26)">
            <rect x="0" y="0"  width="64" height="10" fill="#c8102e" rx="1" />
            <rect x="0" y="14" width="64" height="10" fill="#c8102e" rx="1" opacity="0.75" />
            <rect x="0" y="28" width="64" height="10" fill="#c8102e" rx="1" opacity="0.5" />
            {/* stars */}
            <text x="4" y="10" fill="#002868" fontFamily="Arial" fontSize="18" fontWeight="900">★★★</text>
          </g>
          <text x="96" y="71" fill="#002868" fontFamily="Arial, sans-serif" fontSize="44" fontWeight="700" letterSpacing="2">
            TRICARE
          </text>
          <text x="96" y="93" fill="#c8102e" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="600" letterSpacing="1">
            ®
          </text>
        </InsuranceLogoSvg>
      )

    case 'medicare-railroad':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 340 120">
          {/* Blue star */}
          <text x="14" y="72" fill="#003087" fontFamily="Arial" fontSize="64" fontWeight="900">★</text>
          <text x="84" y="58" fill="#003087" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="700">
            Medicare
          </text>
          <text x="84" y="88" fill="#c8102e" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" letterSpacing="1">
            RAILROAD
          </text>
        </InsuranceLogoSvg>
      )

    case 'sana':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 260 120">
          <text x="18" y="78" fill="#111111" fontFamily="Arial Black, sans-serif" fontSize="58" fontWeight="900">
            sa
          </text>
          <circle cx="146" cy="62" r="14" fill="#f5a623" />
          <text x="162" y="78" fill="#111111" fontFamily="Arial Black, sans-serif" fontSize="58" fontWeight="900">
            na
          </text>
        </InsuranceLogoSvg>
      )

    case 'oscar':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 280 120">
          <text x="18" y="78" fill="#0066ff" fontFamily="Arial Black, sans-serif" fontSize="62" fontWeight="900">
            oscar
          </text>
        </InsuranceLogoSvg>
      )

    case 'curative':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 310 120">
          {/* Blue asterisk / snowflake */}
          <g transform="translate(54 60)" stroke="#00a8e8" strokeWidth="7" strokeLinecap="round">
            <line x1="0" y1="-34" x2="0"  y2="34" />
            <line x1="-34" y1="0"  x2="34" y2="0" />
            <line x1="-24" y1="-24" x2="24" y2="24" />
            <line x1="24"  y1="-24" x2="-24" y2="24" />
          </g>
          <text x="104" y="72" fill="#111111" fontFamily="Arial, sans-serif" fontSize="44" fontWeight="700">
            curative
          </text>
        </InsuranceLogoSvg>
      )

    case 'bcbs-texas':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 380 120">
          {/* Blue cross */}
          <rect x="14" y="34" width="16" height="52" fill="#00a0d1" rx="2" />
          <rect x="2"  y="46" width="40" height="16" fill="#00a0d1" rx="2" />
          {/* Blue shield with caduceus hint */}
          <path d="M52 28 L72 28 L72 64 Q72 80 62 88 Q52 80 52 64Z" fill="#00a0d1" />
          <text x="52" y="34" fill="#fff" fontFamily="Arial" fontSize="10" fontWeight="700" textAnchor="middle">⚕</text>
          <text x="84" y="52" fill="#003087" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700">
            BlueCross BlueShield
          </text>
          <text x="84" y="78" fill="#003087" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="500">
            of Texas
          </text>
        </InsuranceLogoSvg>
      )

    case 'multiplan':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 320 120">
          {/* Colorful people figures */}
          <circle cx="24" cy="38" r="9"  fill="#4caf50" />
          <path d="M14 56 Q24 48 34 56 L34 80 L14 80Z" fill="#4caf50" />
          <circle cx="48" cy="32" r="9"  fill="#ff9800" />
          <path d="M38 50 Q48 42 58 50 L58 80 L38 80Z" fill="#ff9800" />
          <circle cx="72" cy="38" r="9"  fill="#2196f3" />
          <path d="M62 56 Q72 48 82 56 L82 80 L62 80Z" fill="#2196f3" />
          <text x="96" y="66" fill="#333333" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="700">
            Multi
          </text>
          <text x="200" y="66" fill="#888888" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="400">
            Plan
          </text>
          <text x="284" y="66" fill="#888888" fontFamily="Arial, sans-serif" fontSize="18">®</text>
        </InsuranceLogoSvg>
      )

    case 'superior-health':
      return (
        <InsuranceLogoSvg title={name} viewBox="0 0 360 120">
          {/* Colorful circle with family figures */}
          <circle cx="54" cy="60" r="46" fill="#f0f0f0" />
          <circle cx="38" cy="48" r="8"  fill="#e84393" />
          <path d="M28 60 Q38 54 48 60 L48 78 L28 78Z" fill="#e84393" />
          <circle cx="56" cy="42" r="8"  fill="#8bc34a" />
          <path d="M46 54 Q56 48 66 54 L66 78 L46 78Z" fill="#8bc34a" />
          <circle cx="72" cy="48" r="8"  fill="#ff9800" />
          <path d="M62 60 Q72 54 82 60 L82 78 L62 78Z" fill="#ff9800" />
          <text x="108" y="56" fill="#555555" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="600">
            superior
          </text>
          <text x="108" y="84" fill="#555555" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="600">
            healthplan
          </text>
          <text x="290" y="84" fill="#555555" fontFamily="Arial, sans-serif" fontSize="18">.</text>
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
