import { ReactElement } from "react";
import intro1 from "../../assets/img/intero/intro1.png";
import { useDispatch } from "react-redux";
import { incrementIntro } from "../../app/features/introPages/introSlice";

const IntroFirstPage = (): ReactElement => {
  const dispatch = useDispatch();

  return (
    <div className="w-4xl h-full mx-auto flex flex-col justify-between items-center gap-6">
      <div className="w-3/4 md:w-3/5 xl:w-1/5 p-4 mt-32">
        <img src={intro1} alt={intro1} className="w-full" />
      </div>
      <div className="mb-12 w-4/5 sm:w-3/5 flex justify-end p-4">
        <button
          type="button"
          onClick={() => dispatch(incrementIntro())}
          className="  text-2xl md:text-3xl text-white bg-blue-700 p-2 rounded-xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IntroFirstPage;
