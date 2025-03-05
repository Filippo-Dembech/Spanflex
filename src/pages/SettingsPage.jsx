import { useUserParameters } from "../context/UserParametersContext";
import PageLayout from "./PageLayout";

export default function SettingsPage() {
  const { span, setSpan, showSpeed, setShowSpeed, isNumeric, setIsNumeric } =
    useUserParameters();

  return (
    <PageLayout gobackButton className="px-8 py-3">
      <h2 className="text-3xl">Settings</h2>
      <div className="flex flex-col">
        <label htmlFor="span">Span</label>
        <input
          className="rounded-full bg-white px-5 py-2"
          onChange={(e) => setSpan(Number(e.target.value))}
          type="number"
          placeholder={`current = ${span}`}
          name="span"
          id="span"
        />
        <label htmlFor="interval">Interval</label>
        <input
          className="rounded-full bg-white px-5 py-2"
          onChange={(e) => setShowSpeed(Number(e.target.value))}
          type="number"
          placeholder={`current = ${showSpeed}s`}
          name="interval"
          id="interval"
        />
        <div>
          <label htmlFor="numeric">Numeric</label>
          <input
            onClick={(e) => setIsNumeric(e.target.checked)}
            type="checkbox"
            checked={isNumeric}
            name="numeric"
            id="numeric"
          />
        </div>
      </div>
    </PageLayout>
  );
}
