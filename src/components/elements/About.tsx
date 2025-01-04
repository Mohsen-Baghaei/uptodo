import { ReactElement } from "react";
import vite from "../../assets/img/about/vite.png";
import typescript from "../../assets/img/about/typescript.png";
import redux from "../../assets/img/about/redux.png";
import tailwind from "../../assets/img/about/tailwind.png";
import reactrouter from "../../assets/img/about/reactrouter.png";
import reactIcon from "../../assets/img/about/reactIcon.png";

const About = (): ReactElement => {
  return (
    <section className="w-4/5 mx-auto flex flex-col justify-center items-center text-slate-50 p-5 gsp-2 font-bold text-nowrap">
      <h3 className="text-2xl md:text-4xl">This App is Created With :</h3>
      <article className="flex flex-col gap-3 justify-center items-center p-5 text-xl md:text-3xl">
        <p className="flex gap-2 justify-center items-center">
          <img src={vite} alt={vite} className="size-6 bg-none" />
          Vite
        </p>
        <p className="flex gap-2 justify-center items-center">
          <img src={reactIcon} alt={reactIcon} className="size-6 bg-none" />
          React
        </p>
        <p className="flex gap-2 justify-center items-center">
          <img src={redux} alt={redux} className="size-6 bg-none" />
          Redux
        </p>
        <p className="flex gap-2 justify-center items-center">
          <img src={tailwind} alt={tailwind} className="w-8 h-6 bg-none" />
          Tailwind
        </p>
        <p className="flex gap-2 justify-center items-center">
          <img src={typescript} alt={typescript} className="size-6 bg-none" />
          Typescript
        </p>
        <p className="flex gap-2 justify-center items-center">
          <img src={reactrouter} alt={reactrouter} className="size-6 bg-none" />
          Reactrouter
        </p>
        <p className="flex flex-col gap-2 justify-center items-center">
          <span>&copy; All Rights Reserved by:</span>
          <span>Mohsen Baghaei</span>
        </p>
      </article>
    </section>
  );
};

export default About;
