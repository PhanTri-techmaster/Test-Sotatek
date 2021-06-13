import React from 'react';
import iconsClose from '../assets/icons/cancel.svg';
import '../assets/scss/modal.scss';

function Modal({
    modal,
    setModal,
    children,
    title,
    icon = iconsClose,
    width = 400,
}) {
    return (
        <>
            {modal && (
                <div className="modal" style={{ width: width }}>
                    <div className="modal__header">
                        <h3>{title}</h3>
                        <img
                            src={icon}
                            width={24}
                            alt=""
                            onClick={() => setModal(false)}
                        />
                    </div>
                    <div className="modal__content">{children}</div>
                    <div className="modal__action"></div>
                </div>
            )}
        </>
    );
}

export default Modal;
