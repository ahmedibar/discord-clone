import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex items-center justify-between">
      <UserButton />
      <p className="text-3xl font-bold text-indigo-500">
        This is a protected route.
      </p>
      <ModeToggle />
    </div>
  );
}
