import TypeWriter from "@/components/common/TypeWriter";
import HomePageContent from "@/components/home/HomePageContent";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      <div className="container px-8 md:px-16 lg:px-32 xl:px-40 max-w-6xl pt-32 w-full">
        <TypeWriter fullText="Hello, World!" />
        
        <HomePageContent />
      </div>
    </main>
  );
}