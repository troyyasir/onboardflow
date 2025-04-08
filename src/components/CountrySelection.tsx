import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CountrySelectionProps {
  value: string;
  onChange: (value: string) => void;
}

const countries = [
  // European Countries
  { value: 'FRA', label: '🇫🇷 France', code: '+33' },
  { value: 'DEU', label: '🇩🇪 Germany', code: '+49' },
  { value: 'ESP', label: '🇪🇸 Spain', code: '+34' },
  { value: 'GRC', label: '🇬🇷 Greece', code: '+30' },
  
  // Turkey
  { value: 'TUR', label: '🇹🇷 Turkey', code: '+90' },
  
  // North America
  { value: 'USA', label: '🇺🇸 United States', code: '+1' },
  { value: 'MEX', label: '🇲🇽 Mexico', code: '+52' },
  { value: 'CAN', label: '🇨🇦 Canada', code: '+1' },
  
  // Asia
  { value: 'CHN', label: '🇨🇳 China', code: '+86' },
  { value: 'TWN', label: '🇹🇼 Taiwan', code: '+886' },
];

export default function CountrySelection({ value, onChange }: CountrySelectionProps) {
  const handleCountryChange = (country: string) => {
    // Store the selected country in localStorage
    localStorage.setItem('selectedCountry', country);
    // Call the parent component's onChange handler
    onChange(country);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
          Where are you located?
        </h2>
        <p className="text-muted-foreground mt-2">
          Select your country of operation
        </p>
      </div>

      <Select value={value} onValueChange={handleCountryChange}>
        <SelectTrigger className="w-full bg-secondary/50 border-secondary focus:border-primary input-glow">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent className="max-h-[300px]">
          {countries.map((country) => (
            <SelectItem 
              key={country.value} 
              value={country.value}
              className="focus:bg-primary/20"
            >
              <div className="flex items-center justify-between w-full">
                <span>{country.label}</span>
                <span className="text-muted-foreground text-sm">{country.code}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}