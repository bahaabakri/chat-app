import styles from './UsersChats.module.scss'
import ChatItem from './ChatItem/ChatItem';
import { UserChat } from '@/data/chat.type';
const UsersChats: React.FC<{usersChats:UserChat[]}> = ({usersChats}) => {
    return (
        <ul className={styles['chat-lists-users']}>
            {
            usersChats.length == 0 
            ? <p className={'no-data'}>There are no conversations</p> 
            : usersChats.map(userChat => <ChatItem key={userChat.id} userChat={userChat} />)
            }
      </ul>
    );
  };
  
  export default UsersChats;