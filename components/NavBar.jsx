import Link from "next/link";
import ThemeToggle from "./common/ThemeToggle";
import {
  HomeIcon,
} from "./icons";
import DisplayModeToggle from "./common/DisplayModeToggle";

export default function NavBar() {
  return (
    <header className="sticky flex flex-col items-center top-0 z-50 bg-transparent backdrop-blur-md">
      <div className="container flex items-center justify-between p-4">
        <nav className="flex items-center space-x-4">
          <Link href="/" className="p-2 hover:bg-secondary/10 rounded-md">
            <HomeIcon className="w-5 h-5" />
          </Link>
        </nav>
        <div className="flex  items-center gap-4 p-2 rounded-md">
          <DisplayModeToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}