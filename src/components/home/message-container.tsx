"use client"; // Add this line to make the component client-side rendered
import { messages } from "@/dummy-data/db";
import ChatBubble from "@/components/home/chat-bubble";
import { useTheme } from "next-themes"; // Import useTheme

const MessageContainer = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div
      className={`relative p-3 flex-1 overflow-auto h-full ${
        theme === "dark" ? "bg-chat-tile-dark" : "bg-chat-tile-light"
      }`}
    >
      <div className='mx-12 flex flex-col gap-3 h-full'>
        {messages?.map((msg, idx) => (
          <div key={msg._id}>
            <ChatBubble />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MessageContainer;