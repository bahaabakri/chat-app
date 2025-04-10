import ChatContext from '@/contexts/ChatContext';
import styles from './ChatHeader.module.scss'
import Avatar from '@/UI/Avatar/Avatar';
import { useContext } from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { useIsMobile } from '@/hooks/useIsMobile';
const ChatHeader: React.FC = () => {
  const {selectedUserChat, setSelectedUserChat} = useContext(ChatContext)
  const isMobile = useIsMobile()
  const onReturnToChatsList = (e:React.MouseEvent<HTMLDivElement>) => { 
    e.stopPropagation()
    setSelectedUserChat(null)
  }
    return (
      selectedUserChat && (
        <section className={styles['chat-header-wrapper']}>
          <div className={styles['chat-header-left']}>
            <Avatar isOnline={selectedUserChat.isOnline} avatar={selectedUserChat.image}/>
            <div className={styles['chat-item-name']}>
                {selectedUserChat.name}
            </div>
          </div>
          {isMobile &&
          <div className={styles['back-btn']} onClick={(e) => onReturnToChatsList(e)}>
            <ArrowUturnLeftIcon />
          </div>
          
          }
      </section>
      )
    );
  };
  
  export default ChatHeader;