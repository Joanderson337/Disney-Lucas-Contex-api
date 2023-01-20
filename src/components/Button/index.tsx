import { Icon } from "../../assets/Icon";
import { ButtonContainer } from "./styled";

interface IButton {
  href: string;
}

export function Button({ href }: IButton) {
  return (
    <ButtonContainer href={href} target="_blank">
      <Icon name="play" />
      Watch Now
    </ButtonContainer>
  );
}
