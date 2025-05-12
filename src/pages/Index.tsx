
import React, { useState } from 'react';
import Header from '@/components/Header';
import TrackCard from '@/components/TrackCard';
import AIRecommendation from '@/components/AIRecommendation';
import AchievementBadge from '@/components/AchievementBadge';
import OnboardingModal from '@/components/OnboardingModal';
import { Book, Award, Trophy, Heart, Star, Image, List, Calendar, Clock, Flag } from 'lucide-react';

const Index = () => {
  const [selectedTrack, setSelectedTrack] = useState<'school' | 'agriculture' | 'community' | 'social' | 'custom' | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleTrackSelect = (track: 'school' | 'agriculture' | 'community' | 'social' | 'custom') => {
    setSelectedTrack(track);
    setModalOpen(true);
  };
  
  const handleModalClose = () => {
    setModalOpen(false);
  };
  
  const handleAIRecommendation = () => {
    console.log('AI recommendation accepted');
  };
  
  const skipAIRecommendation = () => {
    console.log('AI recommendation skipped');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto py-8 px-4">
        <section className="mb-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h1 className="text-3xl font-bold mb-3 text-gray-800">Track Your Growth Journey</h1>
            <p className="text-gray-600">
              Select a pathway and let our AI guide your progress with smart suggestions
              and personalized milestones.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TrackCard
              title="School"
              description="Track subjects, grades, and get AI-generated study tips for academic success."
              icon={<Book className="h-6 w-6 text-school-primary" />}
              type="school"
              onSelect={() => handleTrackSelect('school')}
            />
            
            <TrackCard
              title="Agriculture"
              description="Monitor crops, seasons, and receive smart recommendations for planting and soil care."
              icon={<Image className="h-6 w-6 text-agriculture-primary" />}
              type="agriculture"
              onSelect={() => handleTrackSelect('agriculture')}
            />
            
            <TrackCard
              title="Community & Self"
              description="Track habits, leadership skills, and emotional well-being with AI guidance."
              icon={<Heart className="h-6 w-6 text-community-primary" />}
              type="community"
              onSelect={() => handleTrackSelect('community')}
            />
            
            <TrackCard
              title="Social Growth"
              description="Build social media goals, engagement, and get content strategies from AI."
              icon={<Star className="h-6 w-6 text-social-primary" />}
              type="social"
              onSelect={() => handleTrackSelect('social')}
            />
            
            <TrackCard
              title="Custom Track"
              description="Create your own growth system with custom tasks, goals, and AI feedback."
              icon={<Flag className="h-6 w-6 text-growth-primary" />}
              type="custom"
              onSelect={() => handleTrackSelect('custom')}
            />
            
            <TrackCard
              title="Continue Journey"
              description="Resume your existing tracking path and see your recent progress."
              icon={<Calendar className="h-6 w-6 text-gray-600" />}
              type="school"
              progress={37}
              onSelect={() => console.log('Continue existing journey')}
            />
          </div>
        </section>
        
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">AI-Powered Suggestions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AIRecommendation
              title="Create a study schedule for finals"
              description="Based on your recent activity, a structured study plan could help improve your grades."
              type="school"
              onAccept={handleAIRecommendation}
              onSkip={skipAIRecommendation}
            />
            
            <AIRecommendation
              title="Try deep breathing exercises"
              description="Add a 5-minute mindfulness practice to your morning routine for better focus."
              type="community"
              onAccept={handleAIRecommendation}
              onSkip={skipAIRecommendation}
            />
            
            <AIRecommendation
              title="Create a content calendar"
              description="Planning your posts in advance can increase engagement and save time."
              type="social"
              onAccept={handleAIRecommendation}
              onSkip={skipAIRecommendation}
            />
          </div>
        </section>
        
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Achievements</h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <AchievementBadge
              title="Fast Learner"
              description="Completed 5 study sessions in a week"
              type="school"
              unlocked={true}
            />
            
            <AchievementBadge
              title="Green Thumb"
              description="Successfully grew your first crop"
              type="agriculture"
              unlocked={true}
            />
            
            <AchievementBadge
              title="Community Leader"
              description="Organized a local event"
              type="community"
              unlocked={false}
            />
            
            <AchievementBadge
              title="Content Creator"
              description="Posted 10 times in a month"
              type="social"
              unlocked={false}
            />
            
            <AchievementBadge
              title="Goal Crusher"
              description="Achieved a personal milestone"
              type="custom"
              unlocked={true}
            />
          </div>
        </section>
      </main>
      
      <footer className="bg-white py-6 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>© 2025 GrowWise | AI-Powered Progress Tracker</p>
        </div>
      </footer>
      
      <OnboardingModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        trackType={selectedTrack}
      />
    </div>
  );
};

export default Index;
