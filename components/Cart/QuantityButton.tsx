import LoadingSpinner from "./LoadingSpinner";

interface QuantityButtonProps {
  onClick: () => Promise<void>;
  disabled: boolean;
  isPending: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({
  onClick,
  disabled,
  isPending,
  icon: Icon,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded p-2 transition-colors ${
        disabled
          ? "opacity-50 cursor-not-allowed bg-gray-300"
          : "cursor-pointer hover:bg-gray-100 active:bg-gray-200"
      } ${className}`}
    >
      {isPending ? <LoadingSpinner /> : <Icon />}
      {/* {isPending ? <Icon /> : <LoadingSpinner />} */}
    </button>
  );
};

export default QuantityButton;
