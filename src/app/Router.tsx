import { createBrowserRouter } from "react-router";
import App from "../App";
import RegistrationSelection from "../components/registration/RegistrationSelection";
import Login from "../components/registration/Login";
import Register from "../components/registration/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Registration",
    element: <RegistrationSelection />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default Router;
