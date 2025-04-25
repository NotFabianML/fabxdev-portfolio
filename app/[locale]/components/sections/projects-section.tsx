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

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    // {
    //   title: "E-Commerce Platform",
    //   description: "A full-featured e-commerce platform with product management, cart functionality, and secure checkout.",
    //   image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
    //   technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "Task Management App",
    //   description: "A collaborative task management application with real-time updates and team collaboration features.",
    //   image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg",
    //   technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "Fitness Tracker",
    //   description: "A mobile app for tracking workouts, nutrition, and fitness progress with data visualization.",
    //   image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    //   technologies: ["React Native", "TypeScript", "GraphQL", "AWS"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "News Aggregator",
    //   description: "A personalized news aggregator that curates articles based on user preferences and reading habits.",
    //   image: "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg",
    //   technologies: ["Next.js", "NLP API", "Tailwind CSS", "Vercel"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "LitLink",
    //   description: "A tinder for books, where users can swipe through book recommendations and connect with others who share similar reading interests.",
    //   image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg",
    //   technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
    // {
    //   title: "Chat Application",
    //   description: "A real-time chat application with user authentication and group chat features.",
    //   image: "https://images.pexels.com/photos/3184402/pexels-photo-3184402.jpeg",
    //   technologies: ["React", "Socket.io", "Node.js", "Express"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    // },
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
        "Vue",
        "Nuxt",
        "TypeScript",
        "MongoDB",
        "Ruby on Rails",
        "Tailwind CSS",
      ],
      liveUrl: "https://litlink-cr.vercel.app/",
      githubUrl: "https://github.com/NotFabianML/LitLink",
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
      technologies: ["React", "TypeScript", "Tailwind CSS"],
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
