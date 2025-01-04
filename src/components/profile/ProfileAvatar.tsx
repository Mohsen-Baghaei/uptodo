import { ReactElement, useState } from "react";

import { AiOutlineGitlab } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import {
  avatars,
  changeAvatar,
} from "../../app/features/registration/usersSlice";
import { useDispatch } from "react-redux";

type PropType = {
  currentAvatar: string;
};

const ProfileAvatar = ({ currentAvatar }: PropType): ReactElement => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const selectAvatar = (avatar: string) => {
    dispatch(changeAvatar(avatar));
    setShow(false);
  };

  const showAvatars = avatars.map((avatar) => {
    const ring = currentAvatar === avatar ? true : false;
    return (
      <button
        key={avatar}
        onClick={() => selectAvatar(avatar)}
        className={`flex justify-center items-center size-16 md:size-28 rounded-full cursor-pointer border-4  border-solid ${
          ring ? "border-sky-500" : "border-slate-900"
        } `}
      >
        <img
          src={avatar}
          alt={avatar}
          className="rounded-full object-scale-down"
        />
      </button>
    );
  });

  return (
    <article className="flex flex-col items-start justify-center w-full p-2 bg-slate-700 rounded-xl">
      <button
        className="flex justify-between items-center w-full px-2"
        onClick={() => setShow((prev) => !prev)}
      >
        <span className="text-xl md:text-2xl text-slate-50 flex justify-center items-center">
          <AiOutlineGitlab className="mr-2 size-5 shrink-0 " />
          Change Account Avatar
        </span>{" "}
        <FaChevronRight />
      </button>
      <div
        className={` mt-8 flex-col justify-center gap-2 items-center w-full ${
          show ? "flex" : "hidden"
        }`}
      >
        <div className="flex justify-center items-center flex-wrap gap-4">
          {showAvatars}
        </div>
      </div>
    </article>
  );
};

export default ProfileAvatar;
