import { ReactElement } from "react";
import IntroFirstPage from "./IntroFirstPage";
import IntroPages from "./IntroPages";

import { useSelector } from "react-redux";
import { introPage } from "../../app/features/introPages/introSlice";
import RegistrationSelection from "../registration/RegistrationSelection";

const Intro = (): ReactElement => {
  const pageNumber: number = useSelector(introPage);
  const showIntro = localStorage.getItem("showIntro");
  let content;

  if (showIntro === "false" || pageNumber === 4) {
    content = <RegistrationSelection />;
  } else if (pageNumber === 0) {
    content = <IntroFirstPage />;
  } else if (pageNumber < 4) {
    content = <IntroPages />;
  }

  return <>{content}</>;
};

export default Intro;
