import { cn } from "@/lib/utils";
import type { Message } from "../types/message";
import { format } from "date-fns";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

interface MessageCardProps {
  message: Message;
  onDelete: (id: string) => void;
}

export default function MessageCard({ message, onDelete }: MessageCardProps) {
  return (
    <div
      className={cn(
        "border rounded-lg px-2 py-3 bg-card inline-flex flex-col gap-1 break-all",
        message.isMine
          ? "self-end bg-teal-700 border-b-emerald-500 border-b-2"
          : "self-start bg-teal-600 border-b-emerald-300 border-b-2",
        "max-w-10/12 w-fit"
      )}
    >
      <div className="inline-flex items-center justify-between gap-4 p-2 pl-3">
        <span className="font-bold text-teal-200 ">
          {message.author.displayName}
        </span>
        <span className="text-sm text-blue-2000 text-cyan-200">
          {format(message.createdAt, "do MMM, HH:mm:ss")}
        </span>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="text-cyan-400"
          onClick={() => onDelete(message.id)}
        >
          <Trash />
        </Button>
      </div>
      <p className="text-cyan-100 p-2 text-sm">{message.text}</p>
    </div>
  );
}
