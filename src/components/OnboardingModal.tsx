
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackType: 'school' | 'agriculture' | 'community' | 'social' | 'custom' | null;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  trackType
}) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  
  const getTrackName = () => {
    switch(trackType) {
      case 'school': return 'School';
      case 'agriculture': return 'Agriculture';
      case 'community': return 'Community & Self-Growth';
      case 'social': return 'Social Growth';
      case 'custom': return 'Custom Track';
      default: return '';
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {step === 1 && "Welcome to GrowWise!"}
            {step === 2 && `Set Your ${getTrackName()} Goal`}
            {step === 3 && "Ready to Grow!"}
          </DialogTitle>
          <DialogDescription>
            {step === 1 && "Let's get started with your journey to growth."}
            {step === 2 && "What would you like to achieve in this area?"}
            {step === 3 && "Your AI-powered growth assistant is ready!"}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">What should we call you?</Label>
                <Input 
                  id="name" 
                  placeholder="Your name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
              
              <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-md">
                <div className="text-amber-600 text-sm">
                  <p className="font-medium">Would you like to save your progress?</p>
                  <p className="text-xs">Create an account or continue without login.</p>
                </div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="goal">What's your main goal?</Label>
                <Input 
                  id="goal" 
                  placeholder={trackType === 'school' ? "Example: Improve my math grade" : 
                    trackType === 'agriculture' ? "Example: Grow organic vegetables" :
                    trackType === 'community' ? "Example: Develop leadership skills" :
                    trackType === 'social' ? "Example: Grow my Twitter following" :
                    "Example: Custom goal"} 
                  value={goal} 
                  onChange={(e) => setGoal(e.target.value)} 
                />
              </div>
              
              <div className={`p-4 rounded-md bg-${trackType}-primary bg-opacity-10`}>
                <p className="text-sm"><span className="font-medium">Tip:</span> Specific, measurable goals work best!</p>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-4 text-center">
              <div className="w-20 h-20 mx-auto bg-growth-primary bg-opacity-20 rounded-full flex items-center justify-center animate-float">
                <span className="text-3xl">🌱</span>
              </div>
              
              <div>
                <p className="font-medium">Your {getTrackName()} journey is set up!</p>
                <p className="text-sm text-gray-600 mt-1">
                  Our AI will help you track progress and suggest activities
                  to help you reach your goal.
                </p>
              </div>
            </div>
          )}
        </div>
        
        <DialogFooter className="flex sm:justify-between">
          {step > 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)}>
              Back
            </Button>
          )}
          <Button type="button" onClick={handleNext}>
            {step < 3 ? "Next" : "Get Started"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;
