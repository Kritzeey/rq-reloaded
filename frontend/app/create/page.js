import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export default function Create() {
  return (
    <div className="w-full max-w-4xl p-4 border-1 rounded-sm mt-4 mx-auto">
      <form className="w-full">
        <div className="font-semibold text-center text-4xl">Create Quiz</div>
        <div className="mt-4">
          <Label htmlFor="title">Quiz title*</Label>
          <Input id="title" placeholder="Enter quiz title" className="mt-2" />
        </div>
        <div className="mt-4">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            placeholder="Enter quiz description"
            className="mt-2"
          />
        </div>
        <div className="mt-4">
          <Label htmlFor="description">Image URL</Label>
          <Input
            id="description"
            placeholder="Enter image URL"
            className="mt-2"
          />
        </div>
        <div className="w-full mt-8 flex justify-end">
          <Button type="submit" className="mt-4">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
}
