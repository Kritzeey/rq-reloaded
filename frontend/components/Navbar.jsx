import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { NotebookPen, PlusIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b backdrop-blur z-100">
      <div className="flex w-full items-center mx-auto max-w-6xl justify-between h-16">
        <div className="flex gap-4">
          <NotebookPen />
          <Link href="/" className="font-mono font-medium tracking-wider">
            Ristek Quiz
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href="/create">
            <Button size="icon" variant="outline">
              <PlusIcon />
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
