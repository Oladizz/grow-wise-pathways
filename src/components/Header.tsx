
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bell, Award } from "lucide-react";

const Header = () => {
  return (
    <header className="py-4 px-6 bg-white shadow-sm flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-growth-primary mr-2">GrowWise</h1>
        <span className="text-xs bg-growth-accent text-white px-2 py-0.5 rounded-full">Beta</span>
      </div>
      
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Achievements">
          <Award className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="sm" className="ml-2">Login</Button>
      </div>
    </header>
  );
};

export default Header;
