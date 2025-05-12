
import React from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CalendarCheck, Trophy, Star, Clock } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <Card>
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto">
                <div className="bg-growth-primary text-white w-full h-full flex items-center justify-center text-2xl font-bold">
                  JD
                </div>
              </Avatar>
              <CardTitle className="mt-4">John Doe</CardTitle>
              <CardDescription>@johndoe</CardDescription>
              
              <div className="flex justify-center gap-2 mt-2">
                <Badge variant="outline" className="bg-school-primary/10 text-school-primary">School</Badge>
                <Badge variant="outline" className="bg-agriculture-primary/10 text-agriculture-primary">Agriculture</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <CalendarCheck className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Member since</p>
                    <p className="text-sm text-muted-foreground">Jan 2023</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Achievements</p>
                    <p className="text-sm text-muted-foreground">15 Badges</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Current Level</p>
                    <p className="text-sm text-muted-foreground">Advanced Growth</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Streak</p>
                    <p className="text-sm text-muted-foreground">12 days</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Edit Profile</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="md:w-2/3">
          <Tabs defaultValue="info">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="info">Personal Info</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="info" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" defaultValue="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" defaultValue="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input id="bio" placeholder="Tell us about yourself" defaultValue="Learning enthusiast passionate about growth" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="achievements" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Achievements</CardTitle>
                  <CardDescription>Your earned badges and milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {/* We'd map through user achievements here */}
                    <div className="flex flex-col items-center p-3 border rounded-lg">
                      <Trophy className="h-10 w-10 text-school-primary mb-2" />
                      <span className="text-sm font-medium">Top Learner</span>
                      <span className="text-xs text-muted-foreground">Jan 2023</span>
                    </div>
                    <div className="flex flex-col items-center p-3 border rounded-lg">
                      <Star className="h-10 w-10 text-agriculture-primary mb-2" />
                      <span className="text-sm font-medium">Green Thumb</span>
                      <span className="text-xs text-muted-foreground">Feb 2023</span>
                    </div>
                    <div className="flex flex-col items-center p-3 border rounded-lg">
                      <CalendarCheck className="h-10 w-10 text-community-primary mb-2" />
                      <span className="text-sm font-medium">30-Day Streak</span>
                      <span className="text-xs text-muted-foreground">Mar 2023</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="activity" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your recent progress and actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* We'd map through user activities here */}
                    <div className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className="bg-school-primary/10 p-2 rounded-full">
                        <CalendarCheck className="h-5 w-5 text-school-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Completed study session</p>
                        <p className="text-xs text-muted-foreground">Mathematics - 2 hours</p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 border rounded-lg">
                      <div className="bg-agriculture-primary/10 p-2 rounded-full">
                        <CalendarCheck className="h-5 w-5 text-agriculture-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Added new crop</p>
                        <p className="text-xs text-muted-foreground">Tomato seeds planted</p>
                        <p className="text-xs text-muted-foreground">5 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
