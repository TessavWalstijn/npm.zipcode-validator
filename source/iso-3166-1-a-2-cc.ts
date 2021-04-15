// NOTE: These country codes are from the: 'ISO 3166-1 alpha-2 country code'
// NOTE: The information comes from https://en.wikipedia.org/wiki/List_of_postal_codes
// NOTE: Countries without a code are not included as can be seen by the comments

/**
 * The format of the country codes are from the: 'ISO 3166-1 alpha-2 country code'.
 * The country codes come from https://en.wikipedia.org/wiki/List_of_postal_codes.
 * Countries without a zip code are not included.
 */
type CountryCodes =
  | 'AD'
  // | 'AE' - no codes -
  | 'AF'
  // | 'AG' - no codes -
  | 'AI'
  | 'AL'
  | 'AM'
  // | 'AO' - no codes -
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  // | 'BF' - no codes -
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BM'
  | 'BN'
  // | 'BO' - no codes -
  // | 'BQ' - no codes -
  | 'BR'
  // | 'BS' - no codes -
  | 'BT'
  // | 'BW' - no codes -
  | 'BY'
  // | 'BZ' - no codes -
  | 'CA'
  | 'CC'
  // | 'CD' - no codes -
  // | 'CF' - no codes -
  // | 'CG' - no codes -
  | 'CH'
  // | 'CI' - no codes -
  // | 'CK' - no codes -
  | 'CL'
  | 'CM'
  | 'CR'
  | 'CU'
  | 'CV'
  // | 'CW' - no codes -
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  // | 'DJ' - no codes -
  | 'DK'
  // | 'DM' - no codes -
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  // | 'ER' - no codes -
  | 'ES'
  | 'ET'
  | 'FI'
  // | 'FJ' - no codes -
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  // | 'GA' - no codes -
  | 'GB'
  // | 'GD' - no codes -
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  // | 'GM' - no codes -
  | 'GN'
  | 'GP'
  // | 'GQ' - no codes -
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  // | 'GY' - no codes -
  // | 'HK' - no codes -
  // | 'HM' - no codes -
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  // | 'KI' - no codes -
  // | 'KM' - no codes -
  // | 'KN' - no codes -
  // | 'KP' - no codes -
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  // | 'LY' - no codes -
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  // | 'ML' - no codes -
  | 'MM'
  | 'MN'
  // | 'MO' - no codes -
  | 'MP'
  | 'MQ'
  // | 'MR' - no codes -
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  // | 'MW' - no codes -
  | 'MX'
  | 'MY'
  | 'MZ'
  // | 'NA' - no codes - under consideration
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  // | 'NR' - no codes -
  // | 'NU' - no codes -
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  // | 'QA' - no codes -
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  // | 'RW' - no codes -
  | 'SA'
  // | 'SB' - no codes -
  // | 'SC' - no codes -
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  // | 'SL' - no codes -
  | 'SM'
  | 'SN'
  | 'SO'
  // | 'SR' - no codes -
  // | 'SS' - no codes -
  // | 'ST' - no codes -
  | 'SV'
  // | 'SX' - no codes -
  // | 'SY' - no codes - planned
  | 'SZ'
  | 'TC'
  // | 'TD' - no codes -
  // | 'TF' - no codes -
  // | 'TG' - no codes -
  | 'TH'
  | 'TJ'
  // | 'TK' - no codes -
  // | 'TL' - no codes -
  | 'TM'
  | 'TN'
  // | 'TO' - no codes -
  | 'TR'
  | 'TT'
  // | 'TV' - no codes -
  | 'TW'
  | 'TZ'
  | 'UA'
  // | 'UG' - no codes -
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  // | 'VU' - no codes -
  | 'WF'
  | 'WS'
  | 'XK'
  // | 'YE' - no codes - open post code need to be locked in to
  | 'YT'
  | 'ZA'
  | 'ZM'
// | 'ZW' - no codes - planned
