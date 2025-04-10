
import React, { useRef, useState } from 'react';
import styles from './ChatMessage.module.scss'
import {ChatMessageType} from '@/data/chat.type'
const ChatMessage: React.FC<ChatMessageType> = ({type, text, messageType, fileSrc, fileName}) => {
  const [iframeError, setIframeError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);


  const handleLoad = () => {
    // On successful load, we check if the content inside is valid.
    if (iframeRef.current) {
      const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
      if (iframeDoc) {
        // Check if the error message exists in the iframe body content
        if (iframeDoc.body.innerHTML.includes("no enabled plugin supports this MIME type")) {
          setIframeError(true); // Content has the error message, so it failed to load
        }
      }
    }
  };
  console.log(iframeError)
    return (
      <li className={`${styles['chat-message-wrapper']} ${type === 'me' ? styles.me: styles.you}`}>
            <div className={`${styles['chat-message']} fade-in-element`}>
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
                (
                  !iframeError ?
                  (<div className={styles['chat-image']}>
                    <iframe src={fileSrc} ref={iframeRef}
                    className="w-full h-[400px] rounded"
                    onLoad={handleLoad}
                     />
                  </div>)
                  :(<div className="text-center mt-2">
                  <p className="text-red-500 text-sm">⚠️ Failed to load preview.</p>
                  <a
                    href={fileSrc}
                    download={fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    📄 Open file manually
                  </a>
                </div>)
                )

              } {
                (messageType === 'audio' && fileSrc) &&
                (
                  <div className="space-y-2 w-full">
                  <audio controls src={fileSrc} className="w-60" />
                </div>
                )
              }
            </div>


      </li>
    );
  };
  
  export default ChatMessage;