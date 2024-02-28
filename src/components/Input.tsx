type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  size?: "sm" | "md" | "lg";
};

const Input = ({ value, onChange, placeholder, size = "md" }: InputProps) => {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        ${size === "sm" && "w-40 h-8 text-sm"}
        ${size === "md" && "w-60 h-10 text-md"}
        ${size === "lg" && "w-80 h-12 text-lg"}
        px-2 rounded-sm outline-none border-[pink] border-2 `}
    />
  );
};

export default Input;
