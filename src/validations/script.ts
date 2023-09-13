import * as yup from "yup";

export const validatioLogin = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export const validationRegister = yup.object().shape({
  name: yup.string().required("Insira um nome"),
  email: yup.string().required("Insira um email").email("Email inválido"),
  password: yup
    .string()
    .required("Insira uma senha")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Deve possuir o mínimo de 8 digitos, uma letra maiuscula, uma minuscula, um número e um caractere especial"
    ),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password"), null], "As senhas não correspondem"),
  bio: yup.string().required("Campo não pode estar vazio"),
  contact: yup.string().required("Insira um contato"),
  course_module: yup.string(),
});

export const validationRegisterTech = yup.object().shape({
  title: yup.string().required("Insira uma tecnologia"),
  status: yup.string(),
});
