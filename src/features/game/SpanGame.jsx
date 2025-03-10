import { useRef, useState } from "react";
import { gameStatus as status } from "./gameStatus";
import { generateRandomDigits } from "./helpers";
import SpanInputs from "./SpanInputs";
import Button from "../../components/Button";
import IntervalPresenter from "../../IntervalPresenter";
import { motion } from "motion/react";
import { usePageTurner } from "../../context/PageContext";
import { pages } from "../../pages/pages";

export default function SpanGame({ span, interval, onIncreaseSpan, onCantRemember }) {
    const [gameStatus, setGameStatus] = useState(() => status.idle);
    const { setPage } = usePageTurner();

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
            duration: interval, // interval here
            body: (
                <motion.p
                    key={i}
                    className="text-[6rem] font-bold"
                    initial={{ transform: "translateY(-10px)" }}
                    animate={{ transform: "translateY(0)" }}
                >
                    {digit}
                </motion.p>
            ),
        })),
    );

    return (
        <IntervalPresenter
            timedComponents={[...countdown, ...spanItems.current]}
            lastComponent={
                <div className="flex flex-col space-y-3 text-center flex-wrap">
                    <h2>Enter the digits in the right order:</h2>
                    <SpanInputs
                        values={digits.current}
                        onRightInput={() => {
                            setGameStatus(status.win);
                        }}
                    />
                    {gameStatus !== status.win && <Button onClick={() => onCantRemember()}>Can't Remember</Button>}
                    {gameStatus === status.win && (
                        <motion.div initial={{ scale: 0, opacity: 0}} animate={{ scale: 1, opacity: 1}} className="flex flex-col space-y-3">
                            <p className="mt-5 text-2xl">
                                CONGRATULATIONS! You have span of {span}
                            </p>
                            <Button onClick={onIncreaseSpan}>Increase Span</Button>
                        </motion.div>
                    )}
                </div>
            }
        />
    );
}
