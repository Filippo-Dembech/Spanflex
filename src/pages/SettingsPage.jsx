import { useRef, useState } from "react";
import Button from "../components/Button";
import { useUserParameters } from "../features/parameters/UserParametersContext";
import PageLayout from "./PageLayout";
import { FaCheckCircle } from "react-icons/fa";
import { useFeedback } from "../hooks/useFeedback";
import Checkbox from "../components/Checkbox";

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
            <div className="m-auto max-w-120">
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
