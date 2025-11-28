import { useState } from "react";
import Header from "./header";
import MessageEditor from "./message-editor";
import MessageList from "./messages-List";
import type { Message } from "@/types/message";
import { nanoid } from "nanoid";

const user = {
  avatarUrl:
    "https://i.pinimg.com/736x/46/b4/19/46b419b6b08715da417e48056fbcfe1d.jpg",
  username: "John_doe",
  displayName: "Caima",
  isOnline: false,
};
/*
const messages: Message[] = [
  {
    id: "id-1",
    author: {
      displayName: "Jhon Does",
    },
    createdAt: new Date().toISOString(),
    text: "Hi",
    isMine: true,
  },
];
*/
export default function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  function createMessage(text: string) {
    const newMessage: Message = {
      text,
      id: nanoid(),
      author: {
        displayName: "Jhon Does",
      },
      createdAt: new Date().toISOString(),
      isMine: true,
    };

    setMessages((prev) => [newMessage, ...prev]);
  }

  function deleteMessage(id: string) {
    /*
    const filteredMessages = messages.filter((message) => {
      if (message.id === id) {
        return false;
      } else {
        return true;
      }
    });

    setMessages(filteredMessages);
*/
    setMessages(messages.filter((message) => message.id !== id));
  }

  return (
    <div className="max-w-3xl mx-auto border-x h-dvh flex flex-col">
      <div className="px-4 border-b bg-muted">
        <Header user={user} />
      </div>

      <MessageList
        className="grow px-2 py-2 overflow-auto "
        messages={messages}
        onDelete={deleteMessage}
      />
      <MessageEditor className="border-t px-2" onCreate={createMessage} />
    </div>
  );
}
