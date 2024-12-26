import { ReactElement } from "react";
import IntroFirstPage from "./IntroFirstPage";
import IntroSecondPage from "./IntroSecondPage";
import IntroThirdPage from "./IntroThirdPage";
import IntroFourthPage from "./IntroFourthPage";

import { useSelector } from "react-redux";
import { introPage } from "../../app/features/introPages/introSlice";

type PagesType = {
  [key: number]: JSX.Element;
};

const Intro = (): ReactElement => {
  const pageNumber: number = useSelector(introPage);

  const pages: PagesType = {
    0: <IntroFirstPage />,
    1: <IntroSecondPage />,
    2: <IntroThirdPage />,
    3: <IntroFourthPage />,
  };

  return <>{pages[pageNumber]}</>;
};

export default Intro;
