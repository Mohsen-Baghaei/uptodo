import { ReactElement, useEffect, useState } from "react";
import {
  categoryValue,
  checkTodo,
  deleteTodo,
  getTodo,
} from "../../app/features/todo/todosSlice";
import { FaTimes, FaCheck, FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { TbLabelImportantFilled } from "react-icons/tb";
import { RiTimerFlashFill } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import { RootState } from "../../app/store";

const SingleTodo = (): ReactElement => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { taskId } = useParams();

  const [border, setBorder] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBorder(true);
    }, 10);
  }, []);

  const todo = useSelector((state: RootState) => getTodo(state, taskId!));

  const {
    taskName,
    taskDescription,
    startDate,
    startTime,
    endTime,
    date,
    priority,
    category,
    checked,
  } = todo!;

  const selectedCategory = categoryValue.find(
    (Category) => Category.id === category
  );

  const showStartDate = startDate.slice(0, 15);

  const showDate = date.slice(0, 15);

  const handleDelete = () => {
    dispatch(deleteTodo(taskId!));
    navigate("/");
  };

  return (
    <div className=" p-2 m-3 flex flex-row bg-slate-700 rounded-xl">
      <section className="w-full flex flex-col gap-1">
        <article className="flex justify-between items-center mb-2">
          <div className="flex flex-row items-center justify-start gap-1 p-1.5 bg-slate-900 rounded-lg">
            <TbLabelImportantFilled
              className={`size-6 shrink-0 ${priority.className}`}
            />
            <p className="text-slate-50 text-xl">{priority.name}</p>
          </div>
          <div className="flex flex-row items-center gap-1 p-1.5 bg-slate-900 rounded-lg">
            {selectedCategory?.icon}

            <p className="text-slate-50 text-xl">{selectedCategory?.name}</p>
          </div>
        </article>
        <article className="flex flex-col mb-2">
          <article className="flex justify-start items-center">
            <label
              htmlFor={taskId}
              className="flex items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id={taskId}
                checked={checked}
                onChange={() => dispatch(checkTodo(taskId!))}
                className="sr-only peer"
              />
              <div
                className={`relative w-14 h-7 p-1 rounded-full transition-all duration-500 ${
                  checked ? "bg-green-500" : "bg-red-600"
                } `}
              >
                <div
                  className={`absolute bg-slate-50 w-5 h-5 p-1 rounded-full transition-all duration-500 flex items-center justify-center ${
                    checked ? "left-8 " : "left-1 rotate-180"
                  }`}
                >
                  {checked ? <FaCheck /> : <FaTimes />}
                </div>
              </div>
            </label>
            <h3 className="text-3xl text-slate-50 ml-1">{taskName}</h3>
          </article>
          <div className="flex">
            <p className="text-slate-50 text-lg">{taskDescription}</p>
          </div>
        </article>
        <article className="flex flex-col md:flex-row justify-start items-start gap-2 mb-2">
          <div className="flex flex-row items-center justify-start gap-1 p-1.5 bg-slate-900 rounded-lg">
            <RiTimerFlashFill className="size-6 shrink-0 text-blue-500" />
            <p className="text-slate-50 text-lg">
              Start At{" "}
              <span className="relative">
                {showStartDate}
                <span
                  className={`absolute transition-all rounded-full duration-700 w-1 h-1 bg-orange-300 bottom-0 left-0 ${
                    border ? "w-full h-0.5 " : ""
                  }`}
                ></span>
              </span>{" "}
              {startTime === "00:00" && endTime === "00:00" ? (
                ""
              ) : (
                <span>
                  From{" "}
                  <span className="relative">
                    {startTime}
                    <span
                      className={`absolute transition-all rounded-full duration-700 w-1 h-1 bg-orange-300 bottom-0 left-0 ${
                        border ? "w-full h-0.5 " : ""
                      }`}
                    ></span>
                  </span>{" "}
                  To{" "}
                  <span className="relative">
                    {endTime}
                    <span
                      className={`absolute transition-all rounded-full duration-700 w-1 h-1 bg-orange-300 bottom-0 left-0 ${
                        border ? "w-full h-0.5 " : ""
                      }`}
                    ></span>
                  </span>
                </span>
              )}
            </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-1 p-1.5 bg-slate-900 rounded-lg">
            <CiCalendarDate className="size-6 shrink-0 text-blue-500" />
            <p className="text-slate-50 text-lg">
              Created At{" "}
              <span className="relative">
                {showDate}
                <span
                  className={`absolute transition-all rounded-full duration-700 w-1 h-1 bg-orange-300 bottom-0 left-0 ${
                    border ? "w-full h-0.5 " : ""
                  }`}
                ></span>
              </span>
            </p>
          </div>
        </article>
        <article className="flex justify-end items-end gap-1">
          <Link
            to={``}
            className="flex flex-row w-full  items-center justify-center gap-1 p-1.5 bg-slate-900 rounded-lg"
          >
            <FaEdit className="size-4 md:size-5 shrink-0 text-slate-50" />
            <p className="text-slate-50 text-base md:text-xl">Edit Task</p>
          </Link>
          <button
            type="button"
            onClick={handleDelete}
            className=" flex flex-row w-full text-nowrap  items-center justify-center gap-1 p-1.5 bg-slate-900 rounded-lg"
          >
            <MdDeleteSweep className="size-5 shrink-0 text-red-500" />
            <p className="text-red-500 text-base text-center md:text-xl">
              Delete Task
            </p>
          </button>
        </article>
      </section>
    </div>
  );
};

export default SingleTodo;
