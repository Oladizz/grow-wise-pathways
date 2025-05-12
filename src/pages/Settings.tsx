
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Bell, User, Shield, Layout } from "lucide-react";

const Settings = () => {
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="account" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Account</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Layout className="h-4 w-4" />
            <span>Appearance</span>
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>Privacy</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your account details and preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" defaultValue="Alex Johnson" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="alex@example.com" />
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Input id="bio" defaultValue="Learning and growing every day." />
              </div>
              
              <div className="space-y-2">
                <Label>Primary Growth Track</Label>
                <Select defaultValue="school">
                  <SelectTrigger>
                    <SelectValue placeholder="Select your primary track" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Growth Tracks</SelectLabel>
                      <SelectItem value="school">School</SelectItem>
                      <SelectItem value="agriculture">Agriculture</SelectItem>
                      <SelectItem value="community">Community & Self</SelectItem>
                      <SelectItem value="social">Social Growth</SelectItem>
                      <SelectItem value="custom">Custom Track</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="marketing">Weekly Progress Reports</Label>
                  <Switch id="marketing" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">
                  Receive a weekly summary of your growth progress.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Manage how you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-notif">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications via email.</p>
                  </div>
                  <Switch id="email-notif" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-notif">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive in-app notifications.</p>
                  </div>
                  <Switch id="push-notif" defaultChecked />
                </div>
                
                <Separator />
                
                <div>
                  <Label>Notification Types</Label>
                  <div className="grid gap-3 mt-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="achievements" className="cursor-pointer">Growth Achievements</Label>
                      <Switch id="achievements" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="reminders" className="cursor-pointer">Task Reminders</Label>
                      <Switch id="reminders" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="messages" className="cursor-pointer">Messages</Label>
                      <Switch id="messages" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="updates" className="cursor-pointer">Platform Updates</Label>
                      <Switch id="updates" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Default</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize the look and feel of the application.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Theme</Label>
                <RadioGroup defaultValue="light" className="grid grid-cols-3 gap-4 mt-2">
                  <div>
                    <RadioGroupItem 
                      value="light" 
                      id="light" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="light" 
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-3 h-16 w-16 rounded-md bg-[#f8fafc] border"></div>
                      <p className="text-sm font-medium">Light</p>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem 
                      value="dark" 
                      id="dark" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="dark" 
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-3 h-16 w-16 rounded-md bg-[#1e293b] border"></div>
                      <p className="text-sm font-medium">Dark</p>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem 
                      value="system" 
                      id="system" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="system" 
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <div className="mb-3 h-16 w-16 rounded-md bg-gradient-to-br from-[#f8fafc] to-[#1e293b] border"></div>
                      <p className="text-sm font-medium">System</p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <Label>Accent Color</Label>
                <RadioGroup defaultValue="purple" className="grid grid-cols-5 gap-2 mt-2">
                  <div>
                    <RadioGroupItem 
                      value="purple" 
                      id="purple" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="purple" 
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#8b5cf6] text-white peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-[#8b5cf6] peer-data-[state=checked]:ring-offset-2"
                    >
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem 
                      value="blue" 
                      id="blue" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="blue" 
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#3b82f6] text-white peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-[#3b82f6] peer-data-[state=checked]:ring-offset-2"
                    >
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem 
                      value="green" 
                      id="green" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="green" 
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#22c55e] text-white peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-[#22c55e] peer-data-[state=checked]:ring-offset-2"
                    >
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem 
                      value="orange" 
                      id="orange" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="orange" 
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#f97316] text-white peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-[#f97316] peer-data-[state=checked]:ring-offset-2"
                    >
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem 
                      value="red" 
                      id="red" 
                      className="peer sr-only" 
                    />
                    <Label 
                      htmlFor="red" 
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#ef4444] text-white peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-[#ef4444] peer-data-[state=checked]:ring-offset-2"
                    >
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="animations">Enable Animations</Label>
                  <Switch id="animations" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">
                  Show animations and transitions throughout the interface.
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="compact">Compact Mode</Label>
                  <Switch id="compact" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Display more content with reduced spacing.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Reset to Default</Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Manage your privacy and data sharing preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="public-profile">Public Profile</Label>
                    <p className="text-sm text-muted-foreground">Make your profile visible to other GrowWise users.</p>
                  </div>
                  <Switch id="public-profile" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show-progress">Share Growth Progress</Label>
                    <p className="text-sm text-muted-foreground">Allow others to see your growth achievements.</p>
                  </div>
                  <Switch id="show-progress" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="data-collection">Usage Data Collection</Label>
                    <p className="text-sm text-muted-foreground">Help us improve by sharing anonymous usage data.</p>
                  </div>
                  <Switch id="data-collection" defaultChecked />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Data Export</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    Request an export of all your GrowWise data.
                  </p>
                  <Button variant="outline">Request Data Export</Button>
                </div>
                
                <div className="space-y-2">
                  <Label>Account Deletion</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    Permanently delete your account and all associated data.
                  </p>
                  <Button variant="destructive">Delete Account</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
