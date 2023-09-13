import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { Container } from "./styles";

export const AddTech = () => {
  const { setDisplay } = useContext(TechContext);
  return (
    <Container>
      <div>
        <h3>Tecnologias</h3>
      </div>
      <div>
        <button
          onClick={() => {
            setDisplay(true);
          }}
        >
          +
        </button>
      </div>
    </Container>
  );
};
