import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>
    </Routes>
  );
};
