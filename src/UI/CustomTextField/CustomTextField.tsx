import { ChangeEvent, forwardRef, ReactNode, TextareaHTMLAttributes } from 'react';
import styles from './CustomTextField.module.scss'
interface CustomTextFieldProps {
  placeholder?:string,
  children?:ReactNode,
  icon?:ReactNode,
  numOfRows?:number,
  isHidden?:boolean
  onChangeInput?:(e:ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => void
}
type Props = CustomTextFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>;
const CustomTextField = forwardRef<HTMLTextAreaElement, Props>(({placeholder, children, icon, numOfRows, isHidden, onChangeInput}, ref) => {
    return (
      <div className={styles['custom-text-field']}>
        {icon && <div className={styles['icon']}>{icon}</div>}
        <div className={`${styles['input-wrapper']} ${isHidden ? 'hidden' : undefined}`}>
          <textarea 
          
          style={{resize:'none'}} 
          ref={ref} rows={numOfRows ?? 1} 
          placeholder={placeholder ?? ''} onChange={(e) => onChangeInput && onChangeInput(e)}></textarea> 
          
        </div>
        {children && <div className={`flex items-center gap-5 justify-between ${isHidden ? 'grow' : undefined}`}>{children}</div>}
      </div>
    );
  });
  
  export default CustomTextField;