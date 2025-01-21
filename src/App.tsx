import "./App.css";
import { useState } from "react";
import Modal from "./UI/Modal/Modal.tsx";
import Alert from "./UI/Alert/Alert.tsx";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const onDismiss = () => {
    setShowAlert(false);
  };

  const cancel = () => {
    setShowModal(false);
  };

  const buttons = [
    {
      type: "primary",
      label: "Continue",
      onClick: () => alert("clicked continue"),
    },
    { type: "danger",
      label: "Close",
      onClick: cancel
    },
  ];

  return (
    <>
      {showAlert ? (
        <div>
          <Alert onDismiss={onDismiss}>Бесконечность не предел</Alert>
        </div>
        ) : <button className='btn btn-secondary me-5' onClick={() => setShowAlert(true)}>Открыть Alert</button>}

      <button className='btn btn-primary' onClick={() => setShowModal(true)}>Открыть модальное окно</button>
      <Modal
        show={showModal}
        title="Это не баг, а фича"
        onClose={cancel}
        buttons={buttons}
      >
        <p>да пребудет с тобой сила</p>
      </Modal>
    </>
  );
};

export default App;
