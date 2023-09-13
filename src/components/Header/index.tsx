import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { HeaderTag } from "./styles";
import { IUserContext } from "../../contexts/UserContext";

export const Header = () => {
  const { user } = useContext<IUserContext>(UserContext);

  return (
    <HeaderTag>
      <section>
        <span>Olá, {user?.name}</span>
      </section>
      <section>
        <span>{user?.course_module}</span>
      </section>
    </HeaderTag>
  );
};
