import ChatContext from '@/contexts/ChatContext';
import { useContext } from 'react';
import ChatCanvas from '../../components/ChatCanvas/ChatCanvas';
import ChatsList from '../../components/ChatsList/ChatsList';
import styles from './ChatLayout.module.scss'
import { useIsMobile } from '@/hooks/useIsMobile';
const ChatLayout: React.FC = () => {
  const {selectedUserChat} = useContext(ChatContext)
  const isMobile = useIsMobile()
    return (
      <main className={styles['chat-container']}>
        <h2 className={styles['title']}>Chat</h2>
        <div className={styles['chat-content']}>
          {
            isMobile && !selectedUserChat && <aside className={styles['chat-lists-wrapper-mobile']}><ChatsList /></aside>
          }
          {
            isMobile && selectedUserChat && <section className={styles['chat-canvas-wrapper']}><ChatCanvas /></section>
          }
          {
            !isMobile &&
            <>
              <aside className={styles['chat-lists-wrapper']}><ChatsList /></aside>
              {
                selectedUserChat 
                ? <section className={styles['chat-canvas-wrapper']}><ChatCanvas /></section>
                : <p className='no-data grow'>Select conversion to start chat</p>
              }
            </>
          }

          
        </div>
      </main>
    );
  };
  
  export default ChatLayout;