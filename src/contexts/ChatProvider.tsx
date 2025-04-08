
import { ReactNode, useState } from "react";
import ChatContext from "./ChatContext";
import { UserChat } from "@/data/chat.type";

export const ChatProvider = ({ children }: { children: ReactNode }) => {
    const [selectedUserChat, setSelectedUserChat] = useState<UserChat | null>(null);
  
    return (
      <ChatContext.Provider
        value={{ selectedUserChat, setSelectedUserChat }}
      >
        {children}
      </ChatContext.Provider>
    );
  };