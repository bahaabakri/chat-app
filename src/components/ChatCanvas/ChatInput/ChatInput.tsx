import CustomTextField from '@/UI/CustomTextField/CustomTextField';
import styles from './ChatInput.module.scss'
import { MicrophoneIcon, PaperAirplaneIcon, PaperClipIcon, PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useContext, useRef, useState } from 'react';
import ChatContext from '@/contexts/ChatContext';
import { ChatMessageType, UserChat } from '@/data/chat.type';

interface Preview {
  type: 'file' | 'image' | 'audio';
  src:string;
  name?:string;
}

const ChatInput: React.FC = ({}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {setSelectedUserChat} = useContext(ChatContext)
  const uploadImageInput = useRef(null)
  const uploadFileInput = useRef(null)
  const [preview, setPreview] = useState<Preview | null>(null); // Holds image URL or file info

  // record voice message
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioError, setAudioError] = useState<string | null>(null)
  const audioChunks = useRef<Blob[]>([]);
  /**
   * To handle upload Image or File
   */
  const handleUpload = (e:React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;
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
    if (!preview && textareaRef.current?.value == '') return
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
      } if (preview.type === 'audio') {
        newMessageObj = {
          messageType:'audio',
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

  /**
   * Reset all files
   */
  const resetFiles = () => {
    setPreview(null);
  }

  // voice message methods
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunks.current.push(e.data);
        }
      };
  
      recorder.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setPreview({ type: 'audio', src: url });
        audioChunks.current = [];
      };
      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch(err:any) {
      console.error(err);
      setAudioError(err?.message ?? 'Something went wrong')
      setTimeout(() => {
        setAudioError(null)
      }, 5000)
    }
  };

  const stopRecording = () => {
    mediaRecorder?.stop();
    setIsRecording(false);
  };
    return (
      <section className={styles['chat-input-wrapper']}>
        <CustomTextField error={audioError ?? undefined} isHidden={preview ? true : false} placeholder='Type a message...' numOfRows={3} ref={textareaRef}>
          {/* Preview */}
          {preview && (
            <div className={`${styles['preview']} ${ preview.type === 'audio' ? styles['audio'] : undefined}`}>
              <div className={styles['x-icon']} onClick={resetFiles}>
                <XMarkIcon />
              </div>
              {preview.type === 'image' ? (
                <img
                  src={preview.src}
                  alt="preview"
                  className="w-10 h-10 rounded"
                />
              ) : ((preview.type === 'file') ? (
                <p className="text-gray-700">📄 {preview.name}</p>
              ) : (preview.type === 'audio') &&
              (
              <div className="space-y-2 w-full">
                <audio controls src={preview.src} className="w-full" />
              </div>
              )
            )
            }
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
                    <MicrophoneIcon 
                    onClick={isRecording ? stopRecording : startRecording}
                    stroke={isRecording ? 'var(--primary-color)' : 'currentColor'}
                    />
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