import { useRef } from "react";
import SpanInput from "./SpanInput";

export default function SpanInputs({ values, onRightInput, className }) {
    const correctValues = useRef(values.map((_) => false));
    const refs = useRef([]);

    return (
        <div className={`mt-5 flex justify-around ${className}`}>
            {values.map((value, i) => (
                <SpanInput
                    ref={(el) => (refs.current[i] = el)}
                    autofocus={i === 0}
                    onChange={(e) => {
                        if (e.target.value === "") return;
                        if (i < values.length - 1) {
                            refs.current[i + 1].focus();
                            refs.current[i + 1].select();
                        } 
                        if (Number(e.target.value) === Number(value)) {
                            correctValues.current[i] = true;
                            if (
                                correctValues.current.every(
                                    (val) => val === true,
                                )
                            ) {
                                onRightInput();
                            }
                        }
                    }}
                    expectedValue={value}
                    key={i}
                />
            ))}
        </div>
    );
}
