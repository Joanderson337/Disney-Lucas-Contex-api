import { Icon } from "../../assets/Icon";
import { Button } from "../Button";
import { ContainerSectionOne } from "./styled";
import lucas from "../../assets/img/lucas.png";

export function SectionOne() {
  return (
    <ContainerSectionOne>
      <img src={lucas} alt="" />
      <p>
        Luca and Alberto dream of a life of freedom, a life of adventure — and,
        most of all, a life with a Vespa to ride.{" "}
      </p>
      <Button href="https://www.youtube.com/watch?v=Gl8B-nQf47E" />
    </ContainerSectionOne>
  );
}
