
import React from 'react';
import { Trophy } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface AchievementBadgeProps {
  title: string;
  description: string;
  type: 'school' | 'agriculture' | 'community' | 'social' | 'custom';
  unlocked: boolean;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({
  title,
  description,
  type,
  unlocked
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            className={`achievement-badge border-${type}-primary ${
              unlocked 
                ? `bg-${type}-primary bg-opacity-20` 
                : 'bg-gray-100 border-gray-300 opacity-50'
            } cursor-pointer`}
          >
            <Trophy 
              className={`h-6 w-6 ${
                unlocked 
                  ? `text-${type}-primary` 
                  : 'text-gray-400'
              }`} 
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-xs">{description}</p>
            {!unlocked && <p className="text-xs italic mt-1">Keep growing to unlock!</p>}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AchievementBadge;
