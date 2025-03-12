import { useState } from "react";
import { motion } from "motion/react";
import { pages } from "./pages";

import { usePageTurner } from "../context/PageContext";
import { useUserParameters } from "../features/parameters/UserParametersContext";

import PageLayout from "./PageLayout";
import Stepper from "../components/Stepper";
import ConditionalStep from "../components/ConditionalStep";
import Step from "../components/Step";
import SpanGame from "../features/game/SpanGame";

export default function TutorialPage() {
    const [condition, setCondition] = useState(false);
    const [gameIsOn, setGameIsOn] = useState(false);
    const [tutorialSpan, setTutorialSpan] = useState(3);
    const { setSpan } = useUserParameters();
    const { setPage } = usePageTurner();

    return (
        <PageLayout
            gobackButton
            className="mx-auto flex flex-col overflow-x-hidden overflow-y-auto"
            sideElement={
                gameIsOn && (
                    <div key={tutorialSpan} className="absolute top-5 right-5">
                        SPAN:{" "}
                        <motion.div
                            key={tutorialSpan}
                            className="inline text-2xl font-bold"
                            initial={{
                                opacity: 0,
                                transform: "rotate(180deg)",
                            }}
                            animate={{ opacity: 1, transform: "rotate(0)" }}
                            transition={{ duration: 1 }}
                        >
                            {tutorialSpan}
                        </motion.div>
                    </div>
                )
            }
        >
            <Stepper>
                <Step>
                    <h2 className="mb-2 text-3xl font-bold">
                        What is Memory Span?
                    </h2>
                    <p>
                        In human memory, '<strong>span</strong>' refers to the
                        amount of information that can be held in memory at a
                        given time.
                    </p>

                    <h3 className="mt-4 mb-2 text-2xl font-semibold">
                        The "Magic Number"
                    </h3>
                    <p>
                        An American Psychologist named{" "}
                        <em>George Armitage Miller</em> discovered that most
                        people can remember about <strong>7 ± 2</strong> things
                        at once. But newer research says it’s probably closer to{" "}
                        <strong>4 ± 1</strong>.
                    </p>

                    <h3 className="mt-4 mb-2 text-2xl font-semibold">
                        Types of Memory Span
                    </h3>
                    <ul className="ml-8">
                        <li className="mb-2">
                            <strong>Digit Span</strong> – How many numbers you
                            can remember in order. <br />{" "}
                            <div>Try this: 732941 – can you say it back?</div>
                        </li>
                        <li>
                            <strong>Word Span</strong> – How many words you can
                            hold in your head. <br />{" "}
                            <div>Example: Apple, Chair, Dog, Moon, Phone</div>
                        </li>
                    </ul>
                </Step>
                <Step onContinue={() => setGameIsOn(true)}>
                    <h2 className="mb-2 text-3xl font-bold">
                        Let's Test Your Span
                    </h2>
                    <p className="">
                        What is your span? How many digits can you hold in
                        memory?
                    </p>
                    <h3 className="mt-4 mb-2 text-2xl font-semibold">
                        What Do You Need to Do?
                    </h3>
                    <p>
                        In the next page you will have to memorize some digits
                        (let's start with 3) and after that you will have to
                        write them down in the exact order they have been shown
                        to you.
                    </p>
                    <h3 className="mt-4 mb-2 text-2xl font-semibold">
                        Let's Start!
                    </h3>
                    <p>
                        Can you handle that? Prove it, press on{" "}
                        <em>Continue</em> and let's start the test...
                    </p>
                </Step>
                <ConditionalStep
                    condition={condition}
                    onContinue={() => setSpan(tutorialSpan - 1)}
                >
                    <SpanGame
                        tutorial
                        key={tutorialSpan}
                        span={tutorialSpan}
                        interval={1000}
                        onIncreaseSpan={() =>
                            setTutorialSpan((curr) => curr + 1)
                        }
                        onCantRemember={() => setCondition(true)}
                    />
                </ConditionalStep>
                <Step onContinue={() => setPage(pages.dojoPage)}>
                    <h2 className="mb-2 text-3xl font-bold">
                        Your Span is {tutorialSpan - 1}!
                    </h2>
                    <p>
                        You have tested your span range and when you had to
                        memorize {tutorialSpan} items you had problems
                        memorizing them. So you can retain {tutorialSpan - 1}{" "}
                        digits in mind.
                    </p>
                    <h3 className="mt-4 mb-2 text-2xl font-semibold">
                        Let's practice
                    </h3>
                    <p>
                        If you want to practice more with your span capabilities
                        and wide your span range you can click the{" "}
                        <code className="text-amber-500">Continue</code> button
                        below to go to the practice Dojo and enhance your memory
                        starting from a span of {tutorialSpan - 1}.
                    </p>
                </Step>
            </Stepper>
        </PageLayout>
    );
}
