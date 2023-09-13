import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import { validationRegisterTech } from "../../validations/script";
import { Container, BoxTop, BoxBottom, Close } from "./style";
import { MessageError } from "../FormRegister/styles";
import { ICreateTechProps } from "../../contexts/TechContext";

export const RegisterTech = () => {
  const { createTech, setDisplay, display } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateTechProps>({
    resolver: yupResolver(validationRegisterTech),
  });

  return (
    <Container display={display}>
      <BoxTop>
        <span>Cadastrar Tecnologias</span>
        <Close
          onClick={() => {
            setDisplay(false);
          }}
        >
          X
        </Close>
      </BoxTop>
      <BoxBottom>
        <form onSubmit={handleSubmit(createTech)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Exemplo: Typescript"
            {...register("title")}
          />
          <MessageError>{errors.title?.message}</MessageError>

          <label htmlFor="select">Selecionar Status</label>
          <select id="select" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </BoxBottom>
    </Container>
  );
};
