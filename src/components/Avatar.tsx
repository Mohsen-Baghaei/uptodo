import { ReactElement } from "react";
import images from "../assets/img/images.png";

const Avatar = (): ReactElement => {
  return (
    <>
      <div className="flex overflow-hidden ">
        <img
          alt={images}
          src={images}
          className=" size-10 md:size-14 rounded-full "
        />
      </div>
    </>
  );
};

export default Avatar;
