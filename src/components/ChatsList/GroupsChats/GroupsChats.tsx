import groupsListItems from './groups-list';
import GroupItem from './GroupItem/GroupItem';
import styles from './GroupsChats.module.scss'
const GroupsChats: React.FC = () => {
    return (
        <ul className={styles['chat-lists-groups']}>
            {
            groupsListItems.map(groupItem => <GroupItem key={groupItem.id} {...groupItem} />)
            }
      </ul>
    );
  };
  
  export default GroupsChats;