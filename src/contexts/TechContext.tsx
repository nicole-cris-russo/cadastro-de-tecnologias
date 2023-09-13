import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../services/api";
import { UserContext } from "./UserContext";
import { IUserTechs } from "./UserContext";

export const TechContext = createContext({} as ITechContext);

interface ITechContext {
  createTech: (data: ICreateTechProps) => void;
  deteleTech: (techId: string) => void;
  setDisplay: React.Dispatch<React.SetStateAction<boolean>>;
  display: boolean;
  loadingTech: boolean;
  setTech: React.Dispatch<React.SetStateAction<never[]>>;
  tech: IUserTechs[];
}

interface ITechProviderProps {
  children: ReactNode;
}

export interface ICreateTechProps {
  title: string;
  status: string;
}

export const TechProvider = ({ children }: ITechProviderProps) => {
  const { user } = useContext(UserContext);
  const [loadingTech, setLoadingTech] = useState(true);
  const [display, setDisplay] = useState(false);
  const [tech, setTech] = useState([]);

  const loadTech = async () => {
    const token = localStorage.getItem("@kenzie-hub:token");
    if (token) {
      api
        .get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setTech(res.data.techs);
        })
        .catch((err) => console.log("Erro requisição de profile", err));
    }
    setLoadingTech(false);
  };

  useEffect(() => {
    loadTech();
  }, [user]);

  const createTech = (data: ICreateTechProps) => {
    const token = localStorage.getItem("@kenzie-hub:token");
    api
      .post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDisplay(false);
        loadTech();
        toast.success("Tecnologia cadastrada", {
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      })
      .catch((err) => {
        console.log("Error createTech", err);
        toast.error("Tecnologia já existente", {
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      });
  };

  const deteleTech = (techId: string) => {
    const token = localStorage.getItem("@kenzie-hub:token");
    api
      .delete("/users/techs/" + techId, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        loadTech();
        toast.success("Deletado com sucesso", {
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      })
      .catch((err) => {
        console.log("Error deleteTech", err);
        toast.error("Tecnologia já existe", {
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
        });
      });
  };

  return (
    <TechContext.Provider
      value={{
        createTech,
        deteleTech,
        setDisplay,
        display,
        loadingTech,
        setTech,
        tech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
