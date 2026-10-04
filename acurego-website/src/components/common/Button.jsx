import { ArrowUpRight } from "lucide-react";

const Button = ({
  children,
  variant = "primary",
  showIcon = true,
  className = "",
  ...props
}) => {
  const styles = {
    primary:
      "bg-[#0B1220] text-white hover:bg-[#18253A] shadow-[0_10px_30px_rgba(11,18,32,0.14)]",

    accent:
      "bg-[#16B894] text-white hover:bg-[#0D8F75] shadow-[0_10px_30px_rgba(22,184,148,0.18)]",

    secondary:
      "border border-slate-200 bg-white text-[#0B1220] hover:border-slate-300 hover:bg-slate-50",
  };

  return (
    <button
      className={`
        group inline-flex items-center justify-center gap-2
        rounded-full
        px-5 py-3
        text-sm font-semibold
        transition-all duration-300
        active:scale-[0.98]
        ${styles[variant]}
        ${className}
      `}
      {...props}
    >
      <span>{children}</span>

      {showIcon && (
        <ArrowUpRight
          size={17}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </button>
  );
};

export default Button;
