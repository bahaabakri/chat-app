import ChatContext from '@/contexts/ChatContext';
import { useContext } from 'react';
import styles from './ChatUserInfo.module.scss'
import { InboxIcon } from '@heroicons/react/24/outline';
import AttachmentItem from './AttachmentItem/AttachmentItem';
import attachments from '@/data/attachments';

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
          {/* <hr className={'custom-hr'}/> */}
        </div>
        
        <div className={styles['info-wrapper']}>
            <div className={styles['title']}>INFORMATION</div>
            <div className={styles['info']}>
              
              <InboxIcon width={24} height={14}/>
              <div>hr@my-company.net</div>
            </div>
            {/* <hr className={'custom-hr'}/> */}
        </div>
        
        <div className={styles['attachments-wrapper']}>
            <div className={styles['title']}>ATTACHMENTS</div>
            <div className={styles['info']}>
              {
                attachments.map(att => <AttachmentItem key={att.id} attachment={att} />)
              }

            </div>
        </div>
      </div>

    );
  };
  
  export default ChatUserInfo;