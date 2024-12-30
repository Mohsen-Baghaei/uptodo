import { BiHomeAlt2 } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { TbClockHour8 } from "react-icons/tb";
import { CiUser, CiCalendar } from "react-icons/ci";

type PropsType = {
  menu: boolean;
};

const Sidebar = ({ menu }: PropsType) => {
  return (
    <div
      className={`hidden md:flex lg:w-1/6 md:w-2/6 bg-slate-800 z-10 opacity-80 md:absolute left-0 bottom-0 section-min-height transition ease-in-out duration-500  ${
        menu ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <section className="flex w-full flex-col justify-start p-2 items-start text-slate-50 gap-3">
        <button className="w-full flex justify-start items-center p-2 gap-3 hover:border-4 border-solid border-blue-600 hover:rounded-xl">
          <BiHomeAlt2 className="size-11 " />
          <p className="text-3xl">Index</p>
        </button>
        <button className="w-full flex justify-start items-center p-2 gap-4 hover:border-4 border-solid border-blue-600 hover:rounded-xl">
          <CiCalendar className="size-11 " />
          <p className="text-3xl">Calendar</p>
        </button>
        <button className="w-full flex justify-start items-center p-2 gap-3 hover:border-4 border-solid border-blue-600 hover:rounded-xl">
          <FaPlus className="size-11 " />
          <p className="text-3xl">New Todo</p>
        </button>
        <button className="w-full flex justify-start items-center p-2 gap-3 hover:border-4 border-solid border-blue-600 hover:rounded-xl">
          <TbClockHour8 className="size-11 " />
          <p className="text-3xl">Focus</p>
        </button>
        <button className="w-full flex justify-start items-center p-2 gap-3 hover:border-4 border-solid border-blue-600 hover:rounded-xl">
          <CiUser className="size-11 " />
          <p className="text-3xl">Profile</p>
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
