import { Button } from '@/components/ui/button';
import { Store, Utensils, Briefcase, Building2, Code, Truck } from 'lucide-react';

interface BusinessTypeProps {
  value: string;
  onChange: (value: string) => void;
}

const businessTypes = [
  { id: 'retail', label: 'Retail Store', icon: Store },
  { id: 'restaurant', label: 'Restaurant', icon: Utensils },
  { id: 'freelancer', label: 'Freelancer', icon: Briefcase },
  { id: 'enterprise', label: 'Enterprise', icon: Building2 },
  { id: 'technology', label: 'Technology', icon: Code },
  { id: 'logistics', label: 'Logistics', icon: Truck },
];

export default function BusinessType({ value, onChange }: BusinessTypeProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
          What type of business do you run?
        </h2>
        <p className="text-muted-foreground mt-2">
          This helps us customize your experience
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {businessTypes.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant={value === id ? 'default' : 'ghost'}
            className={`h-24 flex flex-col items-center justify-center gap-3 transition-all duration-300 ${
              value === id ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/10'
            }`}
            onClick={() => onChange(id)}
          >
            <Icon className={`h-6 w-6 ${value === id ? 'text-primary-foreground' : 'text-primary'}`} />
            <span>{label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}