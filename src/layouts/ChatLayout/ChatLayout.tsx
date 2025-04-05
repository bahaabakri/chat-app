import ChatCanvas from '../../components/ChatCanvas/ChatCanvas';
import ChatsList from '../../components/ChatsList/ChatsList';
import ChatUserInfo from '../../components/ChatUserInfo/ChatUserInfo';
import styles from './ChatLayout.module.scss'
const ChatLayout: React.FC = () => {
    return (
      <main className={styles['custom-container']}>
        <aside><ChatsList /></aside>
        <section><ChatCanvas /></section>
        <aside><ChatUserInfo /></aside>
      </main>
    );
  };
  
  export default ChatLayout;