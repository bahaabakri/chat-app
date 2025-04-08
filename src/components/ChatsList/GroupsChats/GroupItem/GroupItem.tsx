import styles from './GroupItem.module.scss'
import { GroupListItem } from '../../chats-list.type';
import Avatar from '@/UI/Avatar/Avatar';
const GroupItem: React.FC<GroupListItem> = ({name, image, users}) => {
    return (
      <li className={styles['group-item']}>
        <Avatar noBadge avatar={image}/>
        <div className={styles['group-item-users-name']}>
            <div className={styles['group-item-name']}>
                {name}
            </div>
            <div className={styles['group-item-users']}>
                {users.map(user => <li><Avatar width={25} height={25} noBadge avatar={user}/></li>)}
            </div>
        </div>
      </li>
    );
  };
  
  export default GroupItem;