"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { Shield, Zap, Cpu, Code2 } from "lucide-react";
import { cn } from "@/root/lib/utils";
import image from "@/assets/pc.png";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skills = [
    { name: "Ruby/RoR", level: 87 },
    { name: "React", level: 95 },
    { name: "Vue", level: 80 },
    { name: "Typescript", level: 95 },
    { name: "Python", level: 97 },
    { name: "AWS", level: 84 },
    // { name: "JavaScript", level: 90 },
    { name: "CSS/TailwindCSS", level: 75 },
    // { name: "Next", level: 92 },
    // { name: "Node.js", level: 87 },
    { name: "SQL/NoSQL", level: 78 },
    // { name: "SQL", level: 80 },
    // { name: "NoSQL", level: 76 },
  ];

  const stats = [
    { value: "1+", label: "Years Experience", icon: <Shield className="h-10 w-10 text-primary" /> },
    { value: "10+", label: "Projects Completed", icon: <Code2 className="h-10 w-10 text-primary" /> },
    { value: "5+", label: "Happy Clients", icon: <Zap className="h-10 w-10 text-primary" /> },
    { value: "7+", label: "Tech Stacks", icon: <Cpu className="h-10 w-10 text-primary" /> },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-card">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div className={cn(
            "space-y-6 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <h3 className="text-2xl">
              Professional <span className="text-primary">Software Developer</span> with a passion for creating elegant solutions
            </h3>

            <p className="text-muted-foreground">
              I specialize in building modern web applications using cutting-edge technologies. With over 1 years of experience in the industry, I've developed a keen eye for detail and a commitment to writing clean, efficient, and maintainable code.
            </p>

            <p className="text-muted-foreground">
              My approach combines technical expertise with creative problem-solving to deliver solutions that not only meet but exceed client expectations. I believe in continuous learning and staying up-to-date with the latest trends and best practices in software development.
            </p>

            <div className="pt-4">
              <h4 className="text-xl mb-4">Key Skills</h4>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      {/* <span>{skill.level}%</span> */}
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-1000 ease-out"
                        style={{
                          width: isInView ? `${skill.level}%` : "0%",
                          transition: "width 1s ease-out"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats and image */}
          <div className={cn(
            "space-y-10 transition-all duration-700 delay-300",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
              <img
                src={image.src}
                alt="Developer working"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-medium">Turning ideas into reality</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    "bg-muted p-6 rounded-lg text-center transition-all duration-700",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    { "delay-300": index % 2 === 1, "delay-500": index >= 2 }
                  )}
                >
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
