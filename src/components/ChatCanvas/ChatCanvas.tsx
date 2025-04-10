import { useContext, useEffect, useState } from 'react';
import ChatUserInfo from '../ChatUserInfo/ChatUserInfo';
import styles from './ChatCanvas.module.scss'
import ChatHeader from './ChatHeader/ChatHeader';
import ChatInput from './ChatInput/ChatInput';
import ChatMessages from './ChatMessages/ChatMessages';
import ChatContext from '@/contexts/ChatContext';
import Modal from '@/UI/Modal/Modal';
import { useIsMobile } from '@/hooks/useIsMobile';
const ChatCanvas: React.FC = () => {
  const {selectedUserChat} = useContext(ChatContext)
  const [showModal, setShowModal] = useState(false);
  const isMobile = useIsMobile()
  useEffect(() => {
    const container = document.getElementById('chatMessages');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [selectedUserChat]); // Scroll to bottom when messages change
  const showUserInfo = () => {
    setShowModal(true)
  }
    return (
      <>
      <section className={styles['chat-canvas-wrapper']}>
        <header onClick={() => {isMobile && showUserInfo()}} className={styles['chat-messages-header']}>
          <ChatHeader />
        </header>
        <section className={styles['chat-messages-input-info']}>
          <section className='h-full flex'>
            <section className={styles['chat-messages-input']}>
              <section className='flex flex-col h-full'>
                <article  id="chatMessages" key={selectedUserChat?.id} className='fade-in-down-element'>
                  <ChatMessages  />
                </article>
                <footer><ChatInput /></footer>

              </section>
            </section>
            <aside className={styles['chat-user-wrapper']}><ChatUserInfo /></aside>
          </section>
          
        </section>
      </section>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="mb-4">
          <ChatUserInfo />
        </div>
      </Modal>
      </>
    );
  };
  
  export default ChatCanvas;