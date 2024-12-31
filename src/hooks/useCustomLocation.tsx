import { useEffect, useState } from "react";
import { useLocation as useReactRouterLocation } from "react-router";

const useCustomLocation = () => {
  const notShowItem = ["/registration", "/login", "/register"];

  const [show, setShow] = useState<boolean>(false);

  const { pathname } = useReactRouterLocation();

  const showIntro = localStorage.getItem("showIntro");

  useEffect(() => {
    const showItem =
      notShowItem
        .map((page) => page === pathname)
        .find((val) => val === true) || showIntro === null;
    setShow(showItem ? showItem : false);
  }, [pathname]);

  return show;
};

export default useCustomLocation;
