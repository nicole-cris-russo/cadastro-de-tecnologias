import { useContext } from "react";
import { Container, MessageEmpty } from "./styles";
import { CardTech } from "../CardTech";
import { TechContext } from "../../contexts/TechContext";

export const ListTechs = () => {
  const { loadingTech, tech } = useContext(TechContext);

  return (
    <>
      {loadingTech ? (
        <div>Carregando...</div>
      ) : (
        <Container>
          {tech.length > 0 ? (
            <ul>
              {tech.map((tech, index) => (
                <li key={index}>
                  <CardTech tech={tech} />
                </li>
              ))}
            </ul>
          ) : (
            <MessageEmpty>Sem tecnologias cadastradas</MessageEmpty>
          )}
        </Container>
      )}
    </>
  );
};
