import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle";

const state = true;

export default function Home() {
  return (
    <div>
      <UserButton 
        afterSignOutUrl="/" 
      />
      <ModeToggle />
    </div>
  )
}
