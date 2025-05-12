
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send, Mic, Bot, X } from "lucide-react";

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

const SUGGESTIONS = [
  "How can I improve my learning progress?",
  "Give me tips for the agriculture track",
  "What should I focus on next?",
  "Help me set goals for this week",
  "How do I track my achievements better?"
];

// Sample responses - in a real app, these would come from an AI API
const AI_RESPONSES: Record<string, string> = {
  "default": "I'm here to help you grow! Is there something specific about your growth journey you'd like guidance on?",
  "how can i improve my learning progress?": "Looking at your current progress, I recommend focusing on completing the School track's critical thinking modules. You've made great progress in mathematics, but could benefit from more structured learning in this area. Try setting aside 20 minutes each day for the next week.",
  "give me tips for the agriculture track": "For the Agriculture track, I notice you haven't logged any activities in the past week. The current season is ideal for starting the 'Sustainable Farming' module. The community garden project on Saturday would also be a great opportunity to earn your first achievement badge in this track.",
  "what should i focus on next?": "Based on your progress patterns, I recommend focusing on the Community & Self track next. You've been consistently active in the School track, but diversifying your growth areas can lead to more holistic development. The 'Community Leadership' module would be an excellent next step.",
  "help me set goals for this week": "Looking at your schedule and past progress, here are suggested goals for this week:\n1. Complete 2 modules in the School track\n2. Attend the community workshop on Tuesday\n3. Log at least 3 reflection entries in your growth journal\n4. Connect with a mentor for a 30-minute session",
  "how do i track my achievements better?": "To better track your achievements, try using the calendar feature to schedule regular check-ins. I also recommend customizing your dashboard to show your priority growth areas at a glance. The weekly summary feature can help you identify patterns in your progress that you might miss day-to-day."
};

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi there! I'm your GrowWise AI assistant. How can I help you with your growth journey today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response with slight delay
    setTimeout(() => {
      const lowerCaseInput = inputValue.toLowerCase();
      let responseContent = AI_RESPONSES[lowerCaseInput] || AI_RESPONSES.default;
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    
    // For better UX, also immediately send the message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: suggestion,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI response with slight delay
    setTimeout(() => {
      const lowerCaseInput = suggestion.toLowerCase();
      let responseContent = AI_RESPONSES[lowerCaseInput] || AI_RESPONSES.default;
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed right-5 bottom-5 rounded-full h-14 w-14 shadow-lg"
        size="icon"
      >
        <Bot className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed right-5 bottom-5 w-[350px] sm:w-[400px] h-[500px] shadow-xl">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-t-lg">
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            GrowWise Assistant
          </CardTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 h-[calc(500px-140px)]">
        <ScrollArea className="h-full p-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'ai' && (
                <Avatar className="h-8 w-8 mr-2 bg-primary text-white flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </Avatar>
              )}
              <div 
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user' 
                    ? 'bg-primary text-primary-foreground ml-auto' 
                    : 'bg-muted'
                }`}
              >
                <p className="whitespace-pre-line">{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {message.sender === 'user' && (
                <Avatar className="h-8 w-8 ml-2 bg-zinc-700 text-white flex items-center justify-center">
                  <span className="text-xs">You</span>
                </Avatar>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center mb-4">
              <Avatar className="h-8 w-8 mr-2 bg-primary text-white flex items-center justify-center">
                <Bot className="h-4 w-4" />
              </Avatar>
              <div className="bg-muted rounded-lg p-3">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex flex-col p-3 border-t">
        <div className="flex flex-wrap gap-2 mb-3">
          {SUGGESTIONS.map((suggestion, index) => (
            <Button 
              key={index} 
              variant="outline" 
              size="sm" 
              className="text-xs py-1 h-auto"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </Button>
          ))}
        </div>
        <div className="flex w-full items-center gap-2">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me anything..."
            className="min-h-10 resize-none"
            rows={1}
          />
          <div className="flex gap-2">
            <Button
              type="submit"
              size="icon"
              disabled={!inputValue.trim() || isTyping}
              onClick={handleSendMessage}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default AIChat;
