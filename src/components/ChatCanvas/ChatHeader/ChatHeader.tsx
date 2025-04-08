import ChatContext from '@/contexts/ChatContext';
import styles from './ChatHeader.module.scss'
import Avatar from '@/UI/Avatar/Avatar';
import { useContext } from 'react';
const ChatHeader: React.FC = () => {
  const {selectedUserChat} = useContext(ChatContext)
    return (
      selectedUserChat && (
        <section className={styles['chat-header-wrapper']}>
        <Avatar isOnline={selectedUserChat.isOnline} avatar={selectedUserChat.image}/>
        <div className={styles['chat-item-name']}>
            {selectedUserChat.name}
        </div>
      </section>
      )
    );
  };
  
  export default ChatHeader;