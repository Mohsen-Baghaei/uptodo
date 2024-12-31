import { ReactElement } from "react";

import EmptyTodos from "./EmptyTodos";
import { useSelector } from "react-redux";
import { getAllTodos, StateType } from "../../app/features/todo/todosSlice";
import Todo from "./Todo";

const TodoMainPage = (): ReactElement => {
  const alltodos: StateType[] = useSelector(getAllTodos);

  const showTodos = alltodos.map((todo) => <Todo key={todo.id} todo={todo} />);

  return (
    <main className=" flex flex-col justify-between md:justify-start ">
      <EmptyTodos />
      <ul className="w-full flex flex-col p-5">{showTodos}</ul>
    </main>
  );
};

export default TodoMainPage;
