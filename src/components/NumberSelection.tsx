import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface NumberSelectionProps {
  onSelect: (number: string) => void;
}

// Mock data for available numbers by country
const availableNumbers: Record<string, string[]> = {
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

// Country flags mapping
const countryFlags: Record<string, string> = {
  'USA': '🇺🇸',
  'CAN': '🇨🇦',
  'GBR': '🇬🇧',
  'FRA': '🇫🇷',
  'DEU': '🇩🇪',
  'ESP': '🇪🇸',
  'ITA': '🇮🇹',
  'AUS': '🇦🇺',
  'JPN': '🇯🇵',
  'CHN': '🇨🇳',
  'IND': '🇮🇳',
  'BRA': '🇧🇷',
  'MEX': '🇲🇽',
  'TUR': '🇹🇷',
  'GRC': '🇬🇷',
  'TWN': '🇹🇼',
};

// Country names mapping
const countryNames: Record<string, string> = {
  'USA': 'United States',
  'CAN': 'Canada',
  'GBR': 'United Kingdom',
  'FRA': 'France',
  'DEU': 'Germany',
  'ESP': 'Spain',
  'ITA': 'Italy',
  'AUS': 'Australia',
  'JPN': 'Japan',
  'CHN': 'China',
  'IND': 'India',
  'BRA': 'Brazil',
  'MEX': 'Mexico',
  'TUR': 'Turkey',
  'GRC': 'Greece',
  'TWN': 'Taiwan',
};

// Area code formats by country
const areaCodeFormats: Record<string, string> = {
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

export default function NumberSelection({ onSelect }: NumberSelectionProps) {
  const [selectedNumber, setSelectedNumber] = useState<string>('');
  const [areaCode, setAreaCode] = useState<string>('');
  const [filteredNumbers, setFilteredNumbers] = useState<string[]>([]);

  const handleNumberSelect = (number: string) => {
    setSelectedNumber(number);
    onSelect(number);
  };

  // Get the country from localStorage or use a default
  const country = localStorage.getItem('selectedCountry') || 'USA';
  
  // Get available numbers for the selected country
  const countryNumbers = availableNumbers[country] || availableNumbers['USA'];
  
  // Get the country flag and name
  const countryFlag = countryFlags[country] || '🇺🇸';
  const countryName = countryNames[country] || 'United States';
  
  // Get the area code format for the selected country
  const areaCodeFormat = areaCodeFormats[country] || 'XXX';

  // Filter numbers based on area code
  useEffect(() => {
    if (!areaCode) {
      setFilteredNumbers(countryNumbers);
      return;
    }

    const filtered = countryNumbers.filter(number => {
      // Extract the area code from the number based on country format
      let numberAreaCode = '';
      
      if (country === 'USA' || country === 'CAN') {
        // Format: +1 (XXX) XXX-XXXX
        const match = number.match(/\+1 \((\d{3})\)/);
        if (match) numberAreaCode = match[1];
      } else if (country === 'GBR') {
        // Format: +44 XX XXXX XXXX
        const match = number.match(/\+44 (\d{2})/);
        if (match) numberAreaCode = match[1];
      } else if (country === 'FRA') {
        // Format: +33 X XX XX XX XX
        const match = number.match(/\+33 (\d{1})/);
        if (match) numberAreaCode = match[1];
      } else if (country === 'DEU') {
        // Format: +49 XX XXXXXXXX
        const match = number.match(/\+49 (\d{2})/);
        if (match) numberAreaCode = match[1];
      } else if (country === 'ESP' || country === 'ITA') {
        // Format: +34 XX XXX XX XX
        const match = number.match(/\+34 (\d{2})/);
        if (match) numberAreaCode = match[1];
      } else if (country === 'AUS' || country === 'JPN') {
        // Format: +61 X XXXX XXXX
        const match = number.match(/\+61 (\d{1})/);
        if (match) numberAreaCode = match[1];
      } else if (country === 'CHN') {
        // Format: +86 XXX XXXX XXXX
        const match = number.match(/\+86 (\d{3})/);
        if (match) numberAreaCode = match[1];
      } else if (country === 'IND' || country === 'BRA' || country === 'MEX') {
        // Format: +91 XX XXXX XXXX
        const match = number.match(/\+91 (\d{2})/);
        if (match) numberAreaCode = match[1];
      } else if (country === 'TUR') {
        // Format: +90 XXX XXX XXXX
        const match = number.match(/\+90 (\d{3})/);
        if (match) numberAreaCode = match[1];
      } else if (country === 'GRC') {
        // Format: +30 XX XXXX XXXX
        const match = number.match(/\+30 (\d{2})/);
        if (match) numberAreaCode = match[1];
      } else if (country === 'TWN') {
        // Format: +886 X XXXX XXXX
        const match = number.match(/\+886 (\d{1})/);
        if (match) numberAreaCode = match[1];
      }
      
      return numberAreaCode.includes(areaCode);
    });
    
    setFilteredNumbers(filtered);
  }, [areaCode, countryNumbers]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
          Choose Your Number
        </h2>
        <p className="text-muted-foreground mt-2">
          Select your {countryFlag} {countryName} number
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={`Search by area code (${areaCodeFormat})`}
            value={areaCode}
            onChange={(e) => setAreaCode(e.target.value)}
            className="pl-9 bg-secondary/50 border-secondary focus:border-primary input-glow"
          />
        </div>

        <RadioGroup
          value={selectedNumber}
          onValueChange={handleNumberSelect}
          className="grid gap-4"
        >
          {filteredNumbers.length > 0 ? (
            filteredNumbers.map((number) => (
              <Card key={number} className="relative">
                <RadioGroupItem
                  value={number}
                  id={number}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={number}
                  className="flex items-center justify-between p-4 h-full w-full rounded-md border-2 border-muted bg-secondary/50 hover:bg-secondary/80 peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                >
                  <span className="font-medium">{number}</span>
                </Label>
              </Card>
            ))
          ) : (
            <div className="text-center py-4 text-muted-foreground">
              No numbers found for the selected area code
            </div>
          )}
        </RadioGroup>
      </div>
    </div>
  );
} 