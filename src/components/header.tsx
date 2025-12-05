import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

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
        <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-lg font-bold leading-none">{user.displayName}</p>
        <span className="text-sm text-muted-foreground leading-none">
          <span
            className={cn(
              "inline-block size-2 rounded-full mr-1",
              user.isOnline ? "bg-green-500" : "bg-red-500"
            )}
          />
          {user.isOnline ? "online" : "offline"}
        </span>
      </div>
    </div>
  );
}
