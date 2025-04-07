import styles from './ChatsList.module.scss'
import avatar from '@/assets/avatars/male-01.jpg'
import Avatar from '@/UI/Avatar/Avatar';
import CustomTextField from '@/UI/CustomTextField/CustomTextField';
import { ChevronLeftIcon, MagnifyingGlassIcon, UserPlusIcon } from '@heroicons/react/24/outline';
const ChatsList: React.FC = () => {
    return (
      <section className={styles['chat-lists']}>
        <div className={styles['chat-lists-header']}>
          <div className={styles['avatar-wrapper']}>
            <Avatar isOnline avatar={avatar}/>
          </div>
          <div className={styles['arrow-add-wrapper']}>
            <div className={styles['arrow-wrapper']}>
              <ChevronLeftIcon />

            </div>
            <div className={styles['add-wrapper']}>
              <UserPlusIcon />
            </div>
          </div>
        </div>
        <div className={styles['chat-lists-search']}>
          <CustomTextField 
          icon={<MagnifyingGlassIcon />}
          placeholder='Search Conversation...'></CustomTextField>
        </div>
        <div className={styles['chat-lists-content']}>

        </div>
        <div></div>
      </section>
    );
  };
  
  export default ChatsList;