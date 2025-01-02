import { ReactElement } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { TbClockHour8 } from "react-icons/tb";
import { CiUser, CiCalendar } from "react-icons/ci";

import useCustomLocation from "../../hooks/useCustomLocation";

import { closeSidebar } from "../../app/features/setting/settingSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const Footer = (): ReactElement => {
  const show: boolean = useCustomLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const direction = (to: string) => {
    dispatch(closeSidebar());
    navigate(`${to}`);
  };

  return (
    <footer
      className={
        show
          ? "hidden"
          : "md:hidden text-slate-50 w-full absolute bottom-0  bg-slate-800 rounded-t-3xl z-10"
      }
    >
      <section className="flex justify-between  w-11/12 mx-auto  text-xs py-2">
        <button
          onClick={() => direction("/")}
          className="flex flex-col justify-center items-center "
        >
          <BiHomeAlt2 className="size-7 mb-1" />
          <p>Index</p>
        </button>
        <button
          onClick={() => direction("/")}
          className="flex flex-col justify-center items-center mt-0.5"
        >
          <CiCalendar className="size-7 mb-1" />
          <p>Calendar</p>
        </button>
        <button
          onClick={() => direction("/")}
          className="-translate-y-8 size-14 bg-blue-500 rounded-full flex justify-center items-center"
        >
          <FaPlus className="size-7" />
        </button>
        <button
          onClick={() => direction("/")}
          className="flex flex-col justify-center items-center"
        >
          <TbClockHour8 className="size-7 mb-1" />
          <p>Focus</p>
        </button>
        <button
          onClick={() => direction("/")}
          className="flex flex-col justify-center items-center"
        >
          <CiUser className="size-7 mb-1" />
          <p>Profile</p>
        </button>
      </section>
    </footer>
  );
};

export default Footer;
