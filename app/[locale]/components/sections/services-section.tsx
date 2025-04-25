"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Globe,
  Smartphone,
  ServerIcon,
  PenTool,
  LineChart,
  Search,
  Computer
} from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/root/lib/utils";
import { Button } from "../ui/button";

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      id: "web",
      title: "Web Development",
      icon: <Globe className="h-8 w-8 text-primary" />,
      description: "Building responsive, high-performance websites and web applications.",
      features: [
        "Custom website development",
        "Web application development",
        "SaaS websites",
        "Domain and hosting management",
        "Performance optimization",
        "Responsive design",
      ],
    },
    // {
    //   id: "mobile",
    //   title: "Mobile Development",
    //   icon: <Smartphone className="h-8 w-8 text-primary" />,
    //   description: "Creating engaging, native-like mobile experiences using React Native.",
    //   features: [
    //     "Cross-platform mobile apps",
    //     "iOS and Android development",
    //     "App performance optimization",
    //     "Mobile UI/UX design",
    //     "Integration with device features",
    //     "App maintenance and updates",
    //   ],
    // },
    {
      id: "Desktop",
      title: "Desktop Development",
      icon: <Computer className="h-8 w-8 text-primary" />,
      description: "Building powerful desktop applications with Electron and Tauri.",
      features: [
        "Cross-platform desktop apps",
        "Native-like performance",
        "Integration with system features",
        "Offline capabilities",
        "App store deployment",
        "User-friendly interfaces",
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      icon: <ServerIcon className="h-8 w-8 text-primary" />,
      description: "Developing robust server-side applications and APIs.",
      features: [
        "RESTful API development",
        "Database design and optimization",
        "Server configuration",
        "Authentication and authorization",
        "Microservices architecture",
        "Cloud infrastructure setup",
      ],
    },
    // {
    //   id: "ui",
    //   title: "UI/UX Design",
    //   icon: <PenTool className="h-8 w-8 text-primary" />,
    //   description: "Designing intuitive and engaging user interfaces and experiences.",
    //   features: [
    //     "User interface design",
    //     "User experience optimization",
    //     "Wireframing and prototyping",
    //     "Interactive design",
    //     "Design system creation",
    //     "Usability testing",
    //   ],
    // },
    // {
    //   id: "analytics",
    //   title: "Analytics & SEO",
    //   icon: <LineChart className="h-8 w-8 text-primary" />,
    //   description: "Improving website visibility and analyzing user behavior.",
    //   features: [
    //     "Search engine optimization",
    //     "Performance analytics",
    //     "Conversion rate optimization",
    //     "User behavior analysis",
    //     "Traffic growth strategies",
    //     "Reporting and insights",
    //   ],
    // },
    // {
    //   id: "consultation",
    //   title: "Technical Consultation",
    //   icon: <Search className="h-8 w-8 text-primary" />,
    //   description: "Providing expert advice on technical challenges and solutions.",
    //   features: [
    //     "Technology stack consultation",
    //     "Code reviews and audits",
    //     "Performance optimization",
    //     "Technical strategy planning",
    //     "Team training and workshops",
    //     "Project assessment",
    //   ],
    // },
  ];

  return (
    <section id="services" ref={ref} className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            I offer a comprehensive range of services to help bring your digital ideas to life. From concept to deployment, I've got you covered.
          </p>
        </div>

        {/* Botones de descarga de cotización web */}
        <div className="flex justify-center gap-4 mb-12">
          <Button size="lg" asChild>
            <a href="/docs/CW_FabianMiranda_en.pdf" download className="flex items-center">
              Download Quote (EN)
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/docs/CW_FabianMiranda_es.pdf" download className="flex items-center">
              Descargar Cotización (ES)
            </a>
          </Button>
        </div>

        <Tabs defaultValue="web" className="w-full">
          <div className="flex justify-center mb-8 ">
            <TabsList className="">
              {services.map((service, index) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className={cn(
                    "transition-all duration-500",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <div
                className={cn(
                  "grid md:grid-cols-3 gap-8 transition-all duration-500",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                <Card className="md:col-span-1 bg-card card-hover">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="md:col-span-2 bg-card card-hover">
                  <CardHeader>
                    <CardTitle>What's Included</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, index) => (
                        <div
                          key={index}
                          className={cn(
                            "flex items-center p-3 rounded-md bg-muted transition-all duration-500",
                            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                          )}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <div className="h-2 w-2 rounded-full bg-primary mr-3"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}