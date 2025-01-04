import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementIntro,
  decrementIntro,
  skipIntro,
  selectedPage,
} from "../../app/features/introPages/introSlice";

type PageDataType =
  | {
      pageNumber: number;
      img: string;
      class: string;
      heading: string;
      content: string;
    }
  | undefined;

const IntroPages = (): ReactElement => {
  const dispatch = useDispatch();

  const pageData: PageDataType = useSelector(selectedPage);

  return (
    <div className="w-4xl h-screen mx-auto flex flex-col justify-between items-center relative">
      <button
        type="button"
        onClick={() => dispatch(skipIntro())}
        className="absolute text-slate-50 top-8 left-8 text-2xl md:text-3xl text-opacity-70"
      >
        SKIP
      </button>
      <div className="w-3/5 md:w-3/6 xl:w-1/5 p-4 mt-8">
        <img src={pageData?.img} alt={pageData?.img} className="w-full" />
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div
          className={`w-8 h-1 md:w-16 md:h-2  rounded  before:content-['']  before:w-8 before:h-1 before:md:w-16 before:md:h-2 before:rounded before:absolute before:-translate-x-10 md:before:-translate-x-20  after:content-['']  after:w-8 after:h-1 after:md:w-16 after:md:h-2 after:rounded after:absolute after:translate-x-10 md:after:translate-x-20 my-4 md:my-10 ${pageData?.class}`}
        ></div>
        <h2 className="text-3xl mb-6 md:text-5xl text-slate-50">
          {pageData?.heading}
        </h2>
        <p
          className="text-base text-center md:text-4xl mx-8
    md:mx-20 text-white text-opacity-85"
        >
          {pageData?.content}
        </p>
      </div>
      <div className="mb-6 w-4/5 sm:w-3/5 flex justify-between p-4">
        <button
          type="button"
          onClick={() => dispatch(decrementIntro())}
          className="text-2xl md:text-3xl text-slate-50 p-2 text-opacity-70"
        >
          Back
        </button>
        <button
          type="button"
          onClick={() => dispatch(incrementIntro())}
          className="text-2xl md:text-3xl text-white bg-blue-700 p-2 rounded-xl my-6"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default IntroPages;
