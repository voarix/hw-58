import React from "react";
import BackDrop from "./BackDrop.tsx";

interface Props extends React.PropsWithChildren {
  show?: boolean;
  title?: string;
  onClose?: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({show = false, title = "Империя будет нашей", onClose, children}) => {
  return (
    <>
      <BackDrop show={show} onClickBackDrop={onClose}/>
      <div className="modal show" style={{
        display: show ? "block" : "none",
        position: "fixed",
        width: "500px",
        height: "200px",
        overflow: "hidden",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between">
              <h1 className="modal-title fs-5">{title}</h1>
              <button className="btn-close" onClick={onClose}></button>
            </div>
            <div className="p-3">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;