import React from "react";

interface Props extends React.PropsWithChildren{
  type?: string;
  onDismiss: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({type = 'primary', onDismiss, children}) => {
  return (
      <div className={`alert alert-${type} d-flex justify-content-between`} role="alert">
        {children}
        <button type='button' className='btn-close' onClick={onDismiss}></button>
      </div>
  );
};

export default Alert;
