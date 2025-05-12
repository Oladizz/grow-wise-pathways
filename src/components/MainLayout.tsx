
import React from 'react';
import { Outlet } from 'react-router-dom';
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarInset
} from "@/components/ui/sidebar";
import Header from '@/components/Header';
import { Book, Image, Heart, Star, Flag, Home } from 'lucide-react';

const MainLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar variant="inset" className="shadow-md">
          <SidebarHeader className="border-b pb-2">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-growth-primary">GrowWise</h1>
              <span className="text-xs bg-growth-accent text-white px-2 py-0.5 rounded-full ml-2">Beta</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={true} tooltip="Home">
                      <a href="/">
                        <Home />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>Growth Tracks</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="School">
                      <a href="#">
                        <Book />
                        <span>School</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Agriculture">
                      <a href="#">
                        <Image />
                        <span>Agriculture</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Community & Self">
                      <a href="#">
                        <Heart />
                        <span>Community & Self</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Social Growth">
                      <a href="#">
                        <Star />
                        <span>Social Growth</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild tooltip="Custom Track">
                      <a href="#">
                        <Flag />
                        <span>Custom Track</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset className="flex flex-col">
          <Header />
          <div className="flex-1 p-4 overflow-auto">
            <Outlet />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;
