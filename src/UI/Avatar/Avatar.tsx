import styles from './Avatar.module.scss'
interface AvatarProps {
    avatar:string,
    isOnline?:boolean,
    noBadge?:boolean,
    width?:number,
    height?:number
}
const Avatar: React.FC<AvatarProps> = ({avatar, isOnline, noBadge, width, height}) => {
    return (
        <div className={styles['avatar']}
            style={{
                width:width ?? 40,
                height: height ?? 40
            }}
        >
            <img src={avatar} alt="" />
            {!noBadge && 
                <div 
                    className={`${styles['online-marker']} ${isOnline ? 'bg-green-400' : 'bg-transparent border-2 border-slate-400'}`}
                >
                </div>
            }
        </div>
    );
  };
  
  export default Avatar;
