"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, CircleUser, GraduationCap } from "lucide-react";
import { cn } from "@/root/lib/utils";
import image from "@/assets/FabxDev_isotipo.png";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-background z-0">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent"></div>
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/5 filter blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-accent/5 filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Text content */}
          <div
            className={cn(
              "md:col-span-7 space-y-6 transition-all duration-1000",
              isLoaded ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              <Code className="h-4 w-4 mr-2" />
              Software Developer
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Bridging <span className="text-gradient">Ideas</span> with Technology
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Building modern, responsive, and performant web applications with a focus on user experience and clean code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Botones para descargar CV */}
              <Button size="lg" asChild>
                <a href="/docs/CV_FabianMiranda.pdf" download>
                  Download CV (EN)
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {/* <Button size="lg" variant="outline" asChild>
                <a href="/docs/CV_FabianMiranda_es.pdf" download>
                  Descargar CV (ES)
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button> */}


              {/* Botón de Contact Me */}
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-6">
              <div className="flex items-center gap-2">
                <CircleUser className="h-5 w-5 text-primary" />
                <span className="text-sm">1+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="text-sm">Software Engineering Degree</span>
              </div>
            </div>
          </div>

          {/* Hero image or illustration */}
          <div
            className={cn(
              "md:col-span-5 transition-all duration-1000 delay-300",
              isLoaded ? "opacity-100" : "opacity-0 translate-y-10"
            )}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full animate-pulse-soft"></div>
              <div className="absolute inset-4 bg-card rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={image.src}
                  alt="Developer at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
