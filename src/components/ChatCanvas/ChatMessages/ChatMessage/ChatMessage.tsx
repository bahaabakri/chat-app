
import React from 'react';
import styles from './ChatMessage.module.scss'
import {ChatMessageType} from '@/data/chat.type'
const ChatMessage: React.FC<ChatMessageType> = ({type, text}) => {
    return (
      <li className={`${styles['chat-message-wrapper']} ${type === 'me' ? styles.me: styles.you}`}>
            <div className={styles['chat-message']}>
                {text.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                    {line}
                    <br />
                    </React.Fragment>
                ))}
            </div>
      </li>
    );
  };
  
  export default ChatMessage;