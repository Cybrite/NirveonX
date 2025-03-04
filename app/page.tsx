"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-accent/20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto text-center space-y-10">
        <div className="space-y-6 animate-in fade-in duration-700">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles size={16} className="text-primary" />
            <span>Redefining the future of technology</span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white/90 to-white/60">
            NirveonX
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transforming innovation into extraordinary experiences that elevate
            human potential
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <button className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden rounded-full bg-primary text-primary-foreground font-medium transition-all hover:bg-primary/90 active:scale-95">
            <span className="mr-2">Discover More</span>
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>

          <button className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-primary/20 bg-background hover:bg-primary/5 text-primary font-medium transition-all active:scale-95">
            Our Solutions
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-16 pt-8 border-t border-border/40 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          {["Innovation", "Excellence", "Reliability", "Vision"].map(
            (value, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">{i + 1}</span>
                </div>
                <span className="text-sm font-medium">{value}</span>
              </div>
            )
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} NirveonX. All rights reserved.
      </div>
    </main>
  );
}
