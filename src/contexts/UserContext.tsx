import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/FormLogin/styles.toast.css";
import "../components/FormRegister/styles.toast.css";
import { TechProvider } from "./TechContext";

export const UserContext = createContext({} as IUserContext);

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  submitLogin: (data: IUserDataLogin) => void;
  submitRegister: (data: IUserDataRegister) => void;
  loading: boolean;
}

export interface IUserTechs {
  id: string;
  title: string;
  status: string;
  user?: {
    id: string;
  };
  created_at: string;
  updated_at: string;
}

export interface IUser {
  avatar_url: string | null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: IUserTechs[];
  updated_at: string;
  works: IUserTechs[];
}

export interface IUserDataLogin {
  email: string;
  password: string;
}

export interface IUserLogin {
  user: IUser;
  token: string;
}

export interface IUserDataRegister {
  email: string;
  password: string;
  confirmPassword?: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: IContextProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  async function loadUser() {
    const token = localStorage.getItem("@kenzie-hub:token");
    if (token) {
      await api
        .get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => console.log("Erro requisição de profile", err));
    }
    setLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  const submitLogin = (data: IUserDataLogin) => {
    api
      .post("sessions", data)
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("@kenzie-hub:user", JSON.stringify(res.data.user));
        localStorage.setItem("@kenzie-hub:token", res.data.token);
        loadUser();
        navigate("/dashboard", { replace: true });
        toast.success("Login efetuado com sucesso!", {
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      })
      .catch((err) => {
        console.log("Response erro login", err);
        toast.error("Email ou senha errados!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

  const submitRegister = (data: IUserDataRegister) => {
    api
      .post("users/", data)
      .then((res) => {
        toast.success("Conta criada com sucesso!", {
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          autoClose: 2000,
        });
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log("Response error register", err);
        if (err.response.data.message === "Email already exists") {
          toast.warning("Email já existe!", {
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            autoClose: 2000,
          });
        }
      });
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, submitLogin, submitRegister, loading }}
    >
      <TechProvider>{children}</TechProvider>
    </UserContext.Provider>
  );
};
