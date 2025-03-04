import Button from "../components/Button";
import { FaPlay } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { usePageTurner } from "../context/PageContext";
import { pages } from "./pages";

export default function Homepage() {
  const { setCurrentPage } = usePageTurner();

  return (
    <div className="page overflow-hidden">
      <img
        src="/src/assets/brain.svg"
        className="absolute z-[-1] block w-[600px] max-w-[1000px] opacity-7 sm:w-[70vw]"
      />
      <Button
        onClick={() => setCurrentPage(pages.settingsPage)}
        invertColors
        className="absolute top-4 right-4"
        icon={<IoSettingsSharp />}
      >
        Settings
      </Button>
      <h1 className="main-header font-playfair mb-2 text-[clamp(4rem,10vw+1rem,6rem)] font-bold">
        SpanFlex
      </h1>
      <h2 className="text-[clamp(1rem,3vw,1.5rem)]">
        Flex the <span className="font-bold text-amber-400">span</span>, boost
        your <span className="font-bold text-amber-400">fun</span>!
      </h2>
      <div className="mt-8 flex w-40 max-w-[400px] flex-col justify-center gap-4 sm:w-[60vw] sm:flex-row md:mt-17">
        <Button
          onClick={() => alert("first time?")}
          className="w-full"
          icon={<IoSchool />}
        >
          First Time?
        </Button>
        <Button
          onClick={() => alert("quick start")}
          className="w-full"
          icon={<FaPlay />}
        >
          Quick Start
        </Button>
      </div>
    </div>
  );
}
