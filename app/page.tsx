"use client";
import HomePageContent from "@/components/home/HomePageContent";
import NavBar from "@/components/NavBar";
import { AppStateProvider } from "@/components/providers/AppStateContext";

export default function Home() {
  return (
    <AppStateProvider>
      <NavBar />
      <main className="md:container md:mx-auto px-4 md:px-16 lg:px-32 xl:px-40 max-w-6xl pt-32 w-full">
        <HomePageContent />
      </main>
    </AppStateProvider>
  );
}