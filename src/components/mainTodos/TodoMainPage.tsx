import { ReactElement, useState } from "react";

import Header from "./Header";
import Todos from "./Todos";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const TodoMainPage = (): ReactElement => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <main className=" flex flex-col justify-between md:justify-start ">
      <Header menu={menu} setMenu={setMenu} />
      <Sidebar menu={menu} />
      <Todos />
      <Footer />
    </main>
  );
};

export default TodoMainPage;
