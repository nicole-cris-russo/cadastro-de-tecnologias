import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { LoadingPage } from "../../components/LoadingPage";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export const Dashboard = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  } else {
    return user ? (
      <>
        <NavBar></NavBar>
        <Header></Header>
        <Main></Main>
      </>
    ) : (
      <Navigate to="/" replace />
    );
  }
};
