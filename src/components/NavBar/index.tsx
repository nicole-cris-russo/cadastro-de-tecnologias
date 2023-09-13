import { Link } from "react-router-dom";
import { Nav } from "./styles";

export const NavBar = () => {
  return (
    <Nav>
      <section>
        <h1>Kenzie Hub</h1>
      </section>
      <section>
        <Link to="/login" onClick={() => localStorage.clear()}>
          Sair
        </Link>
      </section>
    </Nav>
  );
};
