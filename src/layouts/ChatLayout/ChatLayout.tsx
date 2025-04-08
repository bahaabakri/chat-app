import ChatCanvas from '../../components/ChatCanvas/ChatCanvas';
import ChatsList from '../../components/ChatsList/ChatsList';
import styles from './ChatLayout.module.scss'
const ChatLayout: React.FC = () => {
    return (
      <main className={styles['chat-container']}>
        <h2 className={styles['title']}>Chat</h2>
        <div className={styles['chat-content']}>
          <aside className={styles['chat-lists-wrapper']}><ChatsList /></aside>
          <section className={styles['chat-canvas-wrapper']}><ChatCanvas /></section>
        </div>
      </main>
    );
  };
  
  export default ChatLayout;