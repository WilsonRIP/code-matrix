import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-gradient">CodeMatrix</span>
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          A community platform for developers to learn coding, share projects,
          and access resources.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/learn">Start Learning</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/community">Join Community</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything You Need to Grow as a Developer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Learn</CardTitle>
              <CardDescription>
                Interactive tutorials and courses for all skill levels
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                From beginner to advanced topics, our learning paths guide you
                through modern development practices and technologies.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/learn">Explore Courses</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community</CardTitle>
              <CardDescription>
                Connect with developers from around the world
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Ask questions, share knowledge, and collaborate with fellow
                developers in our active community forums.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/community">Join Discussions</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Showcase</CardTitle>
              <CardDescription>
                Share your projects and get feedback
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Post your code, applications, and projects for others to try and
                provide constructive feedback.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/showcase">View Projects</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Valuable Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Documentation Hub</CardTitle>
              <CardDescription>
                Quick access to popular framework and library docs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Find comprehensive documentation for React, Next.js, Tailwind
                CSS, and many other popular technologies all in one place.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/resources">Browse Documentation</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>UI Component Library</CardTitle>
              <CardDescription>
                Ready-to-use components for your projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Save time with our collection of pre-built UI components that
                you can easily integrate into your applications.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href="/resources/components">View Components</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
