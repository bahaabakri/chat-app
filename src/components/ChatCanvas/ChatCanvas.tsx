import styles from './ChatCanvas.module.scss'
import ChatHeader from './ChatHeader/ChatHeader';
import ChatInput from './ChatInput/ChatInput';
import ChatMessages from './ChatMessages/ChatMessages';
const ChatCanvas: React.FC = () => {
    return (
      <section className={styles['chat-canvas-wrapper']}>
        <header><ChatHeader /></header>
        <article><ChatMessages /></article>
        <footer><ChatInput /></footer>
      </section>
    );
  };
  
  export default ChatCanvas;