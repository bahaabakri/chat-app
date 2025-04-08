import CustomTextField from '@/UI/CustomTextField/CustomTextField';
import styles from './ChatInput.module.scss'
import { MicrophoneIcon, PaperAirplaneIcon, PaperClipIcon, PhotoIcon } from '@heroicons/react/24/outline';
import { useContext, useRef } from 'react';
import ChatContext from '@/contexts/ChatContext';
import { ChatMessageType, UserChat } from '@/data/chat.type';
const ChatInput: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {setSelectedUserChat} = useContext(ChatContext)
  useContext
  const handleSend = () => {
    if (textareaRef.current) {
      const newMessageObj:ChatMessageType = {
        text: textareaRef.current.value,
        type: 'me',
        id: Math.floor(Math.random() * 1000) + 1
      }
      setSelectedUserChat((prev: UserChat | null) => {
        if (!prev) return prev;
        return {
          ...prev,
          messages:[
            ...prev.messages,
            newMessageObj
          ]
        }
      })
      textareaRef.current.value = ''
    }
  }
    return (
      <section className={styles['chat-input-wrapper']}>
        <CustomTextField placeholder='Type a message...' numOfRows={3} ref={textareaRef}>
          <div className={styles['chat-input-actions']}>
              <div className='upload-image'>
                <PhotoIcon />
              </div>
              <div className='send-voice'>
                <MicrophoneIcon />
              </div>
              <div className='send-attachment'>
                <PaperClipIcon />
              </div>
              <div className='send-btn'>
                <PaperAirplaneIcon onClick={handleSend}/>
              </div>
          </div>
        </CustomTextField>
      </section>
    );
  };
  
  export default ChatInput;