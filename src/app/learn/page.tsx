"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  description: string;
  lessons: number;
  duration: string;
}

const courses: Record<string, Course[]> = {
  beginner: [
    {
      id: "html-css-basics",
      title: "HTML & CSS Basics",
      description: "Learn the fundamentals of web development",
      lessons: 12,
      duration: "4 hours",
    },
    {
      id: "javascript-fundamentals",
      title: "JavaScript Fundamentals",
      description: "Master the core concepts of JavaScript",
      lessons: 15,
      duration: "6 hours",
    },
    {
      id: "responsive-web-design",
      title: "Responsive Web Design",
      description: "Build websites that work on any device",
      lessons: 10,
      duration: "4 hours",
    },
  ],
  intermediate: [
    {
      id: "react-basics",
      title: "React Basics",
      description: "Learn the fundamentals of React development",
      lessons: 18,
      duration: "8 hours",
    },
    {
      id: "nextjs-introduction",
      title: "Next.js Introduction",
      description: "Get started with the Next.js framework",
      lessons: 14,
      duration: "7 hours",
    },
    {
      id: "tailwind-css-mastery",
      title: "Tailwind CSS Mastery",
      description: "Master utility-first CSS with Tailwind",
      lessons: 12,
      duration: "5 hours",
    },
  ],
  advanced: [
    {
      id: "advanced-react-patterns",
      title: "Advanced React Patterns",
      description: "Explore advanced patterns and techniques in React",
      lessons: 20,
      duration: "10 hours",
    },
    {
      id: "fullstack-nextjs",
      title: "Full-Stack Next.js",
      description: "Build complete applications with Next.js",
      lessons: 25,
      duration: "12 hours",
    },
    {
      id: "performance-optimization",
      title: "Web Performance Optimization",
      description: "Make your web applications blazing fast",
      lessons: 15,
      duration: "8 hours",
    },
  ],
};

export default function LearnPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = {
    beginner: courses.beginner.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    intermediate: courses.intermediate.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    advanced: courses.advanced.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Learning Center</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Explore our comprehensive courses designed to help you master modern
          web development.
        </p>
      </div>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full max-w-md mx-auto block px-4 py-2 border rounded-md bg-background border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="beginner" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="beginner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.beginner.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="intermediate">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.intermediate.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="advanced">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.advanced.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface CourseCardProps {
  course: Course;
}

function CourseCard({ course }: CourseCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm">
          <p>{course.lessons} lessons</p>
          <p>{course.duration}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/learn/${course.id}`}>Start Course</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
