/**
 * Country dataset for the phone field: [ISO2, display name, dial code].
 * Kept in one place because the picker, the E.164 builder and the timezone
 * default all read from it and must agree.
 */
export const COUNTRIES: ReadonlyArray<readonly [string, string, number]> = [
  // Oceania
  ['AU', 'Australia', 61],
  ['NZ', 'New Zealand', 64],
  ['FJ', 'Fiji', 679],
  ['PG', 'Papua New Guinea', 675],
  ['WS', 'Samoa', 685],
  ['TO', 'Tonga', 676],
  ['VU', 'Vanuatu', 678],
  ['SB', 'Solomon Islands', 677],
  ['NC', 'New Caledonia', 687],
  ['PF', 'French Polynesia', 689],
  // Asia
  ['CN', 'China', 86],
  ['HK', 'Hong Kong', 852],
  ['MO', 'Macau', 853],
  ['TW', 'Taiwan', 886],
  ['JP', 'Japan', 81],
  ['KR', 'South Korea', 82],
  ['IN', 'India', 91],
  ['PK', 'Pakistan', 92],
  ['BD', 'Bangladesh', 880],
  ['LK', 'Sri Lanka', 94],
  ['NP', 'Nepal', 977],
  ['AF', 'Afghanistan', 93],
  ['MV', 'Maldives', 960],
  ['BT', 'Bhutan', 975],
  ['MM', 'Myanmar', 95],
  ['TH', 'Thailand', 66],
  ['VN', 'Vietnam', 84],
  ['KH', 'Cambodia', 855],
  ['LA', 'Laos', 856],
  ['ID', 'Indonesia', 62],
  ['MY', 'Malaysia', 60],
  ['SG', 'Singapore', 65],
  ['PH', 'Philippines', 63],
  ['BN', 'Brunei', 673],
  ['TL', 'East Timor', 670],
  ['MN', 'Mongolia', 976],
  ['KZ', 'Kazakhstan', 7],
  ['UZ', 'Uzbekistan', 998],
  ['KG', 'Kyrgyzstan', 996],
  ['TJ', 'Tajikistan', 992],
  ['TM', 'Turkmenistan', 993],
  ['GE', 'Georgia', 995],
  ['AM', 'Armenia', 374],
  ['AZ', 'Azerbaijan', 994],
  // Europe
  ['GB', 'United Kingdom', 44],
  ['IE', 'Ireland', 353],
  ['FR', 'France', 33],
  ['DE', 'Germany', 49],
  ['IT', 'Italy', 39],
  ['ES', 'Spain', 34],
  ['PT', 'Portugal', 351],
  ['NL', 'Netherlands', 31],
  ['BE', 'Belgium', 32],
  ['LU', 'Luxembourg', 352],
  ['CH', 'Switzerland', 41],
  ['AT', 'Austria', 43],
  ['DK', 'Denmark', 45],
  ['NO', 'Norway', 47],
  ['SE', 'Sweden', 46],
  ['FI', 'Finland', 358],
  ['IS', 'Iceland', 354],
  ['PL', 'Poland', 48],
  ['CZ', 'Czechia', 420],
  ['SK', 'Slovakia', 421],
  ['HU', 'Hungary', 36],
  ['RO', 'Romania', 40],
  ['BG', 'Bulgaria', 359],
  ['GR', 'Greece', 30],
  ['RU', 'Russia', 7],
  ['UA', 'Ukraine', 380],
  ['BY', 'Belarus', 375],
  ['LT', 'Lithuania', 370],
  ['LV', 'Latvia', 371],
  ['EE', 'Estonia', 372],
  ['SI', 'Slovenia', 386],
  ['HR', 'Croatia', 385],
  ['RS', 'Serbia', 381],
  ['BA', 'Bosnia & Herzegovina', 387],
  ['AL', 'Albania', 355],
  ['MK', 'North Macedonia', 389],
  ['ME', 'Montenegro', 382],
  ['MD', 'Moldova', 373],
  ['CY', 'Cyprus', 357],
  ['MT', 'Malta', 356],
  ['TR', 'Turkey', 90],
  // Middle East & Africa
  ['AE', 'United Arab Emirates', 971],
  ['SA', 'Saudi Arabia', 966],
  ['QA', 'Qatar', 974],
  ['BH', 'Bahrain', 973],
  ['KW', 'Kuwait', 965],
  ['OM', 'Oman', 968],
  ['JO', 'Jordan', 962],
  ['LB', 'Lebanon', 961],
  ['IQ', 'Iraq', 964],
  ['IL', 'Israel', 972],
  ['EG', 'Egypt', 20],
  ['MA', 'Morocco', 212],
  ['TN', 'Tunisia', 216],
  ['DZ', 'Algeria', 213],
  ['LY', 'Libya', 218],
  ['ET', 'Ethiopia', 251],
  ['KE', 'Kenya', 254],
  ['TZ', 'Tanzania', 255],
  ['UG', 'Uganda', 256],
  ['NG', 'Nigeria', 234],
  ['GH', 'Ghana', 233],
  ['ZA', 'South Africa', 27],
  ['ZW', 'Zimbabwe', 263],
  ['ZM', 'Zambia', 260],
  ['MZ', 'Mozambique', 258],
  ['BW', 'Botswana', 267],
  ['NA', 'Namibia', 264],
  ['CM', 'Cameroon', 237],
  ['CI', 'Ivory Coast', 225],
  ['SN', 'Senegal', 221],
  ['MU', 'Mauritius', 230],
  ['RW', 'Rwanda', 250],
  ['SD', 'Sudan', 249],
  ['SO', 'Somalia', 252],
  // Americas
  ['US', 'United States', 1],
  ['CA', 'Canada', 1],
  ['MX', 'Mexico', 52],
  ['BR', 'Brazil', 55],
  ['AR', 'Argentina', 54],
  ['CL', 'Chile', 56],
  ['CO', 'Colombia', 57],
  ['PE', 'Peru', 51],
  ['VE', 'Venezuela', 58],
  ['EC', 'Ecuador', 593],
  ['BO', 'Bolivia', 591],
  ['PY', 'Paraguay', 595],
  ['UY', 'Uruguay', 598],
  ['CR', 'Costa Rica', 506],
  ['PA', 'Panama', 507],
  ['GT', 'Guatemala', 502],
  ['HN', 'Honduras', 504],
  ['SV', 'El Salvador', 503],
  ['NI', 'Nicaragua', 505],
  ['BZ', 'Belize', 501],
  ['CU', 'Cuba', 53],
  ['HT', 'Haiti', 509],
  ['DO', 'Dominican Republic', 1],
  ['JM', 'Jamaica', 1],
  ['TT', 'Trinidad & Tobago', 1],
  ['GY', 'Guyana', 592],
  ['SR', 'Suriname', 597],
]

const KNOWN = new Set(COUNTRIES.map(([iso]) => iso))

/** True when the ISO code exists in the picker list. */
export function isKnownCountry(iso: string): boolean {
  return KNOWN.has(iso.toUpperCase())
}

/** The dial code for an ISO2 code, e.g. "61" for Australia. */
export function dialCodeOf(iso: string): string {
  const entry = COUNTRIES.find(([code]) => code === iso)
  return entry ? String(entry[2]) : '61'
}

/**
 * Shared dial codes resolve to the flag people most likely mean when they
 * paste a full number: +1 is NANP so it reads as US, +7 as RU.
 */
const DIAL_ISO: Record<string, string> = (() => {
  const major: Record<string, string> = { 1: 'US', 7: 'RU' }
  const map: Record<string, string> = {}
  for (const [iso, , dial] of COUNTRIES) {
    if (!(dial in map)) map[dial] = major[dial] ?? iso
  }
  return map
})()

/**
 * The country whose dial code prefixes `digits`, or null when nothing matches.
 * Tries the longest prefix first so "8801..." reads as Bangladesh (+880)
 * rather than Vietnam (+84).
 */
export function dialForPrefix(digits: string): string | null {
  for (let len = Math.min(4, digits.length); len >= 1; len -= 1) {
    const iso = DIAL_ISO[digits.slice(0, len)]
    if (iso) return iso
  }
  return null
}

/** Dummy sample numbers shown in an empty phone box, one per country. */
export const PHONE_EXAMPLE: Record<string, string> = {
  AU: '412 345 678', NZ: '21 234 5678', GB: '7911 123456', IE: '85 123 4567',
  US: '202 555 0134', CA: '416 555 0134', MX: '55 1234 5678', BR: '11 98765 4321',
  AR: '11 2345 6789', CL: '9 1234 5678', CO: '300 123 4567', PE: '912 345 678',
  FR: '6 12 34 56 78', DE: '151 2345 6789', IT: '312 345 6789', ES: '612 345 678',
  PT: '912 345 678', NL: '6 1234 5678', BE: '470 12 34 56', CH: '79 123 45 67',
  AT: '664 123 4567', SE: '70 123 45 67', NO: '412 34 567', DK: '20 12 34 56',
  FI: '40 123 4567', PL: '512 345 678', GR: '691 234 5678', RO: '712 345 678',
  CZ: '601 123 456', HU: '30 123 4567', TR: '532 123 4567', RU: '912 345 67 89',
  UA: '67 123 4567', IN: '98765 43210', PK: '300 1234567', BD: '1712 345678',
  LK: '71 234 5678', NP: '9812 345678', AF: '70 123 4567', CN: '138 0013 8000',
  HK: '9123 4567', TW: '912 345 678', JP: '90 1234 5678', KR: '10 1234 5678',
  SG: '8123 4567', MY: '12 345 6789', TH: '81 234 5678', VN: '91 234 5678',
  ID: '812 3456 789', PH: '917 123 4567', AE: '50 123 4567', SA: '55 123 4567',
  QA: '3312 3456', KW: '5123 4567', IL: '50 123 4567', EG: '10 1234 5678',
  ZA: '71 234 5678', NG: '801 234 5678', KE: '712 345678', GH: '20 123 4567',
  MA: '612 345 678', ET: '91 123 4567',
}
export const PHONE_EXAMPLE_FALLBACK = '123 456 789'

/**
 * Default-country hint: browser timezone to ISO2. Australia is the site's
 * target market and stays the default. The hint is computed locally from
 * `Intl` and never from a network lookup, so no visitor IP leaves the page.
 */
export const TZ_COUNTRY: Record<string, string> = {
  'Australia/Sydney': 'AU', 'Australia/Melbourne': 'AU', 'Australia/Brisbane': 'AU',
  'Australia/Adelaide': 'AU', 'Australia/Perth': 'AU', 'Australia/Darwin': 'AU',
  'Australia/Hobart': 'AU', 'Australia/Lord_Howe': 'AU', 'Australia/Eucla': 'AU',
  'Pacific/Auckland': 'NZ', 'Pacific/Chatham': 'NZ', 'Pacific/Fiji': 'FJ',
  'Asia/Karachi': 'PK', 'Asia/Kolkata': 'IN', 'Asia/Colombo': 'LK', 'Asia/Dhaka': 'BD',
  'Asia/Kathmandu': 'NP', 'Asia/Dubai': 'AE', 'Asia/Riyadh': 'SA', 'Asia/Qatar': 'QA',
  'Asia/Kuwait': 'KW', 'Asia/Muscat': 'OM', 'Asia/Jerusalem': 'IL', 'Asia/Beirut': 'LB',
  'Europe/London': 'GB', 'Europe/Dublin': 'IE', 'Europe/Paris': 'FR', 'Europe/Berlin': 'DE',
  'Europe/Madrid': 'ES', 'Europe/Rome': 'IT', 'Europe/Amsterdam': 'NL', 'Europe/Brussels': 'BE',
  'Europe/Zurich': 'CH', 'Europe/Vienna': 'AT', 'Europe/Stockholm': 'SE', 'Europe/Oslo': 'NO',
  'Europe/Copenhagen': 'DK', 'Europe/Helsinki': 'FI', 'Europe/Warsaw': 'PL', 'Europe/Prague': 'CZ',
  'Europe/Athens': 'GR', 'Europe/Bucharest': 'RO', 'Europe/Istanbul': 'TR', 'Europe/Kyiv': 'UA',
  'Europe/Moscow': 'RU',
  'America/New_York': 'US', 'America/Chicago': 'US', 'America/Denver': 'US',
  'America/Los_Angeles': 'US', 'America/Phoenix': 'US', 'America/Anchorage': 'US',
  'Pacific/Honolulu': 'US', 'America/Toronto': 'CA', 'America/Vancouver': 'CA',
  'America/Mexico_City': 'MX', 'America/Sao_Paulo': 'BR',
  'America/Argentina/Buenos_Aires': 'AR', 'America/Santiago': 'CL', 'America/Bogota': 'CO',
  'America/Lima': 'PE',
  'Asia/Shanghai': 'CN', 'Asia/Hong_Kong': 'HK', 'Asia/Taipei': 'TW', 'Asia/Seoul': 'KR',
  'Asia/Tokyo': 'JP', 'Asia/Singapore': 'SG', 'Asia/Kuala_Lumpur': 'MY', 'Asia/Jakarta': 'ID',
  'Asia/Bangkok': 'TH', 'Asia/Manila': 'PH', 'Asia/Ho_Chi_Minh': 'VN',
  'Africa/Johannesburg': 'ZA', 'Africa/Nairobi': 'KE', 'Africa/Lagos': 'NG', 'Africa/Cairo': 'EG',
}
