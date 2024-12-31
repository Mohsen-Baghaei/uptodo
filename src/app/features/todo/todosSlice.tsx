import { createSlice } from "@reduxjs/toolkit";

import { TbSpeakerphone } from "react-icons/tb";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { FaShoppingBag, FaPencilRuler } from "react-icons/fa";
import { FaDumbbell } from "react-icons/fa6";
import { MdOutlineWorkHistory, MdOutlineHealthAndSafety } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { BsCameraReels } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { VscArchive } from "react-icons/vsc";

export type priorityType = {
  id: number;
  name: string;
  className: string;
};

export const priorityValue: priorityType[] = [
  {
    id: 1,
    name: "Not Important",
    className: "text-red-400",
  },
  {
    id: 2,
    name: "Slightly Important",
    className: "text-red-500",
  },
  {
    id: 3,
    name: "Moderately Important",
    className: "text-red-600",
  },
  {
    id: 4,
    name: "Important",
    className: "text-red-700",
  },
  {
    id: 5,
    name: "Very Important",
    className: "text-red-800",
  },
];

export type categoryType = {
  id: number;
  name: string;
  icon: JSX.Element;
};

export const categoryValue: categoryType[] = [
  {
    id: 1,
    name: "Grocery",
    icon: <FaShoppingBag className="size-5 shrink-0  text-lime-500" />,
  },
  {
    id: 2,
    name: "Work",
    icon: <MdOutlineWorkHistory className="size-5 shrink-0  text-red-500" />,
  },
  {
    id: 3,
    name: "Sport",
    icon: <FaDumbbell className="size-5 shrink-0  text-sky-500" />,
  },
  {
    id: 4,
    name: "Design",
    icon: <FaPencilRuler className="size-5 shrink-0  text-teal-500" />,
  },
  {
    id: 5,
    name: "University",
    icon: <RiGraduationCapFill className="size-5 shrink-0  text-violet-500" />,
  },
  {
    id: 6,
    name: "Social",
    icon: <TbSpeakerphone className="size-5 shrink-0  text-rose-500" />,
  },
  {
    id: 7,
    name: "Music",
    icon: <IoMusicalNotesOutline className="size-5 shrink-0  text-cyan-500" />,
  },
  {
    id: 8,
    name: "Health",
    icon: (
      <MdOutlineHealthAndSafety className="size-5 shrink-0  text-yellow-500" />
    ),
  },
  {
    id: 9,
    name: "Movie",
    icon: <BsCameraReels className="size-5 shrink-0  text-indigo-500" />,
  },
  {
    id: 10,
    name: "Home",
    icon: <HiOutlineHome className="size-5 shrink-0  text-orange-500" />,
  },
  {
    id: 11,
    name: "Other",
    icon: <VscArchive className="size-5 shrink-0  text-blue-500" />,
  },
];

const initialState: any = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
