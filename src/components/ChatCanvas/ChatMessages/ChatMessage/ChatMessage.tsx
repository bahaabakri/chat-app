
import React from 'react';
import styles from './ChatMessage.module.scss'
import {ChatMessageType} from '@/data/chat.type'
const ChatMessage: React.FC<ChatMessageType> = ({type, text, messageType, fileSrc, fileName}) => {
    return (
      <li className={`${styles['chat-message-wrapper']} ${type === 'me' ? styles.me: styles.you}`}>
            <div className={styles['chat-message']}>
              {
                (messageType === 'text' && text) &&
                  text.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                      {line}
                      <br />
                      </React.Fragment>
                  ))
              }
              {
                (messageType === 'image' && fileSrc && fileName) &&
                <div className={styles['chat-image']}>
                  <img src={fileSrc} alt={fileName} />
                </div>
              }
              {
                (messageType === 'file' && fileSrc) &&
                <div className={styles['chat-image']}>
                  <iframe src={fileSrc} className="w-full h-[400px] rounded" />
                </div>
              }
            </div>


      </li>
    );
  };
  
  export default ChatMessage;