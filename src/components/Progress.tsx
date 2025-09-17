import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Award, Calendar, BarChart3 } from "lucide-react";

const Progress = () => {
  const skillAreas = [
    { name: "Tactics", current: 85, target: 90, color: "bg-coach-success" },
    { name: "Endgames", current: 45, target: 70, color: "bg-coach-warning" },
    { name: "Openings", current: 78, target: 85, color: "bg-coach-gold" },
    { name: "Strategy", current: 52, target: 75, color: "bg-blue-500" },
    { name: "Time Mgmt", current: 38, target: 65, color: "bg-red-500" },
  ];

  const weeklyStats = [
    { label: "Games Played", value: 23, change: "+5", positive: true },
    { label: "Win Rate", value: "67%", change: "+12%", positive: true },
    { label: "Avg Accuracy", value: "84%", change: "+3%", positive: true },
    { label: "Study Time", value: "4.2h", change: "+1.1h", positive: true },
  ];

  const achievements = [
    { title: "Tactical Master", description: "Solved 100 tactical puzzles", date: "This week", icon: Target },
    { title: "Endgame Student", description: "Completed 5 endgame lessons", date: "3 days ago", icon: Award },
    { title: "Consistent Player", description: "Played daily for 7 days", date: "Yesterday", icon: Calendar },
  ];

  const coachRating = 78;
  const nextMilestone = 80;

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="p-6 bg-gradient-hero text-primary-foreground">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-coach-gold/20 rounded-lg">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Your Progress</h1>
            <p className="text-primary-foreground/90">Track your chess improvement</p>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Coach Rating */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Coach Rating</span>
              <Badge className="bg-coach-gold/10 text-coach-gold">
                {coachRating}/100
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-secondary"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(coachRating / 100) * 352} 352`}
                    className="text-coach-gold"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-coach-primary">{coachRating}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {nextMilestone - coachRating} points to next level
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Weekly Stats */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {weeklyStats.map((stat, i) => (
                <div key={i} className="text-center p-3 bg-secondary/50 rounded-lg">
                  <p className="text-lg font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                  <p className={`text-xs font-medium ${stat.positive ? 'text-coach-success' : 'text-red-600'}`}>
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Skill Breakdown */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Skill Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {skillAreas.map((skill, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.current}/{skill.target}</span>
                </div>
                <div className="relative">
                  <ProgressBar value={(skill.current / skill.target) * 100} className="h-2" />
                  <div 
                    className={`absolute top-0 left-0 h-2 rounded-full ${skill.color}`}
                    style={{ width: `${(skill.current / skill.target) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Recent Achievements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {achievements.map((achievement, i) => {
              const Icon = achievement.icon;
              return (
                <div key={i} className="flex items-center space-x-3 p-3 bg-coach-gold/5 rounded-lg">
                  <div className="p-2 bg-coach-gold/10 rounded-lg">
                    <Icon className="w-4 h-4 text-coach-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {achievement.date}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Next Goals */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-coach-gold" />
              <span>Next Goals</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 bg-secondary/50 rounded-lg">
              <p className="font-medium text-sm">Master Rook Endgames</p>
              <p className="text-xs text-muted-foreground">Complete 3 more endgame lessons</p>
              <ProgressBar value={40} className="h-1 mt-2" />
            </div>
            <div className="p-3 bg-secondary/50 rounded-lg">
              <p className="font-medium text-sm">Improve Time Management</p>
              <p className="text-xs text-muted-foreground">Play 5 games without time trouble</p>
              <ProgressBar value={20} className="h-1 mt-2" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Progress;