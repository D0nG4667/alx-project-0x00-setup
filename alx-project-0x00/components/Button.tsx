import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button
      className={`bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-200 ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
