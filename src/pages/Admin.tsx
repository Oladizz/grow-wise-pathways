import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart } from "@/components/ui/charts/BarChart";
import { LineChart } from "@/components/ui/charts/LineChart";
import { PieChart } from "@/components/ui/charts/PieChart";

const Admin = () => {
  const [timeRange, setTimeRange] = useState('week');
  
  // Sample data - in a real app, this would come from analytics API
  const userData = {
    totalUsers: 256,
    activeUsers: 178,
    newUsersThisWeek: 34,
    averageEngagementTime: '26 minutes',
  };
  
  const trackUsageData = [
    { name: 'School', users: 120, color: '#3b82f6' },
    { name: 'Agriculture', users: 85, color: '#22c55e' },
    { name: 'Community & Self', users: 70, color: '#a855f7' },
    { name: 'Social Growth', users: 50, color: '#f97316' },
    { name: 'Custom Track', users: 35, color: '#64748b' },
  ];

  const weeklyActivityData = [
    { name: 'Mon', value: 45 },
    { name: 'Tue', value: 52 },
    { name: 'Wed', value: 49 },
    { name: 'Thu', value: 63 },
    { name: 'Fri', value: 58 },
    { name: 'Sat', value: 48 },
    { name: 'Sun', value: 38 },
  ];

  const monthlyGrowthData = Array.from({ length: 30 }, (_, i) => ({
    name: `${i + 1}`,
    value: Math.floor(Math.random() * 70) + 30,
  }));

  const getActivityData = () => {
    switch(timeRange) {
      case 'week': return weeklyActivityData;
      case 'month': return monthlyGrowthData;
      default: return weeklyActivityData;
    }
  };

  return (
    <div className="container py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Time Range</SelectLabel>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.totalUsers}</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.activeUsers}</div>
            <p className="text-xs text-muted-foreground">
              {Math.round((userData.activeUsers / userData.totalUsers) * 100)}% of total users
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.newUsersThisWeek}</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userData.averageEngagementTime}</div>
            <p className="text-xs text-muted-foreground">Per session</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
            <CardDescription>
              Daily active users over {timeRange === 'week' ? 'the past week' : 'the past month'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LineChart 
              data={getActivityData()}
              categories={['value']}
              index="name"
              colors={['#3b82f6']}
              valueFormatter={(value) => `${value} users`}
              className="h-[300px]"
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Track Usage</CardTitle>
            <CardDescription>Distribution of users across growth tracks</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <PieChart 
              data={trackUsageData}
              index="name"
              valueKey="users"
              colors={trackUsageData.map(item => item.color)}
              className="h-[300px]"
            />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Growth Achievements</CardTitle>
          <CardDescription>Number of achievements completed per track</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChart 
            data={[
              { track: 'School', completed: 156, inProgress: 23 },
              { track: 'Agriculture', completed: 94, inProgress: 18 },
              { track: 'Community', completed: 78, inProgress: 12 },
              { track: 'Social', completed: 65, inProgress: 15 },
              { track: 'Custom', completed: 33, inProgress: 8 },
            ]}
            index="track"
            categories={['completed', 'inProgress']}
            colors={['#22c55e', '#f59e0b']}
            valueFormatter={(value) => `${value}`}
            className="h-[300px]"
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
