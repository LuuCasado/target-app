import React, { useCallback, createContext, useState } from "react";

const initialData = {
  openModal: () => {},
  closeModal: () => {},
  isOpen: false,
  content: null,
};

export const modalContext = createContext(initialData);

const ModalProvider = ({ children }) => {
  const { Provider } = modalContext;
  const [isOpen, setIsOpen] = useState(initialData.isOpen);
  const [content, setContent] = useState(initialData.content);

  const openModal = useCallback(
    (content) => {
      setContent(content);
      setIsOpen(true);
    },
    [setContent, setIsOpen]
  );

  const closeModal = useCallback(() => {
    setContent(null);
    setIsOpen(false);
  }, [setContent, setIsOpen]);

  return (
    <Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}
    </Provider>
  );
};

export default ModalProvider;
