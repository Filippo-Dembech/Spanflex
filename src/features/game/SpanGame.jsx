import { useEffect, useRef, useState } from "react";
import { gameStatus as status } from "./gameStatus";
import { useCountdown } from "./useCountdown";
import { generateRandomDigits, separateDigits } from "./helpers";
import SpanInputs from "./SpanInputs";
import Button from "../../components/Button";

export default function SpanGame({ span, interval }) {
    const [gameStatus, setGameStatus] = useState(() => status.idle);
    const [digitIndex, setDigitIndex] = useState(0);

    const countdown = useCountdown(() => {
        if (gameStatus === status.idle) setGameStatus(status.on);
    });

    const digits = useRef(generateRandomDigits(span));
    const separatedDigits = useRef(separateDigits(digits.current));

    useEffect(() => {
        if (gameStatus !== status.on) return;
        if (digitIndex >= separatedDigits.length) return;

        const intervalId = setInterval(() => {
            if (digitIndex === separatedDigits.current.length - 1)
                setGameStatus(status.input);
            setDigitIndex((curr) => curr + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [gameStatus, digitIndex]);

    if (gameStatus === status.idle)
        return <div className="text-4xl">{countdown}</div>;

    if (gameStatus === status.on)
        return (
            <div className="text-[5rem] font-bold" key={digitIndex}>
                {separatedDigits.current[digitIndex]}
            </div>
        );

    return (
        <div className="flex flex-col space-y-3 text-center">
            <h2>Enter the digits in the right order:</h2>
            <SpanInputs
                values={digits.current}
                onRightInput={() => {
                    setGameStatus(status.win);
                }}
            />
            {status.win && (
                <div className="flex flex-col space-y-3">
                    <p className="mt-5 text-2xl">
                        CONGRATULATIONS! You have span of {span}
                    </p>
                    <Button>Increase Span</Button>
                </div>
            )}
        </div>
    );
}
