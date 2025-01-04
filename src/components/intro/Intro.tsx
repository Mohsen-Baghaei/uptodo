import { ReactElement, useEffect } from "react";
import IntroFirstPage from "./IntroFirstPage";
import IntroPages from "./IntroPages";

import { useSelector } from "react-redux";
import { introPage } from "../../app/features/introPages/introSlice";
import { useNavigate } from "react-router";
import { getUser } from "../../app/features/registration/usersSlice";

const Intro = (): ReactElement => {
  const pageNumber: number = useSelector(introPage);
  const showIntro = localStorage.getItem("showIntro");

  const errMsg = useSelector(getUser);

  const navigate = useNavigate();

  useEffect(() => {
    if ((showIntro === "false" || pageNumber === 4) && !errMsg.error) {
      navigate("/registration");
    } else if ((showIntro === "false" || pageNumber === 4) && errMsg.error) {
      navigate("/login");
    }
  }, [showIntro, pageNumber, navigate]);

  let content;

  if (pageNumber === 0) {
    content = <IntroFirstPage />;
  } else if (pageNumber < 4) {
    content = <IntroPages />;
  }

  return <>{content}</>;
};

export default Intro;
