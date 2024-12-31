import { ReactElement } from "react";
import { StateType } from "../../app/features/todo/todosSlice";

type PropType = {
  todo: StateType;
};

const Todo = ({ todo }: PropType): ReactElement => {
  return <li></li>;
};

export default Todo;
