import { ReactElement } from "react";
import {
  categoryValue,
  checkTodo,
  StateType,
} from "../../app/features/todo/todosSlice";
import { FaTimes, FaCheck } from "react-icons/fa";
import { TbLabelImportantFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";

type PropType = {
  todo: StateType;
};

const Todo = ({ todo }: PropType): ReactElement => {
  const dispatch = useDispatch();

  const {
    taskName,
    taskDescription,
    startDate,
    priority,
    category,
    checked,
    id,
  } = todo;

  const selectedCategory = categoryValue.find(
    (Category) => Category.id === category
  );

  const showStartDate = startDate.slice(0, 15);

  const showDescription =
    taskDescription.length > 75
      ? `${taskDescription.slice(0, 60)} ...`
      : taskDescription;
  //console.log(startDate);

  return (
    <li className="w-full p-2 mb-3 flex flex-row bg-slate-700 rounded-xl">
      <div className="w-3/4 flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center justify-start gap-1 p-1.5 bg-slate-900 rounded-lg">
            <TbLabelImportantFilled
              className={`size-6 shrink-0 ${priority.className}`}
            />
            <p className="text-slate-50 text-xl">{priority.name}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-start items-center">
            <label htmlFor={id} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                id={id}
                checked={checked}
                onChange={() => dispatch(checkTodo(id))}
                className="sr-only peer"
              />
              <div
                className={`relative w-14 h-7 p-1 rounded-full transition-all duration-500 ${
                  checked ? "bg-green-500" : "bg-red-500"
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
          </div>
          <div className="flex">
            <p className="text-slate-50 text-lg">{showDescription}</p>
          </div>
        </div>
      </div>
      <div className="w-1/4 flex flex-col justify-between gap-1">
        <div className="flex justify-end items-center">
          <div className="flex flex-row items-center gap-1 p-1.5 bg-slate-900 rounded-lg">
            {selectedCategory?.icon}

            <p className="text-slate-50 text-xl">{selectedCategory?.name}</p>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <p className="text-slate-50 text-lg">{showStartDate}</p>
        </div>
      </div>
    </li>
  );
};

export default Todo;
