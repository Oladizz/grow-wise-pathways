
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AIRecommendationProps {
  title: string;
  description: string;
  type: 'school' | 'agriculture' | 'community' | 'social' | 'custom';
  onAccept: () => void;
  onSkip: () => void;
}

const AIRecommendation: React.FC<AIRecommendationProps> = ({
  title,
  description,
  type,
  onAccept,
  onSkip
}) => {
  return (
    <Card className="border-2 border-dashed animate-pulse-soft">
      <CardHeader className={`bg-${type}-primary bg-opacity-10 rounded-t-lg`}>
        <CardTitle className="text-lg flex items-center gap-2">
          <span className="text-primary">AI Suggestion</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <h4 className="font-medium mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={onSkip} size="sm">Skip</Button>
        <Button onClick={onAccept} size="sm">Try This</Button>
      </CardFooter>
    </Card>
  );
};

export default AIRecommendation;
