import { useContext } from 'react';
import ChatMessage from './ChatMessage/ChatMessage';
import styles from './ChatMessages.module.scss'
import ChatContext from '@/contexts/ChatContext';
const ChatMessages: React.FC = () => {
  const {selectedUserChat} = useContext(ChatContext)
    return (
      <ul className={styles['chat-messages-wrapper']}>
        {
          (!selectedUserChat?.messages || selectedUserChat.messages.length == 0)
          ? <p className={'no-data'}>There are no messages</p>
          : selectedUserChat?.messages.map(message => <ChatMessage key={message.id} {...message}/>)
        }
        
      </ul>
    );
  };
  
  export default ChatMessages;