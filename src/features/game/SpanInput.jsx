import { useState } from "react";

export default function SpanInput({ expectedValue, onChange }) {
    const [isCorrect, setIsCorrect] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const normalStyle =
        "text-bold outline-none bg-amber-50 text-center px-3 py-1 border-2 border-amber-400 rounded-2xl";
    const correctStyle =
        "text-bold outline-none bg-lime-50 text-center px-3 py-1 border-2 border-lime-400 rounded-2xl";
    const wrongStyle =
        "text-bold outline-none bg-red-50 text-center px-3 py-1 border-2 border-red-400 rounded-2xl";

    return (
        <input
            onChange={(e) => {
                if (e.target.value === "") return;
                onChange(e);
                setIsActive(true);
                setIsCorrect(false);
                if (Number(e.target.value) === Number(expectedValue)) {
                    setIsCorrect(true);
                }
            }}
            className={
                isActive ? (isCorrect ? correctStyle : wrongStyle) : normalStyle
            }
            type="number"
            min={0}
            max={9}
        />
    );
}
