import { Icon } from "../../assets/Icon";
import { CardContainer } from "./styled";

interface ICard {
  href: string;
}

export function Card({ href }: ICard) {
  return (
    <CardContainer href={href} target="_blank">
      <Icon name="play" />
    </CardContainer>
  );
}
