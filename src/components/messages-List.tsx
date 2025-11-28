import type { Message } from "@/types/message";
import { cn } from "@/lib/utils";
import MessageCard from "./message-card";

interface MessageListProps {
  messages: Message[];
  className?: string;
  onDelete: (id: string) => void;
}
export default function MessageList({
  messages,
  className,
  onDelete,
}: MessageListProps) {
  return (
    <div className={cn("flex flex-col-reverse items-start gap-2", className)}>
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} onDelete={onDelete} />
      ))}
    </div>
  );
}
