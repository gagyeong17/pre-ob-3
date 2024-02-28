import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, deleteTodo } from "./store/todoSlice";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import { Todo } from "./type";

type RootState = {
  todo: Todo[];
};

function App() {
  const dispatch = useDispatch();
  const todo = useSelector((state: RootState) => state.todo);

  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      dispatch(addTodo(inputValue));
      setInputValue("");
    }
  };
  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="flex justify-center w-full h-screen">
      <div className="flex flex-col gap-1 pt-5">
        <TodoForm
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSubmit={handleSubmit}
        />
        <TodoList todo={todo} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
