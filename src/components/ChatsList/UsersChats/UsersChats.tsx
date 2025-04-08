import styles from './UsersChats.module.scss'
import chatsListItems from './chats-list';
import ChatItem from './ChatItem/ChatItem';
const UsersChats: React.FC = () => {
    return (
        <ul className={styles['chat-lists-users']}>
            {
            chatsListItems.map(chatItem => <ChatItem key={chatItem.id} {...chatItem} />)
            }
      </ul>
    );
  };
  
  export default UsersChats;