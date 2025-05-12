
import React, { useState } from 'react';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  // Sample event data - in a real app, this would come from a database
  const events = [
    { id: 1, date: new Date(2025, 4, 15), title: "Growth Track: School - Assignment Due", type: "school" },
    { id: 2, date: new Date(2025, 4, 18), title: "Agriculture Session", type: "agriculture" },
    { id: 3, date: new Date(2025, 4, 20), title: "Community Meetup", type: "community" },
    { id: 4, date: new Date(2025, 4, 22), title: "Social Growth Workshop", type: "social" },
  ];

  // Get events for the selected date
  const selectedDateEvents = date 
    ? events.filter(event => 
        event.date.getDate() === date.getDate() && 
        event.date.getMonth() === date.getMonth() && 
        event.date.getFullYear() === date.getFullYear())
    : [];

  const getEventTypeColor = (type: string) => {
    switch(type) {
      case "school": return "bg-blue-100 text-blue-800";
      case "agriculture": return "bg-green-100 text-green-800";
      case "community": return "bg-purple-100 text-purple-800";
      case "social": return "bg-orange-100 text-orange-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">Growth Calendar</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Select Date</CardTitle>
            <CardDescription>View your scheduled growth activities</CardDescription>
          </CardHeader>
          <CardContent>
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>
              {date ? format(date, "MMMM d, yyyy") : "No date selected"}
            </CardTitle>
            <CardDescription>
              {selectedDateEvents.length 
                ? `${selectedDateEvents.length} activities scheduled` 
                : "No activities scheduled"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map((event) => (
                  <div key={event.id} className="flex items-center p-3 border rounded-lg">
                    <Badge className={`mr-3 ${getEventTypeColor(event.type)}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                    <span>{event.title}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No activities scheduled for this date.</p>
                <p className="mt-2 text-sm">Select a different date or add a new activity.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Calendar;
