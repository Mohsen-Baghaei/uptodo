import { Route, Routes } from "react-router";
import TodoMainPage from "./components/mainTodos/TodoMainPage";
import Layout from "./components/Layout";
import RegistrationSelection from "./components/registration/RegistrationSelection";
import Login from "./components/registration/Login";
import Register from "./components/registration/Register";
import Intro from "./components/intro/Intro";
import NewTodo from "./components/mainTodos/NewTodo";
import SingleTodo from "./components/mainTodos/SingleTodo";
import EditTodo from "./components/mainTodos/EditTodo";
import Missing from "./components/elements/Missing";
import Profile from "./components/elements/profile/Profile";
import About from "./components/elements/About";

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

          <Route path="newtask" element={<NewTodo />} />

          <Route path="/task/:taskId" element={<SingleTodo />} />

          <Route path="/edittask/:taskId" element={<EditTodo />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
