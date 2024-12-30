import { ReactElement } from "react";
import mainPage from "../../assets/img/others/mainPage.png";

const Todos = (): ReactElement => {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-slate-50 w-4/5 md:w-2/3 mx-auto m-5">
        <img src={mainPage} alt={mainPage} className="lg:w-2/5 md:w-4/5" />
        <h3 className="text-lg sm:text-xl md:text-3xl mb-2">
          What do you want to do today?
        </h3>
        <p>Tap + to add your tasks</p>
      </div>
    </>
  );
};

export default Todos;
