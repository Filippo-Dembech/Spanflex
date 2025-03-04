export default function Button({
  onClick,
  icon,
  children,
  className,
  invertColors,
}) {
  const baseStyle =
    "flex items-center justify-center gap-2 rounded-xl border-2 border-amber-400 px-2 py-1 duration-200";

  if (invertColors)
    return (
      <button
        onClick={onClick}
        className={`group bg-amber-400 text-amber-50 hover:bg-amber-50 hover:text-amber-400 ${baseStyle} ${className}`}
      >
        {children}
        <span className="text-amber-50 group-hover:text-amber-400">{icon}</span>
      </button>
    );
  return (
    <button
      onClick={onClick}
      className={`group hover:bg-amber-400 hover:text-amber-50 ${baseStyle} ${className}`}
    >
      {children}
      <span className="text-amber-400 group-hover:text-amber-50">{icon}</span>
    </button>
  );
}
