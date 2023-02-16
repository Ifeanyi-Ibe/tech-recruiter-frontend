import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Auth/LoginPage";
import Home from "./pages/Auth/Home";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Signup from "./pages/Auth/Signup";
import ResetPassword from "./pages/Auth/ResetPassword";

const RouteHandler = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default RouteHandler;
