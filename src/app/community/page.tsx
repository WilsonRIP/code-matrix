"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ForumPost {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
    username: string;
  };
  createdAt: string;
  replies: number;
  views: number;
  category: string;
  excerpt: string;
}

const forumPosts: ForumPost[] = [
  {
    id: "1",
    title: "How to handle state in large React applications?",
    author: {
      name: "Alex Johnson",
      avatar: "",
      username: "alexj",
    },
    createdAt: "2 hours ago",
    replies: 15,
    views: 342,
    category: "react",
    excerpt:
      "I'm working on a large-scale React application and struggling with state management...",
  },
  {
    id: "2",
    title: "Getting started with Next.js API routes",
    author: {
      name: "Sarah Parker",
      avatar: "",
      username: "sparker",
    },
    createdAt: "5 hours ago",
    replies: 8,
    views: 215,
    category: "next",
    excerpt:
      "I'm new to Next.js and trying to set up API routes for my application...",
  },
  {
    id: "3",
    title: "Best practices for Tailwind CSS organization",
    author: {
      name: "Michael Chen",
      avatar: "",
      username: "mchen",
    },
    createdAt: "1 day ago",
    replies: 22,
    views: 518,
    category: "css",
    excerpt:
      "I'm looking for advice on how to organize my Tailwind CSS classes in a large project...",
  },
  {
    id: "4",
    title: "How to optimize image loading in Next.js?",
    author: {
      name: "Emma Wilson",
      avatar: "",
      username: "ewilson",
    },
    createdAt: "2 days ago",
    replies: 12,
    views: 287,
    category: "next",
    excerpt:
      "I'm trying to improve the performance of my Next.js application by optimizing image loading...",
  },
  {
    id: "5",
    title: "Understanding TypeScript generics",
    author: {
      name: "David Lee",
      avatar: "",
      username: "dlee",
    },
    createdAt: "3 days ago",
    replies: 19,
    views: 426,
    category: "typescript",
    excerpt:
      "I'm having trouble understanding how to properly use generics in TypeScript...",
  },
];

const categories = [
  { id: "all", name: "All Topics" },
  { id: "react", name: "React" },
  { id: "next", name: "Next.js" },
  { id: "css", name: "CSS & Styling" },
  { id: "typescript", name: "TypeScript" },
];

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts = forumPosts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Community Forums</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Connect with other developers, ask questions, and share your
          knowledge.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <button
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        activeCategory === category.id
                          ? "bg-neutral-100 dark:bg-neutral-800"
                          : "hover:bg-neutral-50 dark:hover:bg-neutral-900"
                      }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Create New Post</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="md:w-3/4">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full px-4 py-2 border rounded-md bg-background border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors duration-200"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <Card
                  key={post.id}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{post.title}</CardTitle>
                      <div className="text-sm text-neutral-500">
                        {post.createdAt}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatar} />
                        <AvatarFallback>
                          {post.author.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">
                        {post.author.name}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 text-sm text-neutral-500">
                    <div className="flex gap-4">
                      <span>{post.replies} replies</span>
                      <span>{post.views} views</span>
                    </div>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-neutral-500">No posts found.</p>
                <Button variant="outline" className="mt-4">
                  Create a New Post
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
