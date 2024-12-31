import { ReactElement } from "react";

import Todos from "./Todos";

const TodoMainPage = (): ReactElement => {
  return (
    <main className=" flex flex-col justify-between md:justify-start ">
      <Todos />
    </main>
  );
};

export default TodoMainPage;
