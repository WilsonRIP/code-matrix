"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  description: string;
  author: string;
  demoUrl: string;
  githubUrl: string;
  image: string;
  technologies: string[];
  category: string;
  likes: number;
  comments: number;
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Dashboard",
    description:
      "A modern e-commerce admin dashboard with real-time analytics and inventory management",
    author: "Jane Smith",
    demoUrl: "https://example.com/demo1",
    githubUrl: "https://github.com/janesmith/ecommerce-dashboard",
    image: "",
    technologies: ["React", "Next.js", "Tailwind", "Chart.js"],
    category: "web",
    likes: 45,
    comments: 12,
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team features",
    author: "Mark Johnson",
    demoUrl: "https://example.com/demo2",
    githubUrl: "https://github.com/markjohnson/task-manager",
    image: "",
    technologies: ["React", "Firebase", "Tailwind", "React Query"],
    category: "web",
    likes: 32,
    comments: 8,
  },
  {
    id: "3",
    title: "Weather Forecast API",
    description:
      "A RESTful API for weather forecasting with data from multiple sources",
    author: "Chris Williams",
    demoUrl: "https://example.com/demo3",
    githubUrl: "https://github.com/chriswilliams/weather-api",
    image: "",
    technologies: ["Node.js", "Express", "MongoDB", "Docker"],
    category: "api",
    likes: 28,
    comments: 15,
  },
  {
    id: "4",
    title: "Portfolio Template",
    description:
      "A customizable portfolio template for developers to showcase their work",
    author: "Emily Davis",
    demoUrl: "https://example.com/demo4",
    githubUrl: "https://github.com/emilydavis/portfolio-template",
    image: "",
    technologies: ["React", "Next.js", "Tailwind", "Framer Motion"],
    category: "template",
    likes: 56,
    comments: 23,
  },
];

const categories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Applications" },
  { id: "api", name: "APIs & Backend" },
  { id: "template", name: "Templates" },
];

export default function ShowcasePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Project Showcase</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Discover and test projects built by the community. Share your own
          creations to get feedback.
        </p>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
        <div className="flex-1 min-w-[200px] max-w-md">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full px-4 py-2 border rounded-md bg-background border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Tabs
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full md:w-auto"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <Button>Submit Project</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-neutral-500">No projects found.</p>
            <Button variant="outline" className="mt-4">
              Submit a Project
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="h-48 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-neutral-400">No preview image</div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>By {project.author}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex gap-2 text-sm text-neutral-500">
          <span>{project.likes} likes</span>
          <span>•</span>
          <span>{project.comments} comments</span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={project.demoUrl} target="_blank">
              Demo
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={project.githubUrl} target="_blank">
              GitHub
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
