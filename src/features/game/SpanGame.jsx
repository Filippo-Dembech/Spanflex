import { useRef, useState } from "react";
import { gameStatus as status } from "./gameStatus";
import { generateRandomDigits } from "./helpers";
import SpanInputs from "./SpanInputs";
import Button from "../../components/Button";
import IntervalPresenter from "../../IntervalPresenter";
import { motion } from "motion/react";

export default function SpanGame({
    span,
    interval,
    onIncreaseSpan,
    onCantRemember,
    onRetry,
    tutorial
}) {
    const [gameStatus, setGameStatus] = useState(() => status.idle);

    const countdown = [
        {
            duration: 1000,
            body: <p className="text-[3rem]">3</p>,
        },
        {
            duration: 1000,
            body: <p className="text-[3rem]">2</p>,
        },
        {
            duration: 1000,
            body: <p className="text-[3rem]">1</p>,
        },
        {
            duration: 1000,
            body: <p className="text-[3rem]">MEMORIZE</p>,
        },
    ];

    const digits = useRef(generateRandomDigits(span));
    const spanItems = useRef(
        digits.current.map((digit, i) => ({
            duration: interval,
            body: (
                <motion.p
                    key={i}
                    className="text-[6rem] font-bold"
                    initial={{ y: -10 }}
                    animate={{ y: 0 }}
                >
                    {digit}
                </motion.p>
            ),
        })),
    );
    
    if (tutorial) return (
        <IntervalPresenter
            timedComponents={[...countdown, ...spanItems.current]}
            lastComponent={
                <div className="flex flex-col flex-wrap space-y-3 text-center">
                    <h2>Enter the digits in the right order:</h2>
                    <SpanInputs
                        className="gap-3 flex-wrap max-w-100"
                        values={digits.current}
                        onRightInput={() => {
                            setGameStatus(status.win);
                        }}
                    />
                    {gameStatus !== status.win && (
                        <Button className="w-70 m-auto md:w-100" onClick={() => onCantRemember()}>
                            Can't Remember
                        </Button>
                    )}
                    {gameStatus === status.win && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col space-y-3"
                        >
                            <p className="mt-5 text-xl">CONGRATULATIONS!</p>
                            <p className="mb-4">
                                You have span of {span}
                            </p>
                            <Button className="w-70 md:w-100" onClick={onIncreaseSpan}>
                                Increase Span
                            </Button>
                        </motion.div>
                    )}
                </div>
            }
        />
    );
    return (
        <IntervalPresenter
            timedComponents={[...countdown, ...spanItems.current]}
            lastComponent={
                <div className="flex flex-col flex-wrap space-y-3 text-center px-10 items-center">
                    <h2>Enter the digits in the right order:</h2>
                    <SpanInputs
                        className="gap-3 flex-wrap max-w-100"
                        values={digits.current}
                        onRightInput={() => {
                            setGameStatus(status.win);
                        }}
                    />
                    {gameStatus === status.win && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="flex flex-col space-y-3 items-center"
                        >
                            <p className="mt-5 text-xl sm:text-2xl">CONGRATULATIONS!</p>
                            <p className="mb-4">
                                You have span of {span}
                            </p>
                            <Button className="w-70 md:w-100" onClick={onIncreaseSpan}>
                                Increase Span
                            </Button>
                        </motion.div>
                    )}
                    <Button className="w-70 md:w-100" onClick={() => onRetry()}>
                        Retry
                    </Button>
                </div>
            }
        />
    );
}
