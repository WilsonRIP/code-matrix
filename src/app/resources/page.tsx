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
      "Official documentation for React 19, with comprehensive guides on all React features and concepts.",
    url: "https://react.dev/",
    category: "frameworks",
    tags: ["react", "javascript", "ui"],
  },
  {
    id: "react-basics",
    title: "React Quick Start Guide",
    description:
      "Learn the basics of React in this interactive guide covering 80% of React concepts you'll use daily.",
    url: "https://react.dev/learn",
    category: "frameworks",
    tags: ["react", "beginners", "tutorial"],
  },
  {
    id: "react-19",
    title: "React 19: What's New",
    description:
      "Explore the latest features in React 19, including React Compiler, Server Components, and the Actions API.",
    url: "https://dev.to/im_ashish30/react-19-everything-you-need-to-know-b0b",
    category: "frameworks",
    tags: ["react", "updates", "features"],
  },
  {
    id: "react-patterns",
    title: "React Design Patterns 2025",
    description:
      "Modern React patterns and best practices for building maintainable applications.",
    url: "https://www.robinwieruch.de/learning-react/",
    category: "frameworks",
    tags: ["react", "patterns", "architecture"],
  },

  // Next.js Resources
  {
    id: "nextjs-docs",
    title: "Next.js Documentation",
    description:
      "Comprehensive guides for Next.js, covering both the App Router and Pages Router.",
    url: "https://nextjs.org/docs",
    category: "frameworks",
    tags: ["next.js", "react", "framework"],
  },
  {
    id: "nextjs-app-router",
    title: "Next.js App Router Guide",
    description:
      "Learn how to use the modern App Router in Next.js for better routing, layouts, and data fetching.",
    url: "https://nextjs.org/docs/app",
    category: "frameworks",
    tags: ["next.js", "router", "guide"],
  },
  {
    id: "nextjs-features",
    title: "Next.js 14 Features",
    description:
      "Explore the latest features in Next.js 14, including Turbopack, Server Actions, and Partial Prerendering.",
    url: "https://nextjs.org/blog/next-14",
    category: "frameworks",
    tags: ["next.js", "updates", "performance"],
  },
  {
    id: "nextjs-learn",
    title: "Next.js Learn Course",
    description:
      "Free official course teaching App Router, authentication, databases, and more.",
    url: "https://nextjs.org/learn",
    category: "frameworks",
    tags: ["next.js", "tutorial", "course"],
  },

  // Tailwind CSS Resources
  {
    id: "tailwind-docs",
    title: "Tailwind CSS 4 Documentation",
    description:
      "Official documentation for Tailwind CSS 4, covering utilities, customization, and best practices.",
    url: "https://tailwindcss.com/docs",
    category: "styling",
    tags: ["css", "tailwind", "styling"],
  },
  {
    id: "tailwind-components",
    title: "Tailwind UI Components",
    description:
      "Ready-to-use components built with Tailwind CSS by the creators of Tailwind.",
    url: "https://tailwindcss.com/",
    category: "styling",
    tags: ["ui", "components", "tailwind"],
  },
  {
    id: "tailwind-nextjs",
    title: "Next.js and Tailwind CSS Guide 2025",
    description:
      "Comprehensive guide on integrating Tailwind CSS with Next.js, including setup, best practices, and optimization.",
    url: "https://dev.to/codeparrot/nextjs-and-tailwind-css-2025-guide-setup-tips-and-best-practices-2f6h",
    category: "styling",
    tags: ["tailwind", "next.js", "integration"],
  },
  {
    id: "tailwind-best-practices",
    title: "Tailwind CSS Best Practices 2025",
    description:
      "Modern best practices for scalable and maintainable Tailwind CSS projects.",
    url: "https://www.bootstrapdash.com/blog/tailwind-css-best-practices",
    category: "styling",
    tags: ["tailwind", "best practices", "optimization"],
  },

  // TypeScript Resources
  {
    id: "typescript-docs",
    title: "TypeScript Documentation",
    description:
      "Official TypeScript documentation with tutorials, references, and guides.",
    url: "https://www.typescriptlang.org/docs/",
    category: "typescript",
    tags: ["typescript", "javascript", "types"],
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices 2025",
    description:
      "Modern TypeScript best practices to elevate your code quality and maintainability.",
    url: "https://dev.to/sovannaro/typescript-best-practices-2025-elevate-your-code-quality-1gh3",
    category: "typescript",
    tags: ["typescript", "best practices", "code quality"],
  },
  {
    id: "typescript-pro-tips",
    title: "TypeScript Pro Tips & Tricks 2025",
    description:
      "Advanced tips and techniques for mastering TypeScript in modern web development.",
    url: "https://javascript.plainenglish.io/master-typescript-in-2025-top-pro-tips-tricks-for-smarter-coding-1946ff38dbbe",
    category: "typescript",
    tags: ["typescript", "advanced", "tips"],
  },
  {
    id: "typescript-react",
    title: "TypeScript with React Guide",
    description:
      "Learn how to effectively use TypeScript with React to build type-safe applications.",
    url: "https://react.dev/learn/typescript",
    category: "typescript",
    tags: ["typescript", "react", "integration"],
  },

  // Tools Resources
  {
    id: "vscode",
    title: "Visual Studio Code",
    description:
      "The most popular code editor for web development with excellent TypeScript and React support.",
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
  {
    id: "vercel",
    title: "Vercel",
    description:
      "The platform for deploying Next.js applications with excellent performance and developer experience.",
    url: "https://vercel.com/",
    category: "tools",
    tags: ["deployment", "hosting", "next.js"],
  },
  {
    id: "figma",
    title: "Figma",
    description:
      "Collaborative design tool that integrates well with modern web development workflows.",
    url: "https://www.figma.com/",
    category: "tools",
    tags: ["design", "ui", "collaboration"],
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
          Explore the latest documentation, tools, and resources for modern web
          development in 2025.
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
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-xl">{resource.title}</CardTitle>
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
      <CardContent className="flex-grow">
        <p className="text-sm">{resource.description}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild className="w-full">
          <Link href={resource.url} target="_blank" rel="noopener noreferrer">
            Visit Resource
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
