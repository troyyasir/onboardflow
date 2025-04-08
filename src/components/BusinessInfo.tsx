import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface BusinessInfoProps {
  type: string;
  value: Record<string, string>;
  onChange: (value: Record<string, string>) => void;
}

const fields = {
  retail: [
    { id: 'name', label: 'Store Name', type: 'text' },
    { id: 'address', label: 'Store Address', type: 'text' },
    { id: 'employees', label: 'Number of Employees', type: 'number' },
  ],
  restaurant: [
    { id: 'name', label: 'Restaurant Name', type: 'text' },
    { id: 'cuisine', label: 'Cuisine Type', type: 'text' },
    { id: 'licenseNumber', label: 'Food License Number', type: 'text' },
  ],
  freelancer: [
    { id: 'name', label: 'Business Name', type: 'text' },
    { id: 'website', label: 'Portfolio Website', type: 'url' },
    { id: 'description', label: 'Services Offered', type: 'textarea' },
  ],
  enterprise: [
    { id: 'name', label: 'Company Name', type: 'text' },
    { id: 'employees', label: 'Number of Employees', type: 'number' },
    { id: 'website', label: 'Company Website', type: 'url' },
  ],
  technology: [
    { id: 'name', label: 'Company Name', type: 'text' },
    { id: 'website', label: 'Company Website', type: 'url' },
    { id: 'description', label: 'Tech Stack', type: 'textarea' },
  ],
  logistics: [
    { id: 'name', label: 'Company Name', type: 'text' },
    { id: 'fleet', label: 'Fleet Size', type: 'number' },
    { id: 'licenseNumber', label: 'Transport License', type: 'text' },
  ],
};

export default function BusinessInfo({ type, value, onChange }: BusinessInfoProps) {
  const handleChange = (id: string, newValue: string) => {
    onChange({ ...value, [id]: newValue });
  };

  const relevantFields = fields[type as keyof typeof fields] || [];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
          Tell us about your business
        </h2>
        <p className="text-muted-foreground mt-2">Fill in the details below</p>
      </div>

      <div className="space-y-4">
        {relevantFields.map(({ id, label, type: fieldType }) => (
          <div key={id} className="space-y-2">
            <Label htmlFor={id} className="text-foreground">
              {label}
            </Label>
            {fieldType === 'textarea' ? (
              <Textarea
                id={id}
                value={value[id] || ''}
                onChange={(e) => handleChange(id, e.target.value)}
                className="bg-secondary/50 border-secondary focus:border-primary input-glow"
              />
            ) : (
              <Input
                id={id}
                type={fieldType}
                value={value[id] || ''}
                onChange={(e) => handleChange(id, e.target.value)}
                className="bg-secondary/50 border-secondary focus:border-primary input-glow"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}