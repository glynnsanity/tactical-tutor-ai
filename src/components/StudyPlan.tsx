import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, CheckCircle, PlayCircle, BookOpen, Target, TrendingUp } from "lucide-react";

const StudyPlan = () => {
  const studyModules = [
    {
      id: 1,
      title: "Endgame Technique",
      description: "Master fundamental endgames",
      priority: "high",
      progress: 25,
      lessons: 8,
      completedLessons: 2,
      estimatedTime: "2 hours",
      nextLesson: "King and Pawn vs King",
      icon: Target,
      status: "in-progress"
    },
    {
      id: 2, 
      title: "Positional Understanding",
      description: "Learn strategic principles",
      priority: "high",
      progress: 0,
      lessons: 12,
      completedLessons: 0,
      estimatedTime: "3 hours",
      nextLesson: "Weak Squares and Outposts",
      icon: BookOpen,
      status: "not-started"
    },
    {
      id: 3,
      title: "Time Management",
      description: "Improve your clock handling",
      priority: "medium",
      progress: 60,
      lessons: 5,
      completedLessons: 3,
      estimatedTime: "1 hour",
      nextLesson: "Critical Moments Recognition",
      icon: Clock,
      status: "in-progress"
    },
    {
      id: 4,
      title: "Tactical Patterns",
      description: "Sharpen your tactical vision",
      priority: "low",
      progress: 90,
      lessons: 10,
      completedLessons: 9,
      estimatedTime: "2.5 hours",
      nextLesson: "Advanced Deflection",
      icon: TrendingUp,
      status: "almost-complete"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string, progress: number) => {
    if (progress === 100) return <CheckCircle className="w-5 h-5 text-coach-success" />;
    if (progress > 0) return <PlayCircle className="w-5 h-5 text-coach-gold" />;
    return <BookOpen className="w-5 h-5 text-muted-foreground" />;
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="p-6 bg-gradient-hero text-primary-foreground">
        <h1 className="text-2xl font-bold mb-2">Study Plan</h1>
        <p className="text-primary-foreground/90">Personalized curriculum based on your weaknesses</p>
      </div>

      {/* Progress Overview */}
      <div className="p-6">
        <Card className="shadow-medium mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Study Plan Completion</span>
                <span className="font-medium">44%</span>
              </div>
              <Progress value={44} className="h-2" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>14 lessons completed</span>
                <span>21 lessons remaining</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Study Modules */}
        <div className="space-y-4">
          {studyModules.map((module) => {
            const Icon = module.icon;
            return (
              <Card key={module.id} className="shadow-soft hover:shadow-medium transition-smooth">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-coach-gold/10 rounded-lg">
                        <Icon className="w-5 h-5 text-coach-gold" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{module.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{module.description}</p>
                      </div>
                    </div>
                    <Badge className={getPriorityColor(module.priority)}>
                      {module.priority}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">
                        {module.completedLessons}/{module.lessons} lessons
                      </span>
                    </div>
                    <Progress value={module.progress} className="h-1.5" />
                  </div>

                  {/* Next Lesson */}
                  <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(module.status, module.progress)}
                      <div>
                        <p className="font-medium text-sm">Next: {module.nextLesson}</p>
                        <p className="text-xs text-muted-foreground">
                          Estimated: {module.estimatedTime}
                        </p>
                      </div>
                    </div>
                  <Button 
                    size="sm"
                    variant="gold"
                    className={module.progress > 0 ? "" : ""}
                  >
                      {module.progress === 0 ? "Start" : "Continue"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
            <Target className="w-6 h-6 text-coach-primary" />
            <span>Practice Drill</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
            <TrendingUp className="w-6 h-6 text-coach-primary" />
            <span>Take Quiz</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;