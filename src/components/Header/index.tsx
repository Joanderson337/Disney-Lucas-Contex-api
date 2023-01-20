import { useContext } from "react";
import { Icon } from "../../assets/Icon";
import { ModalContext } from "../../context/modal";
import { HeaderContainer } from "./styled";

export function Header() {
  const { openModal, modalVisible, closeModal } = useContext(ModalContext);

  const openModalHeader = () => {
    openModal();
  };

  const closeModalHeader = () => {
    closeModal();
  };

  return (
    <HeaderContainer>
      <Icon name="logo" size={130} />

      {modalVisible ? (
        <button onClick={closeModalHeader}>
          <Icon name="close" size={36} />
        </button>
      ) : (
        <button onClick={openModalHeader}>
          <Icon name="menu" size={36} />
        </button>
      )}
    </HeaderContainer>
  );
}
