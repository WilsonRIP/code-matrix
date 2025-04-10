"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
}

const resources: Resource[] = [
  // React Resources
  {
    id: "react-docs",
    title: "React Documentation",
    description:
      "Official documentation for React, a JavaScript library for building user interfaces.",
    url: "https://react.dev/",
    category: "frameworks",
    tags: ["react", "javascript", "ui"],
  },
  {
    id: "react-patterns",
    title: "React Design Patterns",
    description: "Common patterns and best practices for React development.",
    url: "https://reactpatterns.com/",
    category: "frameworks",
    tags: ["react", "patterns", "architecture"],
  },

  // Next.js Resources
  {
    id: "nextjs-docs",
    title: "Next.js Documentation",
    description:
      "Official documentation for Next.js, the React framework for production.",
    url: "https://nextjs.org/docs",
    category: "frameworks",
    tags: ["next.js", "react", "framework"],
  },
  {
    id: "nextjs-learn",
    title: "Next.js Learn Course",
    description: "Interactive course to learn Next.js step-by-step.",
    url: "https://nextjs.org/learn",
    category: "frameworks",
    tags: ["next.js", "tutorial", "course"],
  },

  // CSS Resources
  {
    id: "tailwind-docs",
    title: "Tailwind CSS Documentation",
    description:
      "Official documentation for Tailwind CSS, a utility-first CSS framework.",
    url: "https://tailwindcss.com/docs",
    category: "styling",
    tags: ["css", "tailwind", "styling"],
  },
  {
    id: "shadcn-ui",
    title: "shadcn/ui Components",
    description: "Re-usable components built using Radix UI and Tailwind CSS.",
    url: "https://ui.shadcn.com/",
    category: "styling",
    tags: ["ui", "components", "tailwind"],
  },

  // TypeScript Resources
  {
    id: "typescript-docs",
    title: "TypeScript Documentation",
    description:
      "Official documentation for TypeScript, a typed superset of JavaScript.",
    url: "https://www.typescriptlang.org/docs/",
    category: "typescript",
    tags: ["typescript", "javascript", "types"],
  },
  {
    id: "typescript-handbook",
    title: "TypeScript Handbook",
    description: "Comprehensive guide to TypeScript features and syntax.",
    url: "https://www.typescriptlang.org/docs/handbook/intro.html",
    category: "typescript",
    tags: ["typescript", "guide", "reference"],
  },

  // Tools Resources
  {
    id: "vscode",
    title: "Visual Studio Code",
    description:
      "Free source-code editor made by Microsoft for Windows, Linux and macOS.",
    url: "https://code.visualstudio.com/",
    category: "tools",
    tags: ["editor", "ide", "development"],
  },
  {
    id: "github",
    title: "GitHub",
    description: "Platform for version control and collaboration using Git.",
    url: "https://github.com/",
    category: "tools",
    tags: ["git", "version-control", "collaboration"],
  },
];

const categories = [
  { id: "all", name: "All Resources" },
  { id: "frameworks", name: "Frameworks" },
  { id: "styling", name: "CSS & Styling" },
  { id: "typescript", name: "TypeScript" },
  { id: "tools", name: "Tools" },
];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      activeCategory === "all" || resource.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Developer Resources</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Explore documentation, tools, and resources to help with your
          development journey.
        </p>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-4 mb-8">
        <div className="flex-1 min-w-[200px] max-w-md">
          <input
            type="text"
            placeholder="Search resources..."
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
          <TabsList className="grid grid-cols-3 sm:grid-cols-5">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-neutral-500">No resources found.</p>
            <Button variant="outline" className="mt-4">
              Suggest a Resource
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

interface ResourceCardProps {
  resource: Resource;
}

function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{resource.title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {resource.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{resource.description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={resource.url} target="_blank">
            Visit Resource
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
