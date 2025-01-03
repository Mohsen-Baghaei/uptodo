import { ReactElement, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";

const ProfilePassword = (): ReactElement => {
  const [show, setShow] = useState(false);

  return (
    <article className="flex flex-col items-start justify-center w-full p-2 bg-slate-700 rounded-xl">
      <button
        className="flex justify-between items-center w-full px-2"
        onClick={() => setShow((prev) => !prev)}
      >
        <span className="text-xl md:text-2xl text-slate-50 flex justify-center items-center">
          <FaKey className="mr-2 size-5 shrink-0 " />
          Change Account Password
        </span>{" "}
        <FaChevronRight />
      </button>
      <div
        className={` mt-8 flex-col justify-center gap-2 items-center w-full ${
          show ? "flex" : "hidden"
        }`}
      >
        <input
          type="password"
          name=""
          id=""
          className="block w-full md:w-1/3 rounded-xl bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
        />
        <input
          type="password"
          name=""
          id=""
          className="block w-full md:w-1/3 rounded-xl bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
        />
        <div className="flex items-center justify-center gap-2 w-full md:w-1/3 ">
          <button
            type="button"
            className="w-1/2 bg-rose-600 text-lg p-1 font-bold text-slate-200 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="button"
            className="w-1/2 bg-teal-600 text-lg p-1 font-bold text-slate-200 rounded-lg"
          >
            Edit
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProfilePassword;
