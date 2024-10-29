import c from "./Modal.module.css";

export default function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={c.cont}>
      <div className={c.modal}>
        <button className={c.closeBtn} onClick={onClose}>
          X
        </button>
        {/* <div className={c.modalContent}> */}
        {children}
        {/* </div> */}
      </div>
    </div>
  );
}
