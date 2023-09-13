import { Link } from "react-router-dom";
import { Container, BoxForm, Form, BoxRegister } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validatioLogin } from "../../validations/script";
import { MessageError } from "../FormRegister/styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { IUserContext } from "../../contexts/UserContext";
import { IUserDataLogin } from "../../contexts/UserContext";
import "./styles";

export const FormLogin = () => {
  const { submitLogin } = useContext<IUserContext>(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserDataLogin>({ resolver: yupResolver(validatioLogin) });

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <BoxForm>
        <h2>Login</h2>
        <Form onSubmit={handleSubmit(submitLogin)}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Digite seu email"
            {...register("email")}
          />
          <MessageError>{errors.email?.message}</MessageError>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <MessageError>{errors.password?.message}</MessageError>

          <button type="submit">Entrar</button>
        </Form>
        <BoxRegister>
          <span>Ainda não possui uma conta?</span>
          <Link to="/register">Cadastre-se</Link>
        </BoxRegister>
      </BoxForm>
    </Container>
  );
};
