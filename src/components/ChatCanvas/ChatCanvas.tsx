import { useContext, useEffect } from 'react';
import ChatUserInfo from '../ChatUserInfo/ChatUserInfo';
import styles from './ChatCanvas.module.scss'
import ChatHeader from './ChatHeader/ChatHeader';
import ChatInput from './ChatInput/ChatInput';
import ChatMessages from './ChatMessages/ChatMessages';
import ChatContext from '@/contexts/ChatContext';
const ChatCanvas: React.FC = () => {
  const {selectedUserChat} = useContext(ChatContext)
  useEffect(() => {
    const container = document.getElementById('chatMessages');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [selectedUserChat]); // Scroll to bottom when messages change
    return (
      <section className={styles['chat-canvas-wrapper']}>
        <header className={styles['chat-messages-header']}><ChatHeader /></header>
        <section className={styles['chat-messages-input-info']}>
          <section className='h-full flex'>
            <section className={styles['chat-messages-input']}>
              <section className='flex flex-col h-full'>
                <article id="chatMessages"><ChatMessages /></article>
                <footer><ChatInput /></footer>

              </section>
            </section>
            <aside className={styles['chat-user-wrapper']}><ChatUserInfo /></aside>
          </section>
          
        </section>
      </section>
    );
  };
  
  export default ChatCanvas;