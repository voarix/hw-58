import "./App.css";
import { useState } from "react";
import Modal from "./UI/Modal/Modal.tsx";

const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const cancel = () => {
    setShowModal(false);
  };

  const buttons = [
    {
      type: "primary",
      label: "Continue",
      onClick: () => alert("clicked continue"),
    },
    { type: "danger", label: "Close", onClick: cancel },
  ];

  return (
    <>
      <button onClick={() => setShowModal(true)}>Открыть модальное окно</button>
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
