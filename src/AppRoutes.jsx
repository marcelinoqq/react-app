import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
