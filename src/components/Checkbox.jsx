export default function Checkbox({ label, onCheck, isChecked }) {
    return (
        <div className="flex items-center space-x-2">
            <label htmlFor={label.toLowerCase()}>{label}</label>
            <input
                className="scale-150 accent-amber-300"
                onChange={(e) => onCheck(e.target.checked)}
                type="checkbox"
                checked={isChecked}
                name={label.toLowerCase()}
                id={label.toLowerCase()}
            />
        </div>
    );
}
