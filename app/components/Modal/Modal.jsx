import c from "./Modal.module.css";

export default function Modal({ children, isOpen, onClose, additionalClass }) {
  if (!isOpen) return null;

  return (
    <div className={c.cont}>
      <div className={c.modal}>
        <button className={c.closeBtn} onClick={onClose}>
          X
        </button>
        <div className={c.wrapper}>
        <div className={c.title}>GoBags <span>Materiais</span></div>
        <div className={c.modalContent}>
        {children}
        </div>
        </div>
      </div>
    </div>

  );
}
