import styles from './Avatar.module.scss'
interface AvatarProps {
    avatar:string,
    isOnline?:boolean
}
const Avatar: React.FC<AvatarProps> = ({avatar, isOnline}) => {
    return (
        <div className={styles['avatar']}>
            <img src={avatar} alt="" />
            <div 
            className={`${styles['online-marker']} ${isOnline ? 'bg-green-400' : 'bg-slate-400'}`}
            >
            </div>
        </div>
    );
  };
  
  export default Avatar;
