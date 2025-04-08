import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search, Building2, MapPin, Globe } from 'lucide-react';

interface BusinessSearchProps {
  onSelect: (businessInfo: { name: string; address?: string; website?: string }) => void;
}

// Mock business data for demonstration
const MOCK_BUSINESSES = [
  {
    id: 1,
    name: 'Acme Corporation',
    address: '123 Business Ave, Suite 100, San Francisco, CA 94107',
    website: 'www.acmecorp.com',
  },
  {
    id: 2,
    name: 'TechStart Solutions',
    address: '456 Innovation Blvd, Palo Alto, CA 94301',
    website: 'www.techstart.io',
  },
  {
    id: 3,
    name: 'Green Earth Cafe',
    address: '789 Organic Street, Berkeley, CA 94704',
    website: 'www.greenearthcafe.com',
  },
];

export default function BusinessSearch({ onSelect }: BusinessSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [manualInfo, setManualInfo] = useState({
    name: '',
    address: '',
    website: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would make an API call to search for businesses
    // For demo purposes, we'll just use the search query as the business name
    onSelect({
      name: searchQuery,
    });
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSelect(manualInfo);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
          Tell us about your business
        </h2>
        <p className="text-muted-foreground mt-2">
          Search for your business or enter details manually
        </p>
      </div>

      <Tabs defaultValue="search" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="search">Search</TabsTrigger>
          <TabsTrigger value="manual">Manual Entry</TabsTrigger>
        </TabsList>

        <TabsContent value="search">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="search">Search for your business</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter your business name"
                  className="pl-9 bg-secondary/50 border-secondary focus:border-primary input-glow"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full button-glow bg-primary hover:bg-primary/90"
              disabled={!searchQuery}
            >
              Search
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="manual">
          <form onSubmit={handleManualSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="businessName">Business Name</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="businessName"
                  value={manualInfo.name}
                  onChange={(e) => setManualInfo(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter your business name"
                  className="pl-9 bg-secondary/50 border-secondary focus:border-primary input-glow"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessAddress">Address (Optional)</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="businessAddress"
                  value={manualInfo.address}
                  onChange={(e) => setManualInfo(prev => ({ ...prev, address: e.target.value }))}
                  placeholder="Enter your business address"
                  className="pl-9 bg-secondary/50 border-secondary focus:border-primary input-glow"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="businessWebsite">Website (Optional)</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="businessWebsite"
                  value={manualInfo.website}
                  onChange={(e) => setManualInfo(prev => ({ ...prev, website: e.target.value }))}
                  placeholder="Enter your business website"
                  className="pl-9 bg-secondary/50 border-secondary focus:border-primary input-glow"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full button-glow bg-primary hover:bg-primary/90"
              disabled={!manualInfo.name}
            >
              Continue
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
} 