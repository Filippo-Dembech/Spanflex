import { useUserParameters } from "../context/UserParametersContext";
import { motion } from "motion/react";
import PageLayout from "./PageLayout";
import SpanGame from "../features/game/SpanGame";
import { useState } from "react";

export default function DojoPage() {
    const [attempts, setAttemps] = useState(0);
    const { span, increaseSpan, showSpeed } = useUserParameters();
    return (
        <PageLayout className="flex items-center justify-center" gobackButton>
            <div className="absolute top-5 right-5">
                SPAN:{" "}
                <motion.div
                    key={span}
                    className="inline text-2xl font-bold"
                    initial={{ opacity: 0, transform: "rotate(180deg)" }}
                    animate={{ opacity: 1, transform: "rotate(0)" }}
                    transition={{ duration: 1 }}
                >
                    {span}
                </motion.div>
            </div>
            <SpanGame
                key={span + attempts}
                span={span}
                interval={showSpeed}
                onIncreaseSpan={() => {
                    increaseSpan();
                    setAttemps(curr => curr + 1)
                }}
                onRetry={() => {
                    setAttemps((curr) => curr + 1);
                }}
            />
        </PageLayout>
    );
}
