import { useState } from "react";
import Button from "../components/Button";
import { useUserParameters } from "../context/UserParametersContext";
import PageLayout from "./PageLayout";

export default function SettingsPage() {
    const { span, setSpan, showSpeed, setShowSpeed, isNumeric, setIsNumeric } =
        useUserParameters();
    const [ inputSpan, setInputSpan ] = useState(3);
    const [ inputSpanInterval, setInputSpanInterval] = useState(1000);

    return (
        <PageLayout gobackButton className="px-8 py-3">
            <h2 className="text-3xl">Settings</h2>
            <div className="flex flex-col space-y-3">
                <label htmlFor="span">Span</label>
                <input
                    className="rounded-full bg-white px-5 py-2"
                    onChange={(e) => setInputSpan(Number(e.target.value))}
                    type="number"
                    placeholder={`current = ${span}`}
                    name="span"
                    id="span"
                />
                <label htmlFor="interval">Interval</label>
                <input
                    className="rounded-full bg-white px-5 py-2"
                    onChange={(e) => setInputSpanInterval(Number(e.target.value))}
                    type="number"
                    placeholder={`current = ${showSpeed}s`}
                    name="interval"
                    id="interval"
                />
                <div className="flex items-center space-x-2">
                    <label htmlFor="numeric">Numeric</label>
                    <input
                        className="scale-150 accent-amber-300"
                        onClick={(e) => setIsNumeric(e.target.checked)}
                        type="checkbox"
                        checked={isNumeric}
                        name="numeric"
                        id="numeric"
                    />
                </div>
                <Button invertColors onClick={() => {
                  setSpan(inputSpan);
                  setShowSpeed(inputSpanInterval);
                }}>Save Settings</Button>
            </div>
        </PageLayout>
    );
}
