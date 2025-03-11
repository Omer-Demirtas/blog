import { useAppContext } from "../providers/AppStateContext";
import Terminal from "../terminal/Terminal";
import Link from "next/link";

const HomePageContent = () => {
  const { showTerminal } = useAppContext();

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
    <div className="mt-4">
      <div className={`transition-opacity duration-500 ${showTerminal ? "opacity-100" : "opacity-0"}`}>
        {showTerminal && <Terminal commands={terminalCommands} />}
      </div>
      <div className={`transition-opacity duration-500 ${showTerminal ? "opacity-0" : "opacity-100"}`}>
        {!showTerminal && <UIPage />}
      </div>
    </div>
  );

}

export default HomePageContent;


const UIPage = () => {
  return (
    <ul className="flex flex-col items-start space-y-4">
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
  );
}