import { createContext, useState } from 'react';

const LineItemContext = createContext();

function LineItemProvider({ children }) {
  // Modal to add a new Line Action
  const [openModal, setOpenModal] = useState(false);

  // Line Action to add
  const [newLineAction, setNewLineAction] = useState({});

  // Line Actions own user
  const [myLineActions, setMyLineActions] = useState([]);

  return (
    <LineItemContext.Provider value={{
      openModal,
      setOpenModal,
      newLineAction,
      setNewLineAction,
      myLineActions,
      setMyLineActions
    }}>
      {children}
    </LineItemContext.Provider>
  );
}

export { LineItemContext, LineItemProvider };