const INSURANCE_DIRECTORY = [
  {
    state: 'Texas',
    summary: 'Frequently accepted plans for virtual therapy and psychiatry appointments across Texas.',
    groups: [
      {
        letter: 'A',
        plans: [
          'AARP',
          'Aetna',
          'Aetna Better Health Of Texas',
          'Aetna Medicare Advantage',
          'Allegiance Health Plan',
          'All Savers',
          'Allwell By Wellcare',
          'Ambetter',
          'Amerigroup Medicaid',
          'Amerigroup Medicare',
          'American Health Advantage of Texas',
        ],
      },
      {
        letter: 'B',
        plans: [
          'Baylor Scott & White Health',
          'Beacon Health Options | Carelon Behavioral Health',
          'Beacon Health Options Commercial Non-HMO',
          'Beacon Health Options Medicaid Network',
          'Beacon Health Options Medicare Advantage',
          'Behavioral Health System',
          'Bind',
          'Blue Cross And Blue Shield (Medicaid)',
          'Blue Cross And Blue Shield Of Texas',
          'BCBSTX - Medicare',
        ],
      },
      {
        letter: 'C',
        plans: [
          "Care N' Care",
          'Children Health Insurance Program (Medicaid)',
          'Children With Special Health Care Needs Services Program (CSHCN) Medicaid',
          'CHIP (Children Health Insurance Program) Medicaid',
          'Christus Health Exchange',
          'Christus US Family Health Plan',
          'Cigna Healthcare (Evernorth)',
          'Cigna Healthspring',
          'Community Health Choice',
          'Community Health Choice Star+Plus',
          'Curative Health Plan',
        ],
      },
      {
        letter: 'D',
        plans: ['Devoted Health Plan'],
      },
      {
        letter: 'F',
        plans: ['First Health Network'],
      },
      {
        letter: 'G',
        plans: ['GEHA Insurance'],
      },
      {
        letter: 'H',
        plans: [
          'Harvard Pilgrim Health Care',
          'Healthcare Highways',
          'HealthSmart',
          'Healthy Texas Woman Medicaid',
          'Humana',
          'Humana Medicare',
        ],
      },
      {
        letter: 'I',
        plans: ['Imperial Health Plan'],
      },
      {
        letter: 'K',
        plans: ['KelseyCare Advantage (Optum Medicare)'],
      },
      {
        letter: 'M',
        plans: [
          'Magellan Health',
          'Magellan Medicaid',
          'Medicaid',
          'Medicare',
          'Molina Healthcare Inc',
          'Multiplan (Medicare Advantage Plans)',
          'Multiplan (PHCS Network)',
          'Multiplan (Texas True Choice Medicaid)',
        ],
      },
      {
        letter: 'O',
        plans: ['Optum Healthcare | UnitedHealthcare', 'Oscar'],
      },
      {
        letter: 'P',
        plans: ['Procura Management Inc.', 'Provider Partners Health Plan'],
      },
      {
        letter: 'R',
        plans: ['Railroad'],
      },
      {
        letter: 'S',
        plans: ['Sana Benefits', 'Superior Healthplan'],
      },
      {
        letter: 'T',
        plans: [
          "Texas Children's Health Plan",
          'Texas True Choice Medicaid',
          'Tricare East',
          'Tricare Prime',
          'Tricare Select',
          'TriWest Healthcare Alliance',
          'TRPN || Contigo Health LLC',
        ],
      },
      {
        letter: 'U',
        plans: ['UMR', 'UMWA Health And Retirement Funds', 'USFHP'],
      },
    ],
  },
  {
    state: 'Florida',
    summary: 'Accepted insurance networks commonly used for care in Florida.',
    groups: [
      {
        letter: 'A',
        plans: [
          'AARP',
          'Aetna',
          'Aetna Better Health',
          'AllyAlign Health',
          'American Health Advantage of Florida',
          'AVMED Florida Exchange - (UBH Plan)',
        ],
      },
      {
        letter: 'B',
        plans: [
          'BEACON HEALTH OPTIONS COMMERCIAL NON-HMO',
          'BEACON HEALTH OPTIONS MEDICARE ADVANTAGE',
          'BEACON HEALTH OPTIONS MEDICAID NETWORK',
          'Behavioral Health Systems (BHS)',
          'BSN',
        ],
      },
      {
        letter: 'C',
        plans: [
          'Carisk Behavioral Health',
          'Carelon',
          'Careplus',
          'Cigna - Evernorth - Allegiance',
          'Clear Health Alliance',
          'Curative',
        ],
      },
      {
        letter: 'D',
        plans: ['Devoted', 'Doctors Healthcare Plans'],
      },
      {
        letter: 'E',
        plans: ['Emblem Health', 'EMI Health', 'Evolution Health System'],
      },
      {
        letter: 'F',
        plans: [
          'First Health Network',
          'Florida Blue',
          'Florida Community Care',
          'Florida Complete Care',
          'Freedom',
        ],
      },
      {
        letter: 'G',
        plans: ['GEHA', 'Georgia Exchange Plan (Optum)'],
      },
      {
        letter: 'H',
        plans: [
          'Health Sun',
          'Health First',
          'Health Options',
          'Humana Health Horizons',
          'Humana Medicare',
        ],
      },
      {
        letter: 'I',
        plans: ['Innovation Health'],
      },
      {
        letter: 'M',
        plans: [
          'Magellan',
          'Mass Advantage',
          'Mail Handlers Benefit Plan',
          'Medicaid',
          'Medicare',
          'Molina',
          'Multiplan',
          'Multiplan - PHCS',
        ],
      },
      {
        letter: 'N',
        plans: ['NEW YORK STATE EMPIRE PLAN', 'Neighborhood Health Partnership, Inc.'],
      },
      {
        letter: 'O',
        plans: [
          'Optimum',
          'Optum Behavioral Health - UHC',
          'Optum Community Care - VACCN',
          'Oscar',
        ],
      },
      {
        letter: 'P',
        plans: [
          'Partners Direct Health',
          'PEHP Health & Benefits',
          'Preferred Care Partners',
          'Prime Health Services',
          'Providence Plan Partners - Commercial',
          'Providence Plan Partners - Medicare',
        ],
      },
      {
        letter: 'R',
        plans: ['Railroad Medicare'],
      },
      {
        letter: 'S',
        plans: ['Simply Healthcare', 'Sunshine - Ambetter - Wellcare - Allcare'],
      },
      {
        letter: 'T',
        plans: ['Tricare East', 'Tricare Prime'],
      },
      {
        letter: 'U',
        plans: [
          'UHC Community Plan',
          'UHP Administrator - Claim Watcher',
          'UMR',
          'UNICARE GIC',
          'Ultimate Health',
        ],
      },
      {
        letter: 'Z',
        plans: ['Zenith'],
      },
    ],
  },
  {
    state: 'Illinois',
    summary: 'Commonly accepted Illinois plans for behavioral health support and ongoing treatment.',
    groups: [
      {
        letter: 'A',
        plans: [
          'AARP',
          'Aetna',
          'Aetna Better Health Medicaid (Illinicare Health)',
          'Aetna Medicare Advantage',
          'Advocate Medical Group (Magellan)',
          'Allegiance Health Plan (Cigna)',
          'Allsavers',
          'Ambetter Network (Commercial)',
        ],
      },
      {
        letter: 'B',
        plans: [
          'BCBS IL',
          'Behavioral Health system',
          'Bind / Surest',
          'Blue Cross Community Health Plans',
        ],
      },
      {
        letter: 'C',
        plans: [
          'Carelon Behavioral Health (Beacon Health Options)',
          'ChampVA (VACCN)',
          'Choice Care Network',
          'Cigna - Evernorth',
          'Cigna - Medicare',
          'ComPsych',
          'Community Health Choice',
          'CORVEL',
          'County Care Health Plan (Medicaid)',
        ],
      },
      {
        letter: 'D',
        plans: ['Devoted Health Plan (Medicare) (Magellan)'],
      },
      {
        letter: 'F',
        plans: ['First Health Network'],
      },
      {
        letter: 'G',
        plans: ['GEHA'],
      },
      {
        letter: 'H',
        plans: [
          'Harmony Health Plan (Illinois)',
          'Health Choice Illinois (Medicaid)',
          'Health Link',
          'Humana',
          'Humana Gold Plus Integrated (Medicare-Medicaid Plan)',
        ],
      },
      {
        letter: 'I',
        plans: [
          'Illinois Mental Health Collaborative for Access and Choice',
          'Imperial Health Plan',
        ],
      },
      {
        letter: 'M',
        plans: [
          'Magellan',
          'Medicaid (group)',
          'Medicaid (Individual)',
          'Medicare',
          'Meridian Health Plan (Commercial Exchange) (Medicare)',
          'Meridian Medicaid (Managed Care Plan)',
          'Molina Healthcare',
          'Multiplan - Medicare Advantage Plan',
          'Multiplan - PHCS',
        ],
      },
      {
        letter: 'O',
        plans: ['Optum Behavioral Health'],
      },
      {
        letter: 'P',
        plans: ['Provider Partners Health Plan'],
      },
      {
        letter: 'R',
        plans: ['Railroad'],
      },
      {
        letter: 'S',
        plans: ['SANA BENEFITS'],
      },
      {
        letter: 'T',
        plans: ['Tricare East', 'Tricare Prime', 'TRPN || Contigo Health LLC'],
      },
      {
        letter: 'U',
        plans: [
          'UMR',
          'United Healthcare',
          'United Healthcare - Medicare',
          'UMWA Health and Retirement funds',
        ],
      },
      {
        letter: 'W',
        plans: ['WellCare'],
      },
      {
        letter: 'Y',
        plans: ['Youth Care (Meridian Medicaid)'],
      },
      {
        letter: 'Z',
        plans: ['Zing Health'],
      },
    ],
  },
]

export default INSURANCE_DIRECTORY
