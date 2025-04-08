import { ChatProvider } from "./contexts/ChatProvider"
import ChatLayout from "./layouts/ChatLayout/ChatLayout"

function App() {

  return (
    <ChatProvider>
      <ChatLayout/>
    </ChatProvider>
  )
}

export default App
