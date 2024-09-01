import TypographyH1 from "@/components/common/TypographyH1";
import TypographyH2 from "@/components/common/TypographyH2";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <TypographyH1>Hello, World</TypographyH1>
      <Link href={'/posts'}>
        <Button>posts</Button>
      </Link>
    </main>
  );
}
