import { BusinessType, Country } from '../types';

export const BUSINESS_TYPES: BusinessType[] = [
  {
    id: 'sole-proprietorship',
    name: 'Sole Proprietorship',
    description: 'A business owned and operated by a single individual',
    icon: '👤',
  },
  {
    id: 'partnership',
    name: 'Partnership',
    description: 'A business owned by two or more individuals',
    icon: '🤝',
  },
  {
    id: 'corporation',
    name: 'Corporation',
    description: 'A legal entity separate from its owners',
    icon: '🏢',
  },
  {
    id: 'llc',
    name: 'LLC',
    description: 'Limited Liability Company - combines benefits of corporation and partnership',
    icon: '📋',
  },
];

export const COUNTRIES: Country[] = [
  { code: 'USA', name: 'United States', flag: '🇺🇸', phoneCode: '+1' },
  { code: 'CAN', name: 'Canada', flag: '🇨🇦', phoneCode: '+1' },
  { code: 'GBR', name: 'United Kingdom', flag: '🇬🇧', phoneCode: '+44' },
  { code: 'FRA', name: 'France', flag: '🇫🇷', phoneCode: '+33' },
  { code: 'DEU', name: 'Germany', flag: '🇩🇪', phoneCode: '+49' },
  { code: 'ESP', name: 'Spain', flag: '🇪🇸', phoneCode: '+34' },
  { code: 'ITA', name: 'Italy', flag: '🇮🇹', phoneCode: '+39' },
  { code: 'AUS', name: 'Australia', flag: '🇦🇺', phoneCode: '+61' },
  { code: 'JPN', name: 'Japan', flag: '🇯🇵', phoneCode: '+81' },
  { code: 'CHN', name: 'China', flag: '🇨🇳', phoneCode: '+86' },
  { code: 'IND', name: 'India', flag: '🇮🇳', phoneCode: '+91' },
  { code: 'BRA', name: 'Brazil', flag: '🇧🇷', phoneCode: '+55' },
  { code: 'MEX', name: 'Mexico', flag: '🇲🇽', phoneCode: '+52' },
  { code: 'TUR', name: 'Turkey', flag: '🇹🇷', phoneCode: '+90' },
  { code: 'GRC', name: 'Greece', flag: '🇬🇷', phoneCode: '+30' },
  { code: 'TWN', name: 'Taiwan', flag: '🇹🇼', phoneCode: '+886' },
];

export const INDUSTRIES = [
  'Technology',
  'Healthcare',
  'Finance',
  'Retail',
  'Manufacturing',
  'Education',
  'Real Estate',
  'Construction',
  'Hospitality',
  'Transportation',
  'Agriculture',
  'Energy',
  'Media',
  'Entertainment',
  'Professional Services',
  'Other',
];

export const AREA_CODE_FORMATS: Record<string, string> = {
  'USA': 'XXX',
  'CAN': 'XXX',
  'GBR': 'XX',
  'FRA': 'X',
  'DEU': 'XX',
  'ESP': 'XX',
  'ITA': 'XX',
  'AUS': 'X',
  'JPN': 'X',
  'CHN': 'XXX',
  'IND': 'XX',
  'BRA': 'XX',
  'MEX': 'XX',
  'TUR': 'XXX',
  'GRC': 'XX',
  'TWN': 'X',
};

export const AVAILABLE_NUMBERS: Record<string, string[]> = {
  'USA': ['+1 (555) 123-4567', '+1 (555) 234-5678', '+1 (555) 345-6789', '+1 (212) 123-4567', '+1 (212) 234-5678', '+1 (415) 123-4567', '+1 (415) 234-5678'],
  'CAN': ['+1 (416) 123-4567', '+1 (416) 234-5678', '+1 (416) 345-6789', '+1 (604) 123-4567', '+1 (604) 234-5678', '+1 (403) 123-4567', '+1 (403) 234-5678'],
  'GBR': ['+44 20 7123 4567', '+44 20 8234 5678', '+44 20 9345 6789', '+44 131 123 4567', '+44 131 234 5678', '+44 161 123 4567', '+44 161 234 5678'],
  'FRA': ['+33 1 23 45 67 89', '+33 1 34 56 78 90', '+33 1 45 67 89 01', '+33 4 91 23 45 67', '+33 4 91 34 56 78', '+33 5 56 12 34 56', '+33 5 56 23 45 67'],
  'DEU': ['+49 30 12345678', '+49 30 23456789', '+49 30 34567890', '+49 89 12345678', '+49 89 23456789', '+49 221 1234567', '+49 221 2345678'],
  'ESP': ['+34 91 123 45 67', '+34 91 234 56 78', '+34 91 345 67 89', '+34 93 123 45 67', '+34 93 234 56 78', '+34 96 123 45 67', '+34 96 234 56 78'],
  'ITA': ['+39 02 1234 5678', '+39 02 2345 6789', '+39 02 3456 7890', '+39 06 1234 5678', '+39 06 2345 6789', '+39 081 123 4567', '+39 081 234 5678'],
  'AUS': ['+61 2 1234 5678', '+61 2 2345 6789', '+61 2 3456 7890', '+61 3 1234 5678', '+61 3 2345 6789', '+61 7 1234 5678', '+61 7 2345 6789'],
  'JPN': ['+81 3 1234 5678', '+81 3 2345 6789', '+81 3 3456 7890', '+81 6 1234 5678', '+81 6 2345 6789', '+81 11 123 4567', '+81 11 234 5678'],
  'CHN': ['+86 10 1234 5678', '+86 10 2345 6789', '+86 10 3456 7890', '+86 21 1234 5678', '+86 21 2345 6789', '+86 755 123 4567', '+86 755 234 5678'],
  'IND': ['+91 11 1234 5678', '+91 11 2345 6789', '+91 11 3456 7890', '+91 22 1234 5678', '+91 22 2345 6789', '+91 80 1234 5678', '+91 80 2345 6789'],
  'BRA': ['+55 11 1234 5678', '+55 11 2345 6789', '+55 11 3456 7890', '+55 21 1234 5678', '+55 21 2345 6789', '+55 31 1234 5678', '+55 31 2345 6789'],
  'MEX': ['+52 55 1234 5678', '+52 55 2345 6789', '+52 55 3456 7890', '+52 81 1234 5678', '+52 81 2345 6789', '+52 33 1234 5678', '+52 33 2345 6789'],
  'TUR': ['+90 212 123 4567', '+90 212 234 5678', '+90 212 345 6789', '+90 216 123 4567', '+90 216 234 5678', '+90 232 123 4567', '+90 232 234 5678'],
  'GRC': ['+30 21 1234 5678', '+30 21 2345 6789', '+30 21 3456 7890', '+30 231 123 4567', '+30 231 234 5678', '+30 261 123 4567', '+30 261 234 5678'],
  'TWN': ['+886 2 1234 5678', '+886 2 2345 6789', '+886 2 3456 7890', '+886 3 1234 5678', '+886 3 2345 6789', '+886 4 1234 5678', '+886 4 2345 6789'],
}; 