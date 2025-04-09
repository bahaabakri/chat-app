import ChatContext from '@/contexts/ChatContext';
import { useContext } from 'react';
import ChatCanvas from '../../components/ChatCanvas/ChatCanvas';
import ChatsList from '../../components/ChatsList/ChatsList';
import styles from './ChatLayout.module.scss'
const ChatLayout: React.FC = () => {
  const {selectedUserChat} = useContext(ChatContext)
    return (
      <main className={styles['chat-container']}>
        <h2 className={styles['title']}>Chat</h2>
        <div className={styles['chat-content']}>
          <aside className={styles['chat-lists-wrapper']}><ChatsList /></aside>
          {
            selectedUserChat 
            ? <section className={styles['chat-canvas-wrapper']}><ChatCanvas /></section>
            : <p className='no-data grow'>Select conversion to start chat</p>
          }
          
        </div>
      </main>
    );
  };
  
  export default ChatLayout;