import ChatUserInfo from '../ChatUserInfo/ChatUserInfo';
import styles from './ChatCanvas.module.scss'
import ChatHeader from './ChatHeader/ChatHeader';
import ChatInput from './ChatInput/ChatInput';
import ChatMessages from './ChatMessages/ChatMessages';
const ChatCanvas: React.FC = () => {
    return (
      <>
        <header><ChatHeader /></header>
        <section className={styles['chat-messages-input-info']}>
          <section className={styles['chat-messages-input']}>
            <article><ChatMessages /></article>
            <footer><ChatInput /></footer>
          </section>
          <aside className={styles['chat-user-wrapper']}><ChatUserInfo /></aside>
        </section>
      </>
    );
  };
  
  export default ChatCanvas;