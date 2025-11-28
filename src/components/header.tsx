import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";

interface HeaderProps {
  user: {
    avatarUrl: string | null;
    username: string;
    displayName: string;
    isOnline: boolean;
  };
}

export default function Header({ user }: HeaderProps) {
  return (
    <div className="flex items-center gap-4 h-16">
      <Avatar>
        <AvatarImage src={user.avatarUrl || undefined} alt={user.username} />
        <AvatarFallback>{user.username[0].toLocaleLowerCase()}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-lg font-bold leading-none">{user.displayName}</p>
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground leading-none">
          <span
            className={cn(
              "inline-block size-1.5 rounded-full",
              user.isOnline ? "bg-green-500" : "bg-neutral-500"
            )}
          />
          {user.isOnline ? "Online" : "Offline"}
        </span>
      </div>
    </div>
  );
}
