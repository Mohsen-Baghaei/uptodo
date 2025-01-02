import { Route, Routes } from "react-router";
import TodoMainPage from "./components/mainTodos/TodoMainPage";
import Layout from "./components/Layout";
import RegistrationSelection from "./components/registration/RegistrationSelection";
import Login from "./components/registration/Login";
import Register from "./components/registration/Register";
import Intro from "./components/intro/Intro";
import NewTodo from "./components/mainTodos/NewTodo";
import SingleTodo from "./components/mainTodos/SingleTodo";

function App() {
  const showIntro = localStorage.getItem("showIntro");

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/registration" element={<RegistrationSelection />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/" element={showIntro ? <TodoMainPage /> : <Intro />} />

          <Route path="newtodo" element={<NewTodo />} />

          <Route path="/task/:taskId" element={<SingleTodo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
