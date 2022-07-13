import { useContext } from "react";

import { modalContext } from "components/global/Modal/ModalProvider";

const useModal = () => {
  const { openModal, closeModal } = useContext(modalContext);

  return { openModal, closeModal };
};

export default useModal;
