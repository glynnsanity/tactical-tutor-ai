import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Clock, ChevronRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/chess-coach-hero.jpg";

const CoachHome = () => {
  const styleProfile = {
    playingStyle: "Aggressive Tactician",
    rating: 1850,
    strengths: ["Sharp tactics", "Opening theory", "Attack patterns"],
    weaknesses: ["Endgame technique", "Time management", "Positional play"]
  };

  const todaysPlan = [
    { type: "lesson", title: "Rook Endgames: Opposition", time: "15 min", icon: Target },
    { type: "drill", title: "Tactical Pattern: Pin & Fork", time: "10 min", icon: TrendingUp },
    { type: "review", title: "Yesterday's Blitz Game Analysis", time: "8 min", icon: Clock }
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <div className="relative h-48 overflow-hidden bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="Chess coaching"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80" />
        <div className="relative p-6 text-primary-foreground">
          <h1 className="text-2xl font-bold mb-2">Good morning, Alex!</h1>
          <p className="text-primary-foreground/90">Ready to improve your chess today?</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Style Profile Card */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Your Playing Style</span>
              <Badge variant="secondary" className="bg-coach-gold/10 text-coach-gold">
                Rating: {styleProfile.rating}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center p-4 bg-gradient-card rounded-lg">
              <h3 className="text-lg font-semibold text-coach-primary">{styleProfile.playingStyle}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Strong in tactics, needs endgame work
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-coach-success mb-2">Strengths</h4>
                <ul className="space-y-1">
                  {styleProfile.strengths.map((strength, i) => (
                    <li key={i} className="text-muted-foreground">• {strength}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-coach-warning mb-2">Focus Areas</h4>
                <ul className="space-y-1">
                  {styleProfile.weaknesses.map((weakness, i) => (
                    <li key={i} className="text-muted-foreground">• {weakness}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Today's Plan */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Today's Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {todaysPlan.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-smooth cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-coach-gold/10 rounded-lg">
                      <Icon className="w-4 h-4 text-coach-gold" />
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
            <MessageCircle className="w-6 h-6 text-coach-primary" />
            <span>Ask Coach</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
            <Target className="w-6 h-6 text-coach-primary" />
            <span>Drill Me</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CoachHome;