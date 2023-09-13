import { Link } from "react-router-dom";
import { Container, BoxBack, BoxForm, Form, MessageError } from "./styles";
import { useForm } from "react-hook-form";
import { validationRegister } from "../../validations/script";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { IUserDataRegister, IUserContext } from "../../contexts/UserContext";

export const FormRegister = () => {
  const { submitRegister } = useContext<IUserContext>(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserDataRegister>({ resolver: yupResolver(validationRegister) });

  return (
    <Container>
      <BoxBack>
        <h1>Kenzie Hub</h1>
        <Link to="/login">Voltar</Link>
      </BoxBack>

      <BoxForm>
        <h2>Crie sua conta</h2>
        <span>Rapido e grátis, vamos nessa</span>
        <Form onSubmit={handleSubmit(submitRegister)}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <MessageError>{errors.name?.message}</MessageError>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <MessageError>{errors.email?.message}</MessageError>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <MessageError>{errors.password?.message}</MessageError>

          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          <MessageError>{errors.confirmPassword?.message}</MessageError>

          <label htmlFor="bio">Bio</label>
          <input
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <MessageError>{errors.bio?.message}</MessageError>

          <label htmlFor="contact">Contato</label>
          <input
            type="text"
            id="contact"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <MessageError>{errors.contact?.message}</MessageError>

          <label htmlFor="select">Selecionar módulo</label>
          <select id="select" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </select>

          <button type="submit">Cadastrar</button>
        </Form>
      </BoxForm>
    </Container>
  );
};
