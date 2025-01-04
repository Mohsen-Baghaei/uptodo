import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useRef,
  useState,
  useEffect,
} from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import {
  priorityType,
  priorityValue,
  categoryType,
  categoryValue,
  createTask,
} from "../../app/features/todo/todosSlice";

import { TbLabelImportantFilled } from "react-icons/tb";
import { HiChevronUpDown } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";

import Datepicker from "react-tailwindcss-datepicker";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const NewTodo = (): ReactElement => {
  const userRef = useRef<HTMLInputElement>(null);
  const errRef = useRef<HTMLParagraphElement>(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [errMsg, setErrMsg] = useState<string>("");

  const [priority, setPriority] = useState<priorityType>(priorityValue[3]);

  const [category, setCategory] = useState<categoryType>(categoryValue[1]);

  const [date, setDate] = useState({ startDate: null, endDate: null });

  const [startTime, setStartTime] = useState<string>("00:00");

  const [endTime, setEndTime] = useState<string>("00:00");

  const [taskName, setTaskName] = useState<string>("");

  const [taskDescription, setTaskDescription] = useState<string>("");

  const canSave: boolean = !taskName || date.startDate === null ? true : false;

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [taskName, date]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!canSave) {
      dispatch(
        createTask({
          taskName,
          taskDescription,
          startDate: String(date.startDate),
          startTime,
          endTime,
          priority,
          category: category.id,
        })
      );
      setTaskName("");
      setTaskDescription("");
      setDate({ startDate: null, endDate: null });
      setStartTime("00:00");
      setEndTime("00:00");
      setPriority(priorityValue[3]);
      setCategory(categoryValue[1]);
      navigate("/");
    } else {
      setErrMsg("Task Name and Task Time are Required");
    }
  };

  return (
    <div className="flex w-4/5 mx-auto flex-col justify-start items-start overflow-visible">
      <p
        className={
          errMsg
            ? "bg-slate-300 text-red-500 text-sm md:text-base rounded-xl p-3 relative flex outline outline-2 outline-offset-1 outline-red-500 w-full mb-2"
            : "hidden"
        }
        ref={errRef}
      >
        {errMsg}
      </p>
      <h2 className=" text-3xl/9 font-bold tracking-tight text-slate-50 w-full">
        Add Task
      </h2>

      <form
        className="space-y-1 md:space-y-6  md:mt-5 w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-1/2">
            <label
              htmlFor="taskName"
              className="block text-xl/6 font-medium text-slate-50"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="taskName"
                name="taskName"
                type="text"
                value={taskName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTaskName(e.target.value)
                }
                placeholder="Task Name"
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex items-center justify-between">
              <label
                htmlFor="description"
                className="block text-xl/6 font-medium text-slate-50"
              >
                Description
              </label>
            </div>
            <div className="mt-2">
              <input
                id="description"
                name="description"
                type="text"
                value={taskDescription}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setTaskDescription(e.target.value)
                }
                placeholder="Task Description"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-1/2">
            <p className="block text-xl/6 font-medium text-slate-50">Date</p>

            <div className="mt-2">
              <Datepicker
                useRange={false}
                inputId="date"
                asSingle={true}
                value={date}
                // @ts-ignore
                onChange={(newValue) => setDate(newValue)}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-between gap-4">
            <div className="w-1/2">
              <label
                htmlFor="start-time"
                className="block text-xl/6 font-medium text-slate-50 mb-2"
              >
                Start time:
              </label>
              <input
                type="time"
                value={startTime}
                // @ts-ignore
                onChange={(e: ChangeEvent) => setStartTime(e.target.value)}
                id="start-time"
                className="block w-full rounded-md bg-slate-800 px-3 py-1.5 text-base text-slate-50  placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6"
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="end-time"
                className="block text-xl/6 font-medium text-slate-50 mb-2"
              >
                End time:
              </label>
              <input
                type="time"
                value={endTime}
                // @ts-ignore
                onChange={(e: ChangeEvent) => setEndTime(e.target.value)}
                id="end-time"
                className="block w-full rounded-md bg-slate-800 px-3 py-1.5 text-base text-slate-50  placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-xl/6"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="w-full md:w-1/2">
            <Listbox value={priority} onChange={setPriority}>
              <Label className="block text-xl/6 font-medium text-slate-50">
                Priority
              </Label>
              <div className="relative mt-2">
                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                    <TbLabelImportantFilled
                      className={`size-5 shrink-0 ${priority.className}`}
                    />

                    <span className="block truncate text-lg/6">
                      {priority.name}
                    </span>
                  </span>
                  <HiChevronUpDown
                    aria-hidden="true"
                    className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </ListboxButton>

                <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                  {priorityValue.map((val) => (
                    <ListboxOption
                      key={val.id}
                      value={val}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <div className="flex items-center">
                        <TbLabelImportantFilled
                          className={`size-5 shrink-0 rounded-full ${val.className}`}
                        />

                        <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold text-lg/6">
                          {val.name}
                        </span>
                      </div>

                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                        <FaCheck aria-hidden="true" className="size-5" />
                      </span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>
          <div className="w-full md:w-1/2">
            <Listbox value={category} onChange={setCategory}>
              <Label className="block text-xl/6 font-medium text-slate-50">
                Category
              </Label>
              <div className="relative mt-2">
                <ListboxButton className="grid w-full cursor-default grid-cols-1 rounded-md bg-white py-1.5 pl-3 pr-2 text-left text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
                    {category.icon}

                    <span className="block truncate text-lg/6">
                      {category.name}
                    </span>
                  </span>
                  <HiChevronUpDown
                    aria-hidden="true"
                    className="col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </ListboxButton>

                <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                  {categoryValue.map((val) => (
                    <ListboxOption
                      key={val.id}
                      value={val}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                    >
                      <div className="flex items-center">
                        {val.icon}

                        <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold text-lg/6">
                          {val.name}
                        </span>
                      </div>

                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-[&:not([data-selected])]:hidden group-data-[focus]:text-white">
                        <FaCheck aria-hidden="true" className="size-5" />
                      </span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={canSave}
            className="lex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xl/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-slate-500"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
