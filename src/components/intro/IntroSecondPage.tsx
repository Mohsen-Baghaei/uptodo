import { ReactElement } from "react";
import intro2 from "../../assets/img/intero/intro2.png";
import { useDispatch } from "react-redux";
import {
  decrementIntro,
  incrementIntro,
} from "../../app/features/introPages/introSlice";

const IntroSecondPage = (): ReactElement => {
  const dispatch = useDispatch();

  return (
    <div className="w-4xl h-full mx-auto flex flex-col justify-between items-center">
      <div className="w-3/5 md:w-3/6 xl:w-1/5 p-4 mt-8">
        <img src={intro2} alt={intro2} className="w-full" />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="bg-slate-500 w-8 h-1 md:w-16 md:h-2  rounded  before:content-[''] before:bg-slate-50 before:w-8 before:h-1 before:md:w-16 before:md:h-2 before:rounded before:absolute before:-translate-x-10 md:before:-translate-x-20  after:content-[''] after:bg-slate-500 after:w-8 after:h-1 after:md:w-16 after:md:h-2 after:rounded after:absolute after:translate-x-10 md:after:translate-x-20 my-4 md:my-10"></div>
        <h2 className="text-3xl mb-6 md:text-5xl text-white">
          Manage your tasks
        </h2>
        <p
          className="text-base text-center md:text-4xl mx-8
        md:mx-20 text-white text-opacity-85"
        >
          You can easily manage all of your daily tasks in DoMe for free
        </p>
      </div>
      <div className="mb-6 w-4/5 sm:w-3/5 flex justify-between p-4">
        <button
          type="button"
          onClick={() => dispatch(decrementIntro())}
          className="  text-2xl md:text-4xl text-white p-2 text-opacity-70"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => dispatch(incrementIntro())}
          className="  text-2xl md:text-4xl text-white bg-blue-700 p-2 rounded-xl px-6"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IntroSecondPage;
