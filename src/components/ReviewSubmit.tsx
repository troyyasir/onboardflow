import { FormData } from '@/App';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { Building2, Globe, MapPin, Phone, Flag } from 'lucide-react';

interface ReviewSubmitProps {
  formData: FormData;
}

const BUSINESS_TYPES = {
  retail: 'Retail Store',
  restaurant: 'Restaurant',
  freelancer: 'Freelancer',
  enterprise: 'Enterprise',
  technology: 'Technology Company',
  logistics: 'Logistics Company',
};

export default function ReviewSubmit({ formData }: ReviewSubmitProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
          Review your information
        </h2>
        <p className="text-muted-foreground mt-2">
          Please verify all details before submitting
        </p>
      </div>

      <ScrollArea className="h-[300px] rounded-md border border-secondary bg-secondary/20 p-4">
        <div className="space-y-4">
          <Card className="p-4 bg-secondary/30">
            <h3 className="font-medium text-lg mb-3">Personal Information</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Flag className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Country</p>
                  <p className="text-sm text-muted-foreground">{formData.country}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Phone Number</p>
                  <p className="text-sm text-muted-foreground">{formData.phoneNumber}</p>
                </div>
              </div>
            </div>
          </Card>

          {formData.businessSearch && (
            <Card className="p-4 bg-secondary/30">
              <h3 className="font-medium text-lg mb-3">Business Information</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Building2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Business Name</p>
                    <p className="text-sm text-muted-foreground">{formData.businessSearch.name}</p>
                  </div>
                </div>
                {formData.businessSearch.address && (
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Address</p>
                      <p className="text-sm text-muted-foreground">{formData.businessSearch.address}</p>
                    </div>
                  </div>
                )}
                {formData.businessSearch.website && (
                  <div className="flex items-start gap-2">
                    <Globe className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Website</p>
                      <p className="text-sm text-primary">{formData.businessSearch.website}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-2">
                  <Building2 className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Business Type</p>
                    <p className="text-sm text-muted-foreground">
                      {BUSINESS_TYPES[formData.businessSearch.businessType as keyof typeof BUSINESS_TYPES] || formData.businessSearch.businessType}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}