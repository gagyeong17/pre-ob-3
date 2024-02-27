type ButtonProps = {
  text: string;
  onClick: () => void;
  size?: "sm" | "md" | "lg";
};

const Button = ({ text, onClick, size = "md" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
            ${size === "sm" && "w-20 h-8 text-sm"}
            ${size === "md" && "w-40 h-10 text-md"}
            ${size === "lg" && "w-60 h-12 text-lg"}
            bg-[pink] rounded-sm border-none`}
    >
      {text}
    </button>
  );
};

export default Button;
