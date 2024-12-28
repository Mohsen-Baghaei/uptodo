import { ReactElement } from "react";
import Header from "./Header";
import Todos from "./Todos";

const TodoMainPage = (): ReactElement => {
  return (
    <main className="p-5 flex flex-col justify-between ">
      <Header />
      <Todos />
      <footer className=""></footer>
    </main>
  );
};

export default TodoMainPage;
