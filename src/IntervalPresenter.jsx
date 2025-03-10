import { useEffect, useState } from "react";

export default function IntervalPresenter({ timedComponents, lastComponent }) {
    const [componentIndex, setComponentIndex] = useState(0);

    useEffect(() => {
        if (componentIndex >= timedComponents.length) return;

        const component = timedComponents[componentIndex];
            
        if (component.onMount) {
            component.onMount()
        }

        const timeoutId = setTimeout(() => {
            setComponentIndex((curr) => curr + 1);
        }, component.duration);

        return () => {
            if (component.onUnmount) {
                component.onUnmount();
            }
            clearTimeout(timeoutId);
        }
    }, [componentIndex, timedComponents]);

    const component =
        timedComponents[componentIndex]?.body || lastComponent;

    return <div>{component}</div>;
}
