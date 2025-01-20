import React from "react";

interface BackDropProps {
  show?: boolean;
  onClickBackDrop?: React.MouseEventHandler;
}

const BackDrop: React.FC<BackDropProps> = ({
  show = false,
  onClickBackDrop,
}) => {
  return (
    <div
      className={`modal-backdrop ${show ? "show" : ""}`}
      style={{ display: show ? "block" : "none", zIndex: 1 }}
      onClick={onClickBackDrop}
    />
  );
};

export default BackDrop;
