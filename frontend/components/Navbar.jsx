import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { NotebookPen } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="z-50 bg-blur sticky top-0 w-full border-b">
      <div className="flex w-full items-center mx-auto max-w-6xl justify-between h-16">
        <div className="flex gap-4">
          <NotebookPen />
          <Link href="/" className="font-mono font-medium tracking-wider">
            Ristek Quiz
          </Link>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
