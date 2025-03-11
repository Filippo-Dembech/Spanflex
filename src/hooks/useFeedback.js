import { useEffect, useState } from "react";

export function useFeedback() {
    
    const [isFeedbacking, setSavingFeedback] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setSavingFeedback(false);
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [isFeedbacking]);
    
    function giveFeedback() {
        setSavingFeedback(true);
    }
    
    return [isFeedbacking, giveFeedback]
}