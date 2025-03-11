import Button from "../components/Button";
import { FaPlay, FaQuestion } from "react-icons/fa";
import { IoSchool, IoSettings } from "react-icons/io5";
import { usePageTurner } from "../context/PageContext";
import { pages } from "./pages";
import PageLayout from "./PageLayout";

export default function Homepage() {
    const { setPage } = usePageTurner();

    return (
        <PageLayout
            backgroundSrc="/src/assets/brain.svg"
            className="flex flex-col items-center justify-center"
        >
            <Button
                className="absolute top-3 right-3 hover:before:text-xs hover:before:content-['Wikipedia']"
                href="https://en.wikipedia.org/wiki/Memory_span"
                icon={<FaQuestion />}
                invertColors
            ></Button>
            <h1 className="main-header font-playfair mb-2 text-[clamp(4rem,10vw+1rem,6rem)] font-bold">
                SpanFlex
            </h1>
            <h2 className="text-[clamp(1rem,3vw,1.5rem)]">
                Flex the <span className="font-bold text-amber-400">span</span>,
                boost your <span className="font-bold text-amber-400">fun</span>
                !
            </h2>
            <div className="mt-8 flex w-40 max-w-[400px] flex-col justify-center gap-4 sm:w-[60vw] sm:flex-row md:mt-10">
                <Button
                    onClick={() => setPage(pages.tutorialPage)}
                    className="w-full"
                    icon={<IoSchool />}
                >
                    First Time?
                </Button>
                <Button
                    onClick={() => setPage(pages.dojoPage)}
                    className="w-full"
                    icon={<FaPlay />}
                >
                    Quick Start
                </Button>
                <Button
                    onClick={() => setPage(pages.settingsPage)}
                    className="w-full sm:absolute sm:top-3 sm:left-3 sm:w-auto before:content-['Settings'] sm:before:hidden sm:border-0 sm:scale-130"
                    icon={<IoSettings />}
                >
                </Button>
            </div>
        </PageLayout>
    );
}
