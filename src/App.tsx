import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2, RefreshCcw, Phone, Bot } from 'lucide-react'; // Added Phone and Bot icons
import CountrySelection from '@/components/CountrySelection';
import BusinessSearch from '@/components/BusinessSearch';
import NumberSelection from '@/components/NumberSelection';
import BusinessType from '@/components/BusinessType';
import ThemeToggle from '@/components/ThemeToggle'; // Import ThemeToggle

export type FormData = {
  country: string;
  selectedNumber?: string; // Keep this? Or replace with generatedNumber?
  businessType: string;
  businessSearch: {
    name: string;
    address?: string;
    website?: string;
  } | null;
};

const TOTAL_STEPS = 4;

type SubmissionPhase = 'idle' | 'submitting' | 'success' | 'error';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [submissionPhase, setSubmissionPhase] = useState<SubmissionPhase>('idle');
  const [formData, setFormData] = useState<FormData>({
    country: '',
    selectedNumber: '', // Maybe remove if number is always generated post-submit
    businessType: '',
    businessSearch: null,
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [generatedNumber, setGeneratedNumber] = useState<string | null>(null); // New state for generated number
  const [agentName, setAgentName] = useState<string | null>(null); // New state for agent name

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleNumberSelect = (number: string) => {
    updateFormData({ selectedNumber: number });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return !!formData.country;
      case 2:
        return !!formData.selectedNumber; // Still relevant for selection step
      case 3:
        return !!formData.businessType;
      case 4:
        return !!formData.businessSearch?.name;
      default:
        return true;
    }
  };

  const handleSubmit = async () => {
    setSubmissionPhase('submitting');
    setErrorMessage('');
    setGeneratedNumber(null); // Clear previous results
    setAgentName(null); // Clear previous results

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000)); 
      
      const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`Submission failed: ${response.status} ${response.statusText}${errorData ? ` - ${errorData}` : ''}`);
      }
      
      // --- Simulate receiving data on success --- 
      const fakeGeneratedNumber = `+${Math.floor(1000000000 + Math.random() * 9000000000)}`; // Generate random 10-digit number
      const fakeAgentName = 'Ava'; // Example agent name
      
      setGeneratedNumber(fakeGeneratedNumber);
      setAgentName(fakeAgentName);
      // --- End Simulation ---
      
      // Simulate success state transition delay
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      setSubmissionPhase('success');

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmissionPhase('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred during form submission');
    }
  };
  
  const handleRetry = () => {
    setSubmissionPhase('idle'); 
    setErrorMessage('');
    setGeneratedNumber(null);
    setAgentName(null);
  };
  
  const handleStartOver = () => {
    setHasStarted(false);
    setCurrentStep(1);
    setSubmissionPhase('idle');
    setFormData({
      country: '',
      selectedNumber: '',
      businessType: '',
      businessSearch: null,
    });
    setErrorMessage('');
    setGeneratedNumber(null); // Reset generated data
    setAgentName(null); // Reset generated data
  };

  const handleBusinessSearch = (businessInfo: { name: string; address?: string; website?: string }) => {
    updateFormData({ businessSearch: businessInfo });
    // Don't automatically move to next
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <CountrySelection value={formData.country} onChange={(country) => updateFormData({ country })} />;
      case 2:
        return <NumberSelection onSelect={handleNumberSelect} />;
      case 3:
        return <BusinessType value={formData.businessType} onChange={(businessType) => updateFormData({ businessType })} />;
      case 4:
        return <BusinessSearch 
                 initialData={formData.businessSearch}
                 onSelect={handleBusinessSearch} 
               />;
      default:
        return null;
    }
  };

  const handleGetStarted = () => {
    setHasStarted(true);
  };

  const renderSubmissionStatus = () => {
    return (
      <Card className="w-full max-w-xl p-8 glass-card text-center flex flex-col items-center justify-center min-h-[500px]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-4">
            {submissionPhase === 'submitting' && 'Building Your Number'}
            {submissionPhase === 'success' && 'Setup Complete!'}
            {submissionPhase === 'error' && 'Submission Failed'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 flex flex-col items-center">
          {submissionPhase === 'submitting' && (
            <>
              <Loader2 className="h-16 w-16 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Please wait while we configure everything...</p>
            </>
          )}
          {submissionPhase === 'success' && (
            <>
              <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
              
              {/* Display Generated Number and Agent Name */}
              <div className="space-y-3 text-left bg-muted p-4 rounded-md w-full max-w-xs">
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">Your Number:</span>
                  <span className="ml-2 text-foreground font-semibold">{generatedNumber || 'N/A'}</span>
                </p>
                 <p className="flex items-center">
                  <Bot className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium">AI Agent:</span>
                   <span className="ml-2 text-foreground font-semibold">{agentName || 'N/A'}</span>
                </p>
              </div>

              <p className="text-muted-foreground mt-4">
                Your business number and AI agent are ready! 
              </p>
              <Button onClick={handleStartOver} className="mt-6 button-glow bg-primary hover:bg-primary/90">Start New Setup</Button>
            </>
          )}
          {submissionPhase === 'error' && (
            <>
              <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
              <p className="text-destructive-foreground">
                {errorMessage || 'An unexpected error occurred.'}
              </p>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" onClick={handleRetry} className="button-glow">
                   <RefreshCcw className="mr-2 h-4 w-4" /> Try Again
                </Button>
                 <Button onClick={handleStartOver} className="button-glow bg-primary hover:bg-primary/90">Start Over</Button>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background p-4 flex items-center justify-center relative"> {/* Added relative positioning */}
      {/* Added ThemeToggle here */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {!hasStarted ? (
        // Get Started Screen
        <Card className="w-full max-w-xl p-8 glass-card text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold mb-4">Welcome!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Let's get started with setting up your business number.
            </p>
            <Button onClick={handleGetStarted} size="lg" className="w-full button-glow bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </CardContent>
        </Card>
      ) : submissionPhase !== 'idle' ? (
        // Submission Status Screen
        renderSubmissionStatus()
      ) : (
        // Multi-step Form
        <Card className="w-full max-w-xl p-8 glass-card relative flex flex-col min-h-[600px]">
          <div className="space-y-2">
            <Progress
              value={(currentStep / TOTAL_STEPS) * 100}
              className="h-1 bg-secondary"
            />
            <p className="text-sm text-muted-foreground text-right">
              Step {currentStep} of {TOTAL_STEPS}
            </p>
          </div>

          <div className="flex-grow min-h-[400px] mt-8">
            {renderStep()}
          </div>
          
          <div className="flex justify-between pt-8 mt-auto border-t border-border/20">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentStep === 1 || submissionPhase === 'submitting'}
              className="button-glow"
            >
              Back
            </Button>

            {currentStep === TOTAL_STEPS ? (
              <Button
                onClick={handleSubmit}
                disabled={!isStepValid() || submissionPhase === 'submitting'}
                className="button-glow bg-primary hover:bg-primary/90"
              >
                {submissionPhase === 'submitting' ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Building...</> 
                 ) : (
                    'Build Your Number'
                 )}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!isStepValid() || submissionPhase === 'submitting'}
                className="button-glow bg-primary hover:bg-primary/90"
              >
                Next
              </Button>
            )}
          </div>
        </Card>
      )}
    </div>
  );
}

export default App;
