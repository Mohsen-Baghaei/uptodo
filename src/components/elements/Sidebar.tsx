import { ReactElement } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { TbClockHour8 } from "react-icons/tb";
import { CiUser, CiCalendar } from "react-icons/ci";
import { GrCircleInformation } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSidebar,
  sidebarStatus,
} from "../../app/features/setting/settingSlice";
import { useNavigate } from "react-router";

const Sidebar = (): ReactElement => {
  const SidebarStatus = useSelector(sidebarStatus);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const direction = (to: string) => {
    dispatch(closeSidebar());
    navigate(`${to}`);
  };

  return (
    <div
      className={`flex bg-slate-800 z-10 opacity-90 fixed left-0 bottom-0 section-min-height transition ease-in-out duration-500 text-nowrap md:pt-5  ${
        SidebarStatus ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <section className="flex w-full flex-col justify-start p-2 items-start text-slate-50 gap-3">
        <button
          onClick={() => direction("/")}
          className="w-full flex justify-start items-center p-2 gap-3 hover:border-4 border-solid border-blue-600 hover:rounded-xl"
        >
          <BiHomeAlt2 className="size-11" />
          <p className="text-3xl">Index</p>
        </button>
        {/* <button
          onClick={() => direction("/")}
          className="w-full flex justify-start items-center p-2 gap-4 hover:border-4 border-solid border-blue-600 hover:rounded-xl"
        >
          <CiCalendar className="size-11 " />
          <p className="text-3xl">Calendar</p>
        </button> */}
        <button
          onClick={() => direction("/newtask")}
          className="w-full flex justify-start items-center p-2 gap-3 hover:border-4 border-solid border-blue-600 hover:rounded-xl"
        >
          <FaPlus className="size-11 " />
          <p className="text-3xl">New Todo</p>
        </button>
        {/* <button
          onClick={() => direction("/")}
          className="w-full flex justify-start items-center p-2 gap-3 hover:border-4 border-solid border-blue-600 hover:rounded-xl"
        >
          <TbClockHour8 className="size-11 " />
          <p className="text-3xl">Focus</p>
        </button> */}
        <button
          onClick={() => direction("/profile")}
          className="w-full flex justify-start items-center p-2 gap-3 hover:border-4 border-solid border-blue-600 hover:rounded-xl"
        >
          <CiUser className="size-11 " />
          <p className="text-3xl">Profile</p>
        </button>
        <button
          onClick={() => direction("/about")}
          className="w-full flex justify-start items-center p-2 gap-3 hover:border-4 border-solid border-blue-600 hover:rounded-xl"
        >
          <GrCircleInformation className="size-11 " />
          <p className="text-3xl">About</p>
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
