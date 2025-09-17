import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, TrendingUp, TrendingDown, AlertCircle, Clock, Crown } from "lucide-react";
import analysisIcon from "@/assets/chess-analysis-icon.jpg";

const GameReview = () => {
  const recentGames = [
    {
      id: 1,
      opponent: "ChessMaster2024",
      rating: 1876,
      result: "win",
      color: "white", 
      timeControl: "10+0",
      date: "Today",
      accuracy: 89,
      blunders: 0,
      mistakes: 2,
      keyMoments: ["Perfect opening", "Tactical breakthrough on move 23", "Clean conversion"]
    },
    {
      id: 2,
      opponent: "TacticalGuru", 
      rating: 1902,
      result: "loss",
      color: "black",
      timeControl: "15+10", 
      date: "Yesterday",
      accuracy: 76,
      blunders: 2,
      mistakes: 4,
      keyMoments: ["Solid opening", "Time trouble after move 25", "Blunder in endgame"]
    },
    {
      id: 3,
      opponent: "PositionalPlayer",
      rating: 1834,
      result: "draw", 
      color: "white",
      timeControl: "30+0",
      date: "2 days ago",
      accuracy: 92,
      blunders: 0,
      mistakes: 1,
      keyMoments: ["Strong middlegame", "Missed winning chances", "Drawn endgame"]
    }
  ];

  const getResultColor = (result: string) => {
    switch (result) {
      case 'win': return 'text-coach-success bg-coach-success/10';
      case 'loss': return 'text-red-600 bg-red-100';
      case 'draw': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 90) return 'text-coach-success';
    if (accuracy >= 80) return 'text-coach-warning';
    return 'text-red-600';
  };

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="p-6 bg-gradient-hero text-primary-foreground">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-coach-gold/20 rounded-lg">
            <Crown className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Game Review</h1>
            <p className="text-primary-foreground/90">Analyze and learn from your games</p>
          </div>
        </div>
      </div>

      {/* Analysis Overview */}
      <div className="p-6">
        <Card className="shadow-medium mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <img src={analysisIcon} alt="Analysis" className="w-6 h-6 rounded" />
              <span>Recent Performance</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-coach-success">2W</p>
                <p className="text-sm text-muted-foreground">Wins</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">1L</p>
                <p className="text-sm text-muted-foreground">Losses</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-600">1D</p>
                <p className="text-sm text-muted-foreground">Draws</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-coach-gold/10 rounded-lg">
              <p className="text-sm text-center">
                <strong>Coach Insight:</strong> You're showing improvement in tactical play, 
                but watch out for time management in longer games.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Recent Games */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recent Games</h2>
          
          {recentGames.map((game) => (
            <Card key={game.id} className="shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${game.color === 'white' ? 'bg-white border border-gray-300' : 'bg-gray-800'}`} />
                    <div>
                      <CardTitle className="text-base">vs {game.opponent}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {game.rating} • {game.timeControl} • {game.date}
                      </p>
                    </div>
                  </div>
                  <Badge className={getResultColor(game.result)}>
                    {game.result.toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Game Stats */}
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div>
                    <p className={`font-bold ${getAccuracyColor(game.accuracy)}`}>
                      {game.accuracy}%
                    </p>
                    <p className="text-muted-foreground">Accuracy</p>
                  </div>
                  <div>
                    <p className="font-bold text-red-600">{game.blunders}</p>
                    <p className="text-muted-foreground">Blunders</p>
                  </div>
                  <div>
                    <p className="font-bold text-yellow-600">{game.mistakes}</p>
                    <p className="text-muted-foreground">Mistakes</p>
                  </div>
                </div>

                {/* Key Moments */}
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Key Moments</h4>
                  {game.keyMoments.map((moment, i) => (
                    <div key={i} className="flex items-start space-x-2 text-sm">
                      {i === 0 && <TrendingUp className="w-4 h-4 text-coach-success mt-0.5" />}
                      {i === 1 && <AlertCircle className="w-4 h-4 text-coach-warning mt-0.5" />}
                      {i === 2 && <TrendingDown className="w-4 h-4 text-red-600 mt-0.5" />}
                      <span className="text-muted-foreground">{moment}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="gold" className="flex-1">
                    <PlayCircle className="w-4 h-4 mr-1" />
                    Review
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Clock className="w-4 h-4 mr-1" />
                    Replay
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
            <TrendingUp className="w-6 h-6 text-coach-primary" />
            <span>Opening Report</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
            <AlertCircle className="w-6 h-6 text-coach-primary" />
            <span>Blunder Analysis</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameReview;