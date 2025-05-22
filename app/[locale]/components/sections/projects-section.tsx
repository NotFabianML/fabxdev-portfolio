"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/root/lib/utils";

//import images for projects
import LitLinkImg from "@/assets/litlink.png";
import ToolboxImg from "@/assets/toolbox.png";
import SpotifyWrappedImg from "@/assets/spotifywrapped.png";
import ChronogameImg from "@/assets/chronogame.png";
import UnvstImg from "@/assets/unvstplanner.png";
import FrontecImg from "@/assets/frontec.png";
import DozenImg from "@/assets/dozen.png";
import AniQuoteImg from "@/assets/aniquote.png";

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "LitLink",
      description:
        "A book-matching platform inspired by Tinder that recommends titles based on each user’s reading preferences.",
      image: (
        <img
          src={LitLinkImg.src}
          alt="LitLink"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ),
      technologies: [
        "Ruby on Rails",
        "Vue",
        "Nuxt",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "AWS DynamoDB",
      ],
      liveUrl: "https://litlink-cr.vercel.app/",
      githubUrl: "https://github.com/NotFabianML/LitLink",
    },
    {
      title: "Dozen",
      description:
        "A versatile document-generation platform for creating invoices, proposals, and more, empowering users to produce professional-quality documents.",
      image: (
        <img
          src={DozenImg.src}
          alt="Dozen"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ),
      technologies: [
        "React",
        "Django",
        "TailwindCSS v4",
        "Bun",
        "TypeScript",
        "Supabase"
      ],
      liveUrl: "https://dozen-cr.vercel.app/",
      githubUrl: "https://github.com/NotFabianML/Dozen"
    },
    {
      title: "Toolbox",
      description:
        "A web portal featuring a variety of everyday productivity tools to help users tackle daily tasks more efficiently.",
      image: (
        <img
          src={ToolboxImg.src}
          alt="Toolbox"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ),
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://toolbox-web-xi.vercel.app/",
      githubUrl: "https://github.com/NotFabianML/toolbox-web",
    },
    {
      title: "AniQuote",
      description:
        "A sleek app that delivers random anime quotes via a public API, offering fans fresh inspiration and nostalgia with every visit.",
      image: (
        <img
          src={AniQuoteImg.src}
          alt="AniQuote"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ),
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "API"
      ],
      liveUrl: "https://ani-quote.vercel.app/",
      githubUrl: "https://github.com/NotFabianML/AniQuote"
    },
    {
      title: "SpotifyWrapped Web",
      description:
        "A web-based spin on Spotify Wrapped that showcases personalized listening stats and highlights for each user.",
      image: (
        <img
          src={SpotifyWrappedImg.src}
          alt="Spotify Wrapped"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ),
      technologies: ["Astro", "Tailwind CSS", "TypeScript"],
      liveUrl: "https://spotify-wrapped-web.vercel.app/",
      githubUrl: "https://github.com/NotFabianML/spotify-wrapped-web",
    },
    {
      title: "ChronoGame",
      description:
        "A practice platform for cycling timekeepers to train and improve their split-timing skills.",
      image: (
        <img
          src={ChronogameImg.src}
          alt="ChronoGame"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ),
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://chrono-game-cr.vercel.app/",
      githubUrl: "https://github.com/NotFabianML/Chrono-Game",
    },
    {
      title: "Frontec",
      description:
        "A custom-built website for a client specialized in home automation, networking, and IoT solutions, featuring immersive 3D visuals and seamless user interactions.",
      image: (
        <img
          src={FrontecImg.src}
          alt="Frontec"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ),
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Node.js",
        "Three.js"
      ],
      liveUrl: "https://www.frontec-cr.com/",
      githubUrl: "https://github.com/NotFabianML/frontec-web"
    },
    {
      title: "UnvstPlanner",
      description:
        "A university study planner where students can upload courses, credits, and requirements to organize their semester schedules.",
      image: (
        <img
          src={UnvstImg.src}
          alt="UnvstPlanner"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ),
      technologies: ["React", "TypeScript", "TailwindCSS", "Node.js"],
      liveUrl: "https://unvst-planner.vercel.app/",
      githubUrl: "https://github.com/NotFabianML/unvst-planner",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore a selection of my recent projects. Each project demonstrates my approach to problem-solving and technical implementation.
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={cn(
                  "group bg-card rounded-lg overflow-hidden shadow-lg transition-all duration-700 card-hover",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  {project.image}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                      <Button size="sm" variant="default" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="h-4 w-4 mr-2" /> Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div
                    className={cn(
                      "h-full bg-card rounded-lg overflow-hidden shadow-lg transition-all duration-700 card-hover",
                      isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    )}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      {project.image}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="default" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <ExternalLink className="h-4 w-4 mr-2" /> Live
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <Github className="h-4 w-4 mr-2" /> Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative mr-2 static translate-y-0" />
              <CarouselNext className="relative ml-2 static translate-y-0" />
            </div>
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/NotFabianML" target="_blank" rel="noopener noreferrer">
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
