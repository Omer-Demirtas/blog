import TypeWriter from "@/components/common/TypeWriter";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
<main className="flex-1 flex flex-col items-center justify-center min-h-screen p-8">
        <div className="flex gap-8 w-full max-w-6xl">
          
          <div className="w-2/3 flex flex-col justify-center gap-4">
            <TypeWriter fullText="Hello, World!" />
          </div>

          <div className="w-1/3 bg-black text-green-400 font-mono p-4 rounded-lg shadow-lg">
            <p className="text-sm">$ ls</p>
            <ul className="mt-2">
              <li>
                <Link href="/posts" className="text-blue-400 hover:underline">posts</Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-400 hover:underline">about</Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
  );
}
