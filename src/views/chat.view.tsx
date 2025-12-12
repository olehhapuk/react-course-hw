import { useState } from "react";
import Header from "../components/header.tsx";
import MessageEditor from "../components/message-editor.tsx";
import MessagesList from "../components/messages-list.tsx";
import type { Message } from "../types/message";
import { faker } from "@faker-js/faker";
import { nanoid } from "nanoid";

const user = {
  avatarUrl:
    "https://i.pinimg.com/736x/b4/aa/cb/b4aacbc4c45994c771ec5cbfa68382e7.jpg",
  username: "little_cutie",
  displayName: "Lily Rose",
  isOnline: false,
};

const messages: Message[] = Array.from({ length: 100 }).map((_) => {
  const isMine = faker.datatype.boolean();
  return {
    id: "id-${i}",
    author: {
      displayName: isMine ? "Ayanami Rei" : "Lily Rose",
    },
    createdAt: faker.date.past().toISOString(),
    text: faker.lorem.text(),
    isMine: isMine,
  };
});

messages.sort(
  (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
);

export default function ChatView() {
  const [messages, setMessages] = useState<Message[]>([]);

  function createMessage(text: string) {
    if (text.trim().length < 1) return;
    const newMessage: Message = {
      text,
      id: nanoid(),
      author: { displayName: "Ayanami Rei" },
      createdAt: new Date().toISOString(),
      isMine: true,
    };

    setMessages([newMessage, ...messages]);
  }

  function deleteMessage(id: string) {
    const filteredMessage = messages.filter((message) => {
      if (message.id === id) {
        return false;
      } else {
        return true;
      }
    });
    setMessages(filteredMessage);
  }

  // setMessages(messages.filter((message) => message.id !== id));

  return (
    <div className="max-w-3xl mx-auto border-x h-dvh flex flex-col bg-cyan-600">
      <div className="px-6 border-b bg-cyan-700 ">
        <Header user={user}></Header>
      </div>
      <MessagesList
        className="grow px-4 py-3 overflow-auto"
        messages={messages}
        onDelete={deleteMessage}
      />
      <MessageEditor
        className="border-t px-2"
        onCreate={createMessage}
      ></MessageEditor>
    </div>
  );
}
