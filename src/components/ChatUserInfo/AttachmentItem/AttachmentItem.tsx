import { Attachment } from '@/data/attachements.type';
import styles from './AttachmentItem.module.scss'


const AttachmentItem: React.FC<{attachment:Attachment}> = ({attachment}) => {
    return (
        <div className={styles['attachment']}>
            <div className={styles['image']}>
                <img src={attachment.image} alt={attachment.name} />
            </div>
            <div className='flex flex-col gap-0.5'>
                <div className={styles['attach-name']}>{attachment.name}</div>
                <div className={styles['attach-date']}>{new Date(attachment.date).toDateString() + ' ' + new Date(attachment.date).toLocaleTimeString()}</div>
            </div>
        </div>
    );  
  };
  
  export default AttachmentItem;