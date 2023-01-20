import { useContext } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { SectionOne } from "../../components/SectionOne";
import { ModalContext } from "../../context/modal";
import { HomeContaier, HomeContext } from "./styled";

export function Home() {
  const { modalVisible } = useContext(ModalContext);

  return (
    <>
      <HomeContaier>
        <HomeContext>
          <Header />
          <aside>
            <SectionOne />
            {modalVisible && (
              <div>
                <Card href="https://www.youtube.com/watch?v=yl9mbyXDO8g" />
              </div>
            )}
          </aside>
        </HomeContext>
      </HomeContaier>
    </>
  );
}
