import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

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
    <div className="flex items-center gap-5 h-20 ">
      <Avatar>
        <AvatarImage
          src={user.avatarUrl || undefined}
          alt={user.username}
        ></AvatarImage>
        <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex_col ">
        <div className="flex items-center gap-5">
          <p className="text-lg font-bold"> {user.displayName} </p>
          <p className="text-sm text-teal-500">@{user.username}</p>
        </div>
        <span
          className={cn(
            "inline-flex items-center gap-2 text-sm leading-none",
            user.isOnline ? "text-green-300 " : "text-stone-400 "
          )}
        >
          <span
            className={cn(
              "size-2  rounded-full",
              user.isOnline ? "bg-green-400" : "bg-stone-400"
            )}
          />
          {user.isOnline ? "Here (˶ᵔ ᵕ ᵔ˶)" : "Not here (ᴗ˳ᴗ) ᶻ𝗓𐰁"}
        </span>
      </div>
    </div>
  );
}
