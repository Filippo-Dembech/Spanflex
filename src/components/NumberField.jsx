export default function NumberField({label, ref, onChange, placeholder}) {
    return (
        <>
            <label htmlFor={label.toLowerCase()}>{label}</label>
            <input
                ref={ref}
                className="rounded-full bg-white px-5 py-2"
                onChange={(e) => e.target.value && onChange(Number(e.target.value))}
                type="number"
                placeholder={placeholder}
                name={label.toLowerCase()}
                id={label.toLowerCase()}
            />
        </>
    );
}
