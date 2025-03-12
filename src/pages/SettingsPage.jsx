import { useRef, useState } from "react";
import { useUserParameters } from "../features/parameters/UserParametersContext";
import { FaCheckCircle } from "react-icons/fa";
import { useFeedback } from "../hooks/useFeedback";

import PageLayout from "./PageLayout";
import NumberField from "../components/NumberField";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";

export default function SettingsPage() {
    const { span, setSpan, spanInterval, setSpanInterval, isNumeric, setIsNumeric } =
        useUserParameters();
    const [inputSpan, setInputSpan] = useState(span);
    const [inputSpanInterval, setInputSpanInterval] = useState(spanInterval);
    const [isFeedbacking, giveFeedback] = useFeedback();

    const spanRef = useRef();
    const intervalRef = useRef();

    return (
        <PageLayout gobackButton className="px-8 py-3">
            <div className="m-auto max-w-120">
                <h2 className="text-3xl">Settings</h2>
                <div className="flex flex-col space-y-3">
                    <NumberField
                        label="Span"
                        ref={spanRef}
                        onChange={(input) => setInputSpan(input)}
                        placeholder={`current = ${span}`}
                    />
                    <NumberField
                        label="Interval"
                        ref={intervalRef}
                        onChange={(input) => setInputSpanInterval(input * 1000)}
                        placeholder={`current = ${spanInterval / 1000}`}
                    />
                    <Checkbox
                        label="Numeric"
                        onCheck={setIsNumeric}
                        isChecked={isNumeric}
                    />
                    <Button
                        invertColors
                        className={
                            isFeedbacking &&
                            "border-lime-400 bg-lime-100 text-lime-400 hover:text-lime-400"
                        }
                        onClick={() => {
                            giveFeedback();
                            setSpan(inputSpan);
                            setSpanInterval(inputSpanInterval);
                            spanRef.current.value = "";
                            intervalRef.current.value = "";
                        }}
                    >
                        {isFeedbacking ? (
                            <span className="flex items-center gap-3">
                                <FaCheckCircle /> Settings saved
                            </span>
                        ) : (
                            "Save Settings"
                        )}
                    </Button>
                </div>
            </div>
        </PageLayout>
    );
}
