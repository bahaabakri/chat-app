import Avatar from '@/UI/Avatar/Avatar';
import styles from './ChatItem.module.scss'
import ChatContext from '@/contexts/ChatContext';
import { useContext } from 'react';
import { UserChat } from '@/data/chat.type';
const ChatItem: React.FC<{userChat:UserChat}> = ({userChat}) => {
    const {setSelectedUserChat, selectedUserChat} = useContext(ChatContext)
    return (
      <li 
        className={`${styles['chat-item']} ${(selectedUserChat && selectedUserChat.id === userChat.id) ? styles['selected']: undefined}`}  
        onClick={() => setSelectedUserChat(userChat)}>
        <Avatar isOnline={userChat.isOnline} avatar={userChat.image}/>
        <div className={styles['chat-item-name']}>
            {userChat.name}
        </div>
      </li>
    );
  };
  
  export default ChatItem;