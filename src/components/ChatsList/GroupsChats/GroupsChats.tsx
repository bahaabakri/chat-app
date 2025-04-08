import { GroupChat } from '@/data/chat.type';
import GroupItem from './GroupItem/GroupItem';
import styles from './GroupsChats.module.scss'
const GroupsChats: React.FC<{groupsChats:GroupChat[]}> = ({groupsChats}) => {
    return (
        <ul className={styles['chat-lists-groups']}>
            {
              groupsChats.length == 0
              ? <p className={'no-data'}>There are no conversations</p> 
              :  groupsChats.map(groupChat => <GroupItem key={groupChat.id} {...groupChat} />)
            }
      </ul>
    );
  };
  
  export default GroupsChats;