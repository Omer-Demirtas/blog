import TypeWriter from "@/components/common/TypeWriter";
import Terminal from "@/components/terminal/Terminal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const terminalCommands = {
    ls: {
      output: (
        <ul>
          <li>
            <Link href="/posts" className="text-blue-400 hover:underline">posts</Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-400 hover:underline">about</Link>
          </li>
        </ul>
      ),
      description: "List available directories."
    },
    hello: {
      output: "Hello, world!",
      description: "Prints a greeting."
    },
    version: {
      output: "v1.0.0",
      description: "Displays the current version."
    }
  };

  return (
    <main className="flex flex-col items-center h-screen">
      <div className="container px-8 md:px-16 max-w-2xl pt-32">
        <TypeWriter fullText="Hello, World!" />
        <ul className="flex flex-col items-start mt-2 space-y-4">
          <li>
            <Link
              href="/about"
              className="text-3xl font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className="text-3xl font-semibold text-primary hover:text-primary/80 transition-colors duration-200"
            >
              Posts
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}