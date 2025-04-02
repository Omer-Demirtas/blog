"use client";

import Link from "next/link";
import ThemeToggle from "./common/ThemeToggle";
import {
  HomeIcon,
  UserIcon,
  FileTextIcon,
  MailIcon,
  GithubIcon,
  LinkedinIcon,
} from "./icons";
import DisplayModeToggle from "./common/DisplayModeToggle";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full glass-effect">
      <div className="container flex h-14 items-center justify-between">
        <nav className="flex items-center space-x-6">
          <Link href="/" className="p-2 hover:bg-primary/10 rounded-md transition-colors">
            <HomeIcon className="w-5 h-5" />
          </Link>
          <Link href="/about" className="p-2 hover:bg-primary/10 rounded-md transition-colors">
            <UserIcon className="w-5 h-5" />
          </Link>
          <Link href="/posts" className="p-2 hover:bg-primary/10 rounded-md transition-colors">
            <FileTextIcon className="w-5 h-5" />
          </Link>
          <Link href="/contact" className="p-2 hover:bg-primary/10 rounded-md transition-colors">
            <MailIcon className="w-5 h-5" />
          </Link>
        </nav>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="https://github.com/Omer-Demirtas" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-primary/10 rounded-md transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/omer-demirtas" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-primary/10 rounded-md transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            <DisplayModeToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}