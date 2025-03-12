import { useEffect, useRef } from "react"

export default function Step({children}) {
    
    const stepRef = useRef();
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (stepRef) {
                stepRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" })
            }
        }, 800)
        return () => clearTimeout(timeoutId)
    }, [])

    return (
        <div ref={stepRef} className="size-full">
            {children}
        </div>
    )
}