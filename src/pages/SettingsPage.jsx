import { useRef, useState } from "react";
import Button from "../components/Button";
import { useUserParameters } from "../context/UserParametersContext";
import PageLayout from "./PageLayout";
import { FaCheckCircle } from "react-icons/fa";
import { useFeedback } from "../hooks/useFeedback";

export default function SettingsPage() {
    const { span, setSpan, showSpeed, setShowSpeed, isNumeric, setIsNumeric } =
        useUserParameters();
    const [inputSpan, setInputSpan] = useState(span);
    const [inputSpanInterval, setInputSpanInterval] = useState(showSpeed);
    const [isFeedbacking, giveFeedback] = useFeedback();

    const spanRef = useRef();
    const intervalRef = useRef();

    return (
        <PageLayout gobackButton className="px-8 py-3">
            <div className="max-w-120 m-auto">
                <h2 className="text-3xl">Settings</h2>
                <div className="flex flex-col space-y-3">
                    <label htmlFor="span">Span</label>
                    <input
                        ref={spanRef}
                        className="rounded-full bg-white px-5 py-2"
                        onChange={(e) =>
                            e.target.value &&
                            setInputSpan(Number(e.target.value))
                        }
                        type="number"
                        placeholder={`current = ${span}`}
                        name="span"
                        id="span"
                    />
                    <label htmlFor="interval">Interval</label>
                    <input
                        ref={intervalRef}
                        className="rounded-full bg-white px-5 py-2"
                        onChange={(e) =>
                            e.target.value &&
                            setInputSpanInterval(Number(e.target.value) * 1000)
                        }
                        type="number"
                        placeholder={`current = ${showSpeed / 1000}s`}
                        name="interval"
                        id="interval"
                    />
                    <div className="flex items-center space-x-2">
                        <label htmlFor="numeric">Numeric</label>
                        <input
                            className="scale-150 accent-amber-300"
                            onChange={(e) => setIsNumeric(e.target.checked)}
                            type="checkbox"
                            checked={isNumeric}
                            name="numeric"
                            id="numeric"
                        />
                    </div>
                    <Button
                        invertColors
                        className={
                            isFeedbacking &&
                            "border-lime-400 bg-lime-100 text-lime-400 hover:text-lime-400"
                        }
                        onClick={() => {
                            giveFeedback();
                            setSpan(inputSpan);
                            setShowSpeed(inputSpanInterval);
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
