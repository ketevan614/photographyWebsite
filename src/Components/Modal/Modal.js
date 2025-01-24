import './modal.css'
const Modal = ({ isOpen, image, onClose, onPrev, onNext }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>&times;</button>
          <button className="prev-btn" onClick={onPrev}>&larr;</button>
          <img src={image} alt="Full screen view" />
          <button className="next-btn" onClick={onNext}>&rarr;</button>
        </div>
      </div>
    );
  };
  export default Modal;