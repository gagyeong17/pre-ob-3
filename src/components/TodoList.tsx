import Button from "./Button";
import { Todo } from "@/type";

type TodoListProps = {
  todo: Todo[];
  handleDelete: (id: number) => void;
};

const TodoList = ({ todo, handleDelete }: TodoListProps) => {
  return (
    <div className="pt-4">
      <h1 className="pb-4 font-bold">Todo List</h1>
      {todo.map((todo) => (
        <div className="flex items-center justify-between border-b">
          <span key={todo.id}>{todo.text}</span>
          <Button onClick={() => handleDelete(todo.id)} text="delete" />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
