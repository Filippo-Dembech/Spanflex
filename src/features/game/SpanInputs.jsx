import { useRef } from "react";
import SpanInput from "./SpanInput";

export default function SpanInputs({ values, onRightInput }) {
    const correctValues = useRef(values.map((_) => false))

    return (
        <div className="mt-5 flex justify-around">
            {values.map((value, i) => (
                <SpanInput onChange={(e) => {
                    if (Number(e.target.value) === Number(value)) {
                        correctValues.current[i] = true;
                        if (correctValues.current.every(val => val === true)) {
                            onRightInput()
                        }
                    }
                }} expectedValue={value} key={i}/>
            ))}
        </div>
    );
}
