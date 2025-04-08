import ChatContext from '@/contexts/ChatContext';
import { useContext } from 'react';
import styles from './ChatUserInfo.module.scss'
import { InboxIcon } from '@heroicons/react/24/outline';

const ChatUserInfo: React.FC = () => {
  const {selectedUserChat} = useContext(ChatContext)
    return (
        selectedUserChat &&
        <div className={styles['user-info-wrapper']}>
        <div className={styles['avatar-wrapper']}>
          <div className={styles['avatar']}>
            <img src={selectedUserChat.image} alt={selectedUserChat.name} />
          </div>
          <div className={styles['name']}>
              {selectedUserChat.name}
          </div>
          <div className={styles['role']}>
            Software Engineer
          </div>
        </div>
        <hr className={'custom-hr'}/>
        <div className={styles['info-wrapper']}>
            <div className={styles['title']}>INFORMATION</div>
            <div className={styles['info']}>
              
              <InboxIcon width={24} height={14}/>
              <div>hr@my-company.net</div>
            </div>
        </div>
        <hr className={'custom-hr'}/>
        <div className={styles['attachments-wrapper']}>
            <div className={styles['title']}>ATTACHMENTS</div>
            <div className={styles['info']}>
              <div className={styles['attachment']}>
                <div className={styles['image']}>
                    <img src="" alt="" />
                </div>
                <div className='flex flex-col gap-0.5'>
                    <div className={styles['attach-name']}> myimage.png</div>
                    <div className={styles['attach-date']}>27 Feb 2025 10:23PM</div>
                </div>
              </div>
              <div className={styles['attachment']}></div>
              <div className={styles['attachment']}></div>
              <div className={styles['attachment']}></div>
            </div>
        </div>
      </div>

    );
  };
  
  export default ChatUserInfo;