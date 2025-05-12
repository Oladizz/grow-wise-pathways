
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TrackCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  type: 'school' | 'agriculture' | 'community' | 'social' | 'custom';
  progress?: number;
  onSelect: () => void;
}

const TrackCard: React.FC<TrackCardProps> = ({ 
  title, 
  description, 
  icon, 
  type, 
  progress = 0,
  onSelect 
}) => {
  return (
    <div className={`track-card ${type}`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-full bg-${type}-primary bg-opacity-20 mr-4`}>
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-4 flex-grow">
          {description}
        </p>
        
        {progress > 0 && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="progress-bar">
              <div 
                className={`progress-bar-fill ${type}`} 
                style={{ width: `${progress}%` }} 
              />
            </div>
          </div>
        )}
        
        <Button 
          onClick={onSelect} 
          className={`w-full bg-${type}-primary hover:bg-${type}-secondary text-white`}
        >
          {progress > 0 ? 'Continue' : 'Get Started'}
        </Button>
      </div>
    </div>
  );
};

export default TrackCard;
