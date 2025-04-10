// components/Modal.jsx
import React, { ReactNode, useEffect, useRef } from 'react';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
  };
const Modal:React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    // Show/hide dialog based on isOpen
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;
  
      if (isOpen) {
        if (!dialog.open) dialog.showModal();
      } else {
        if (dialog.open) dialog.close();
      }
    }, [isOpen]);
  
    // Handle close event (from ESC or outside click)
    useEffect(() => {
      const dialog = dialogRef.current;
      if (!dialog) return;
  
      const handleClose = () => onClose();
      dialog.addEventListener('close', handleClose);
  
      return () => dialog.removeEventListener('close', handleClose);
    }, [onClose]);
  
  return (
    <dialog
      ref={dialogRef}
      className="rounded-xl p-6 max-w-md w-[95%] shadow-xl backdrop:bg-black/50 open:animate-fade-in"
    >
      <button
        onClick={() => dialogRef.current?.close()}
        className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl focus-visible:outline-none"
      >
        &times;
      </button>
      {children}
    </dialog>
  );
};

export default Modal;