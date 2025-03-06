export default function Button({
  onClick,
  icon,
  className,
  invertColors,
  href,
  children,
}) {
  const baseStyle =
    "flex items-center justify-center gap-2 rounded-xl border-2 border-amber-400 px-2 py-1 duration-200";
  const buttonStyle = invertColors
    ? `group bg-amber-400 text-amber-50 hover:bg-amber-50 hover:text-amber-400 ${baseStyle} ${className}`
    : `group hover:bg-amber-400 hover:text-amber-50 ${baseStyle} ${className}`;
  const iconStyle = invertColors
    ? "text-amber-50 group-hover:text-amber-400"
    : "text-amber-400 group-hover:text-amber-50";

  if (href)
    return (
      <a className={buttonStyle} href={href} target="_blank">
        <span className={iconStyle}>{icon}</span>
      </a>
    );

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
      <span className={iconStyle}>{icon}</span>
    </button>
  );
}
