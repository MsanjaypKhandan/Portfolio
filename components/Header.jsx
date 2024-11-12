import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed py-8 xl:py-8 bg-primary text-white ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden xl:flex items-center gap-8">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Sk <span className="text-accent">.</span>
          </h1>
        </Link>
        <ThemeToggle />
        </div>
      

        {/* wide screen nav */}
        <div className="hidden xl:flex items-center gap-8">
      
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile screen nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
