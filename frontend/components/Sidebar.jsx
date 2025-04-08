import { Filter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Sidebar() {
  return (
    <aside className="p-2 sticky top-20 mt-4 rounded-sm border-1">
      <div className="flex gap-2">
        <Input type="text" placeholder="Search for quizzes..." />
        <Button size="icon" variant="outline">
          <Filter />
        </Button>
      </div>
    </aside>
  );
}
