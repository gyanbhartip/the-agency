import "../../styles/App.css";
import { Outlet } from "react-router-dom";
import ForgotPassword from "../forgotPassword/ForgotPassword";
import Login from "../login/Login";
import Navbar from "../navbar/Navbar";
import Register from "../register/Register";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ForgotPassword /> */}
    </>
  );
}

export default App;
