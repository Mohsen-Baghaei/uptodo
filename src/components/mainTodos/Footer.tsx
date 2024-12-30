import { BiHomeAlt2 } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { TbClockHour8 } from "react-icons/tb";
import { CiUser, CiCalendar } from "react-icons/ci";
import { ReactElement } from "react";

const Footer = (): ReactElement => {
  return (
    <footer
      className="md:hidden text-slate-50 w-full bottom-0 absolute bg-slate-800 
rounded-t-3xl"
    >
      <section className="flex justify-between  w-11/12 mx-auto my-2 text-xs">
        <button className="flex flex-col justify-center items-center ">
          <BiHomeAlt2 className="size-7 mb-1" />
          <p>Index</p>
        </button>
        <button className="flex flex-col justify-center items-center mt-0.5">
          <CiCalendar className="size-7 mb-1" />
          <p>Calendar</p>
        </button>
        <button className="-translate-y-8 size-14 bg-blue-500 rounded-full flex justify-center items-center">
          <FaPlus className="size-7" />
        </button>
        <button className="flex flex-col justify-center items-center">
          <TbClockHour8 className="size-7 mb-1" />
          <p>Focus</p>
        </button>
        <button className="flex flex-col justify-center items-center">
          <CiUser className="size-7 mb-1" />
          <p>Profile</p>
        </button>
      </section>
    </footer>
  );
};

export default Footer;
