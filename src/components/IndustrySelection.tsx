import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface IndustrySelectionProps {
  value: string;
  onChange: (value: string) => void;
}

const industries = [
  'Technology',
  'Healthcare',
  'Finance',
  'Retail',
  'Manufacturing',
  'Education',
  'Real Estate',
  'Transportation',
  'Entertainment',
  'Hospitality',
  'Construction',
  'Agriculture',
  'Energy',
  'Legal Services',
  'Marketing',
  'Consulting',
] as const;

export default function IndustrySelection({ value, onChange }: IndustrySelectionProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Select Your Industry</h2>
        <p className="text-muted-foreground">
          Choose the industry that best describes your business. This helps us provide you with the most relevant service.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger id="industry" className="w-full">
            <SelectValue placeholder="Select an industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map((industry) => (
              <SelectItem key={industry} value={industry.toLowerCase()}>
                {industry}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
} 