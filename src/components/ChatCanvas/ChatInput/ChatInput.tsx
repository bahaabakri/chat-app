import CustomTextField from '@/UI/CustomTextField/CustomTextField';
import styles from './ChatInput.module.scss'
import { MicrophoneIcon, PaperAirplaneIcon, PaperClipIcon, PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useContext, useRef, useState } from 'react';
import ChatContext from '@/contexts/ChatContext';
import { ChatMessageType, UserChat } from '@/data/chat.type';

interface Preview {
  type: 'file' | 'image';
  src?:string;
  name?:string;
}

const ChatInput: React.FC = ({}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {setSelectedUserChat} = useContext(ChatContext)
  const uploadImageInput = useRef(null)
  const uploadFileInput = useRef(null)
  const [preview, setPreview] = useState<Preview | null>(null); // Holds image URL or file info
  const [file, setFile] = useState<File | null>(null); // Holds raw file
  /**
   * To handle upload Image or File
   */
  const handleUpload = (e:React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    const fileSrc = URL.createObjectURL(selectedFile);
    if (selectedFile.type.startsWith('image/')) {
      setPreview({ type: 'image', name: selectedFile.name, src: fileSrc });
    } else {
      setPreview({ type: 'file', name: selectedFile.name, src: fileSrc });
    }

  }
  /**
   * To handle send message
   */
  const handleSend = () => {
    let newMessageObj:ChatMessageType
    if (preview) {
      if (preview.type === 'image') {
        newMessageObj = {
          messageType:'image',
          fileSrc: preview.src,
          fileName: preview.name,
          type: 'me',
          id: Math.floor(Math.random() * 1000) + 1
        }
      } else if (preview.type === 'file') {
        newMessageObj = {
          messageType:'file',
          fileSrc: preview.src,
          fileName: preview.name,
          type: 'me',
          id: Math.floor(Math.random() * 1000) + 1
        }
      }
    } else {
      if (textareaRef.current) {
        newMessageObj = {
          messageType:'text',
          text: textareaRef.current.value,
          type: 'me',
          id: Math.floor(Math.random() * 1000) + 1
        }
        // handleNewMessage()
      }

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
    // reset files  and text
    if (textareaRef.current)
    textareaRef.current.value = ''
    if(preview) {
      resetFiles()
    } 
  }

  const resetFiles = () => {
    setFile(null);
    setPreview(null);
  }
    return (
      <section className={styles['chat-input-wrapper']}>
        <CustomTextField isHidden={preview ? true : false} placeholder='Type a message...' numOfRows={3} ref={textareaRef}>
          {/* Preview */}
          {preview && (
            <div className={styles['preview']}>
              <div className={styles['x-icon']} onClick={resetFiles}>
                <XMarkIcon />
              </div>
              {preview.type === 'image' ? (
                <img
                  src={preview.src}
                  alt="preview"
                  className="w-10 h-10 rounded"
                />
              ) : (
                <p className="text-gray-700">📄 {preview.name}</p>
              )}
          </div>)}
          <div className={styles['chat-input-actions']}>
              {
                !preview &&
                <>
                  <div className='upload-image'>
                    <PhotoIcon onClick={() => ((uploadImageInput.current) as any).click()}/>
                    <input type="file"
                    ref={uploadImageInput}
                    className='hidden' 
                    onChange={(e) => handleUpload(e)}
                    accept="image/*" />
                  </div>
                  <div className='send-voice'>
                    <MicrophoneIcon />
                  </div>
                  <div className='send-attachment'>
                    <PaperClipIcon onClick={() => ((uploadFileInput.current) as any).click()}/>
                    <input type="file"
                      ref={uploadFileInput}
                      className='hidden' 
                      onChange={(e) => handleUpload(e)}
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx" />
                  </div>
                </>
              }
              <div className='send-btn'>
                <PaperAirplaneIcon onClick={handleSend}/>
              </div>
          </div>
        </CustomTextField>
      </section>
    );
  };
  
  export default ChatInput;