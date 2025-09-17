import { Home, MessageCircle, BookOpen, BarChart3, GamepadIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "Coach", path: "/" },
    { icon: MessageCircle, label: "Ask Coach", path: "/ask-coach" },
    { icon: BookOpen, label: "Study Plan", path: "/study-plan" },
    { icon: GamepadIcon, label: "Review", path: "/game-review" },
    { icon: BarChart3, label: "Progress", path: "/progress" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-medium z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex flex-col items-center p-3 rounded-lg transition-smooth",
                isActive 
                  ? "text-coach-gold bg-accent/10" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;