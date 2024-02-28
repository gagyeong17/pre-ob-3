import Input from "./Input";
import Button from "./Button";

type TodoFormProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSubmit: () => void;
};

const TodoForm = ({
  inputValue,
  setInputValue,
  handleSubmit,
}: TodoFormProps) => {
  return (
    <div className="flex gap-2">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type here"
      />
      <Button text="submit" onClick={handleSubmit} />
    </div>
  );
};

export default TodoForm;
