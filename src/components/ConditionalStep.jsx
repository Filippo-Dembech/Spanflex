export default function ConditionalStep({onMount, children}) {
    if (onMount) {
        onMount();
    }
    return (
        <div>
            {children}
        </div>
    )
}