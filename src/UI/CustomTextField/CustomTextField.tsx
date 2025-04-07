import { ReactNode } from 'react';
import styles from './CustomTextField.module.scss'
interface CustomTextFieldProps {
  placeholder?:string,
  children?:ReactNode,
  icon?:ReactNode
}
const CustomTextField: React.FC<CustomTextFieldProps> = ({placeholder, children, icon}) => {
    return (
      <div className={styles['custom-text-field']}>
        {icon && <div className={styles['icon']}>{icon}</div>}
        <div>
          <input type="text" placeholder={placeholder ?? ''} />
        </div>
        {children && <div>{children}</div>}
      </div>
    );
  };
  
  export default CustomTextField;