import { UserChat } from "@/data/chat.type";
import { createContext } from "react";
type UserChatSetter = React.Dispatch<React.SetStateAction<UserChat | null>>;
interface ChatContextType {
    selectedUserChat: UserChat | null;
    setSelectedUserChat:UserChatSetter
}
const ChatContext = createContext<ChatContextType>({
    selectedUserChat: null,
    setSelectedUserChat:() => {}
});
export default ChatContext