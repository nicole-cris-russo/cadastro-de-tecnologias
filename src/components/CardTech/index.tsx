import { useContext } from "react";
import { BiTrash } from "react-icons/bi";
import { TechContext } from "../../contexts/TechContext";
import { Card } from "./styles"
import { IUserTechs } from "../../contexts/UserContext";

interface ICardTechProps {
  tech: IUserTechs;
}

export const CardTech = ({ tech }:ICardTechProps) => {
  const { deteleTech } = useContext(TechContext);
  return (
    <Card>
      <div>
        <span>{tech.title}</span>
      </div>
      <div>
        <span>{tech.status}</span>
        <BiTrash
          onClick={() => {
            deteleTech(tech.id);
          }}
        />
      </div>
    </Card>
  );
};
