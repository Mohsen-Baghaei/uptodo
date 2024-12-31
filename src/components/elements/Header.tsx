import { ReactElement } from "react";
import Avatar from "./Avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  sidebarStatus,
  toggleSidebar,
} from "../../app/features/setting/settingSlice";
import useCustomLocation from "../../hooks/useCustomLocation";

const Header = (): ReactElement => {
  const dispatch = useDispatch();

  const show: boolean = useCustomLocation();

  const SidebarStatus = useSelector(sidebarStatus);

  return (
    <header className={show ? "hidden" : "flex justify-between p-5"}>
      <button
        id="hamburger-button"
        onClick={() => dispatch(toggleSidebar())}
        className={`hidden md:block text-3xl cursor-pointer relative size-8 mt-1 md:mt-3 ${
          SidebarStatus ? "toggle-btn" : ""
        }`}
      >
        <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500"></div>
      </button>
      <h2 className="text-3xl mb-6 md:text-5xl text-white">Index</h2>
      <Avatar />
    </header>
  );
};

export default Header;
