import { ReactElement, useEffect } from "react";
import IntroFirstPage from "./IntroFirstPage";
import IntroPages from "./IntroPages";

import { useSelector } from "react-redux";
import { introPage } from "../../app/features/introPages/introSlice";
import { useNavigate } from "react-router";

const Intro = (): ReactElement => {
  const pageNumber: number = useSelector(introPage);
  const showIntro = localStorage.getItem("showIntro");

  const navigate = useNavigate();

  useEffect(() => {
    if (showIntro === "false" || pageNumber === 4) {
      navigate("/registration");
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
