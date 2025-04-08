import Avatar from '@/UI/Avatar/Avatar';
import styles from './ChatItem.module.scss'
import { ChatListItem } from '../../chats-list.type';
const ChatItem: React.FC<ChatListItem> = ({isOnline, name, image}) => {
    return (
      <li className={styles['chat-item']}>
        <Avatar isOnline={isOnline} avatar={image}/>
        <div className={styles['chat-item-name']}>
            {name}
        </div>
      </li>
    );
  };
  
  export default ChatItem;