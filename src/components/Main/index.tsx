import { AddTech } from "../../components/AddTech";
import { MainTag, Infos } from "./styles";
import { RegisterTech } from "../RegisterTech";
import { ListTechs } from "../ListTechs";

export const Main = () => {
  return (
    <MainTag>
      <Infos>
        <AddTech></AddTech>
        <RegisterTech></RegisterTech>
        <ListTechs></ListTechs>
      </Infos>
    </MainTag>
  );
};
