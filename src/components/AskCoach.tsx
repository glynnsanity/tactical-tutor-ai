import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  type: 'user' | 'coach';
  content: string;
  timestamp: Date;
}

const AskCoach = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'coach',
      content: "Hello! I'm your chess coach. I've analyzed your recent games and I'm ready to help. You can ask me about positions, strategies, or review specific moves. What would you like to work on?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Simulate coach response
    setTimeout(() => {
      const coachResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'coach',
        content: getCoachResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, coachResponse]);
    }, 1000);
  };

  const getCoachResponse = (question: string) => {
    if (question.toLowerCase().includes('endgame')) {
      return "Great question about endgames! Based on your recent games, I notice you struggle in rook endgames. The key principle is 'rook behind the passed pawn.' Would you like me to create a specific drill for this?";
    }
    if (question.toLowerCase().includes('opening')) {
      return "I see you play the Sicilian Defense often. Your statistics show 65% wins with it, but you lose more with Black against 1.d4. Should we work on the Caro-Kann as an alternative?";
    }
    return "That's an interesting position! From your game pattern, I'd suggest focusing on piece coordination here. The knight on f6 could be better placed. Would you like to see the best continuation?";
  };

  const quickQuestions = [
    "Why did I lose my last game?",
    "How to improve in endgames?",
    "Best opening for my style?",
    "Time management tips?"
  ];

  return (
    <div className="flex flex-col h-screen pb-20">
      {/* Header */}
      <div className="p-6 bg-gradient-hero text-primary-foreground">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-coach-gold/20 rounded-lg">
            <Crown className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Ask Your Coach</h1>
            <p className="text-primary-foreground/90 text-sm">Personalized guidance from your games</p>
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="p-4 bg-secondary/30">
        <p className="text-sm text-muted-foreground mb-2">Quick questions:</p>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((q, i) => (
            <Button 
              key={i} 
              variant="secondary" 
              size="sm"
              onClick={() => setInput(q)}
              className="text-xs"
            >
              {q}
            </Button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.type === 'user' ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-lg p-3 shadow-soft",
                message.type === 'user'
                  ? "bg-coach-primary text-primary-foreground ml-4"
                  : "bg-card mr-4"
              )}
            >
              <div className="flex items-start space-x-2">
                {message.type === 'coach' && (
                  <Bot className="w-5 h-5 mt-0.5 text-coach-gold flex-shrink-0" />
                )}
                <div>
                  <p className="text-sm">{message.content}</p>
                  <p className={cn(
                    "text-xs mt-1",
                    message.type === 'user' 
                      ? "text-primary-foreground/70" 
                      : "text-muted-foreground"
                  )}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                {message.type === 'user' && (
                  <User className="w-5 h-5 mt-0.5 text-primary-foreground/70 flex-shrink-0" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-card border-t">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about positions, strategies, or your games..."
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1"
          />
          <Button 
            onClick={handleSend}
            disabled={!input.trim()}
            variant="gold"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AskCoach;