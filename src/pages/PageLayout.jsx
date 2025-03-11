import { IoMdArrowRoundBack } from "react-icons/io";
import { usePageTurner } from "../context/PageContext";
import { motion } from "motion/react";

export default function PageLayout({
    children,
    gobackButton,
    sideElement,
    className,
    backgroundSrc,
}) {
    const { goBack } = usePageTurner();

    return (
        <motion.div
            className="page flex flex-col overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{duration: 1.2}}
        >
            {backgroundSrc && (
                <img
                    src={backgroundSrc}
                    className="absolute z-[-1] h-full w-full opacity-7 md:scale-110 lg:scale-125"
                />
            )}
            {(gobackButton || sideElement) && (
                <header className="relative flex p-2">
                    {gobackButton && (
                        <button
                            onClick={goBack}
                            className="rounded-full bg-amber-400 p-1 text-2xl text-amber-50 duration-200 hover:bg-amber-500 md:text-3xl"
                        >
                            <IoMdArrowRoundBack />
                        </button>
                    )}
                    <span className="ml-auto">{sideElement}</span>
                </header>
            )}
            <div className={`flex-grow overflow-y-auto ${className}`}>
                {children}
            </div>
        </motion.div>
    );
}
