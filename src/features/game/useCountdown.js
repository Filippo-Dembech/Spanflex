import { useEffect, useMemo, useState } from "react";

export function useCountdown(endFunction) {
    
    if (!endFunction) throw new Error("useCountdown() requires a function to run at the end of the countdown.")
    
    const [countdownIndex, setCountdownIndex] = useState(0);
    const countdown = useMemo(() => ["3", "2", "1", "MEMORIZE"], []) ;

    useEffect(() => {
        if (countdownIndex >= countdown.length) {
            endFunction();
            return;
        };
        
        const intervalId = setInterval(() => {
            setCountdownIndex(curr => curr + 1);
        }, 1000)

        return () => clearInterval(intervalId);

    }, [countdownIndex, countdown, endFunction]);
    
    return countdown[countdownIndex];
}