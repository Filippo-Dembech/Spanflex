import { IoMdArrowRoundBack } from "react-icons/io";
import { usePageTurner } from "../context/PageContext";

export default function PageLayout({ children, gobackButton, sideElement, className }) {
  const { goBack } = usePageTurner();

  return (
    <div className="page flex flex-col overflow-hidden">
      <header className="flex relative p-2">
        {gobackButton && (
          <button
            onClick={goBack}
            className="rounded-full bg-amber-400 p-1 text-xl text-amber-50 duration-200 hover:bg-amber-500"
          >
            <IoMdArrowRoundBack />
          </button>
        )}
        <span className="ml-auto">
          {sideElement}
        </span>
      </header>
      <div className={`flex-grow ${className}`}>
        {children}
      </div>
    </div>
  );
}
