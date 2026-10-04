const SectionHeading = ({
  eyebrow,
  title,
  description,
  action,
  icon: Icon,
  eyebrowColor = "blue",
  theme = "light",
  className = "",
}) => {
  const eyebrowStyles = {
    blue: {
      iconWrapper: "border-[#4B90BD]/20 bg-[#4B90BD]/10",
      icon: "text-[#4B90BD]",
      text: "text-[#4B90BD]",
    },

    emergency: {
      iconWrapper: "border-[#E5484D]/30 bg-[#E5484D]/10",
      icon: "text-[#E5484D]",
      text: "text-[#FF8588]",
    },

    teal: {
      iconWrapper: "border-[#54977F]/20 bg-[#54977F]/10",
      icon: "text-[#54977F]",
      text: "text-[#54977F]",
    },
  };

  const isDark = theme === "dark";
  const eyebrowStyle = eyebrowStyles[eyebrowColor];

  return (
    <div
      className={`
        grid
        gap-10
        lg:grid-cols-[1fr_0.8fr]
        lg:items-end
        ${className}
      `}
    >
      <div>
        {eyebrow && (
          <div className="mb-7 flex items-center gap-3">
            {Icon && (
              <span
                className={`
                  flex h-8 w-8
                  items-center justify-center
                  rounded-full
                  border
                  ${eyebrowStyle.iconWrapper}
                `}
              >
                <Icon
                  size={14}
                  strokeWidth={1.8}
                  className={eyebrowStyle.icon}
                />
              </span>
            )}

            <span
              className={`
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                ${eyebrowStyle.text}
              `}
            >
              {eyebrow}
            </span>
          </div>
        )}

        {title && (
          <h2
            className={`
              max-w-[780px]
              text-[46px]
              font-semibold
              leading-[0.98]
              tracking-[-0.055em]
              sm:text-[60px]
              lg:text-[76px]
              ${isDark ? "text-white" : "text-[#123044]"}
            `}
          >
            {title}
          </h2>
        )}
      </div>

      {(description || action) && (
        <div className="lg:pb-2">
          {description && (
            <p
              className={`
                max-w-[440px]
                text-[16px]
                leading-7
                ${isDark ? "text-white/65" : "text-[#647786]"}
              `}
            >
              {description}
            </p>
          )}

          {action && (
            <a
              href={action.href}
              className={`
                group
                mt-6
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                ${isDark ? "text-white" : "text-[#123044]"}
              `}
            >
              {action.label}

              {action.icon ? (
                <action.icon
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              ) : (
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              )}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
