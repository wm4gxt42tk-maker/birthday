import { Switch, Route } from "wouter";
import { useState, useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { Countdown } from "@/components/Countdown";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const getIsBeforeCountdown = () => {
    // Check if dev mode was unlocked
    if (sessionStorage.getItem("devUnlocked") === "true") {
      return false;
    }
    // Create target date: Jan 31, 2026 at 00:00:00 UK time (GMT/UTC)
    const target = new Date("2026-01-31T00:00:00Z"); // UTC midnight
    const now = new Date();
    return now.getTime() < target.getTime();
  };

  const [showCountdown, setShowCountdown] = useState(getIsBeforeCountdown());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {showCountdown ? (
          <Countdown onTimeUp={() => setShowCountdown(false)} />
        ) : (
          <Router />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
