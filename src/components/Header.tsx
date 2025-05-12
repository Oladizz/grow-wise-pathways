
import React from 'react';
import { Button } from "@/components/ui/button";
import { Bell, Award, Menu } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";

const Header = () => {
  const { toggleSidebar } = useSidebar();
  
  return (
    <header className="py-3 px-6 bg-white shadow-sm flex justify-between items-center">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar} 
          className="mr-2 md:hidden"
          aria-label="Toggle Sidebar"
        >
          <Menu className="h-5 w-5" />
        </Button>
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
