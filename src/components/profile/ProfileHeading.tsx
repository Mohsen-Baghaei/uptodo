import { ReactElement } from "react";

import { useSelector } from "react-redux";
import { getTodoStatus } from "../../app/features/todo/todosSlice";

type PropType = {
  userName: string;
  userAvatar: string;
};

const ProfileHeading = ({ userName, userAvatar }: PropType): ReactElement => {
  const { leftTodo, doneTodo } = useSelector(getTodoStatus);

  return (
    <section className="flex flex-col py-4 mx-auto justify-start items-center ">
      <article className="flex flex-col gap-2 justify-start items-center">
        <h2 className="text-center text-slate-50 text-2xl md:text-3xl">
          Profile
        </h2>
        <img
          src={userAvatar}
          alt={userAvatar}
          className="size-20 md:size-32 rounded-full"
        />
        <p className="text-slate-50 text-xl md:text-2xl">{userName}</p>
      </article>
      <article className="w-4/5 flex flex-row md:gap-3 gap-2 mx-auto mt-4 text-slate-50">
        <p className="w-1/2 flex justify-center items-center bg-slate-700 p-2 text-xl rounded-lg">
          {leftTodo} Task left
        </p>
        <p className="w-1/2 flex justify-center items-center bg-slate-700 p-2 text-xl rounded-lg">
          {doneTodo} Task done
        </p>
      </article>
    </section>
  );
};

export default ProfileHeading;
