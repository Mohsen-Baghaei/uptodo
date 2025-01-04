import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { getUser } from "../../app/features/registration/usersSlice";

const Avatar = (): ReactElement => {
  const image = useSelector(getUser);

  return (
    <>
      <div className="flex overflow-hidden ">
        <img
          alt={image.avatar}
          src={image.avatar}
          className=" size-10 md:size-14 rounded-full "
        />
      </div>
    </>
  );
};

export default Avatar;
