export interface BusinessType {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Country {
  code: string;
  name: string;
  flag: string;
  phoneCode: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  industry: string;
  businessType: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  component: React.ComponentType<any>;
  isCompleted: boolean;
}

export interface NumberSelectionProps {
  onSelect: (number: string) => void;
}

export interface CountrySelectionProps {
  onSelect: (country: Country) => void;
}

export interface BusinessTypeProps {
  onSelect: (type: BusinessType) => void;
}

export interface BusinessSearchProps {
  onSelect: (business: BusinessInfo) => void;
  onManualEntry: () => void;
}

export interface BusinessInfoProps {
  onSubmit: (info: BusinessInfo) => void;
}

export interface ReviewSubmitProps {
  onSubmit: () => void;
} 