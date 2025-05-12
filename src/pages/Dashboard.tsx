
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Calendar, CalendarDays, Award, Target, Clock, ArrowUp, ArrowDown } from "lucide-react";

// Sample data for charts
const weeklyData = [
  { name: 'Mon', hours: 2 },
  { name: 'Tue', hours: 3 },
  { name: 'Wed', hours: 1 },
  { name: 'Thu', hours: 4 },
  { name: 'Fri', hours: 2 },
  { name: 'Sat', hours: 3 },
  { name: 'Sun', hours: 5 },
];

const progressData = [
  { name: 'School', value: 65, color: '#4CAF50' },
  { name: 'Agriculture', value: 45, color: '#8BC34A' },
  { name: 'Community', value: 30, color: '#FF5722' },
  { name: 'Social', value: 80, color: '#2196F3' },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Your Growth Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Weekly Streak</CardDescription>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">5 Days</CardTitle>
              <Clock className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={71} className="h-2" />
            <div className="mt-2 text-xs text-muted-foreground flex items-center">
              <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
              <span>2 days more than last week</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Hours</CardDescription>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">24.5</CardTitle>
              <Clock className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={85} className="h-2" />
            <div className="mt-2 text-xs text-muted-foreground flex items-center">
              <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
              <span>3.2 hours more than last week</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Achievements</CardDescription>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">12</CardTitle>
              <Award className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={60} className="h-2" />
            <div className="mt-2 text-xs text-muted-foreground flex items-center">
              <ArrowUp className="h-3 w-3 mr-1 text-green-500" />
              <span>2 new this month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Completed Goals</CardDescription>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">8/15</CardTitle>
              <Target className="h-5 w-5 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent>
            <Progress value={53} className="h-2" />
            <div className="mt-2 text-xs text-muted-foreground flex items-center">
              <ArrowDown className="h-3 w-3 mr-1 text-red-500" />
              <span>1 less than target</span>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Weekly Activity</CardTitle>
            <CardDescription>Hours spent on growth activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="hours" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Growth Distribution</CardTitle>
            <CardDescription>Progress across different tracks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={progressData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {progressData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Milestones</CardTitle>
            <CardDescription>Goals that are closest to completion</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Tracks</TabsTrigger>
                <TabsTrigger value="school">School</TabsTrigger>
                <TabsTrigger value="agriculture">Agriculture</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-4">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="bg-school-primary/10 p-1 rounded">
                            <Calendar className="h-4 w-4 text-school-primary" />
                          </div>
                          <span className="text-sm font-medium">Complete Math Chapter 5</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">School Track • Due in 3 days</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium">85%</span>
                        <Progress value={85} className="h-2 w-24" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="bg-agriculture-primary/10 p-1 rounded">
                            <CalendarDays className="h-4 w-4 text-agriculture-primary" />
                          </div>
                          <span className="text-sm font-medium">Harvest First Tomatoes</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Agriculture Track • 1 week left</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium">65%</span>
                        <Progress value={65} className="h-2 w-24" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="bg-community-primary/10 p-1 rounded">
                            <Target className="h-4 w-4 text-community-primary" />
                          </div>
                          <span className="text-sm font-medium">Complete 30-Day Meditation</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Community Track • 12 days left</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium">60%</span>
                        <Progress value={60} className="h-2 w-24" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="school" className="mt-4">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="bg-school-primary/10 p-1 rounded">
                            <Calendar className="h-4 w-4 text-school-primary" />
                          </div>
                          <span className="text-sm font-medium">Complete Math Chapter 5</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">School Track • Due in 3 days</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium">85%</span>
                        <Progress value={85} className="h-2 w-24" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Additional tabs content would go here */}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
