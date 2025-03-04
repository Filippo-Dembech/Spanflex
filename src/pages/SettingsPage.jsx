import { useUserParameters } from "../context/UserParametersContext";
import PageLayout from "./PageLayout";

export default function SettingsPage() {
  const { span, setSpan, showSpeed, setShowSpeed, isNumeric, setIsNumeric } =
    useUserParameters();

  return (
    <PageLayout gobackButton>
      <h2>Settings</h2>
      <label htmlFor="span">Span</label>
      <input
        onChange={(e) => setSpan(Number(e.target.value))}
        type="number"
        placeholder={`current = ${span}`}
        name="span"
        id="span"
      />
      <label htmlFor="interval">Interval</label>
      <input
        onChange={(e) => setShowSpeed(Number(e.target.value))}
        type="number"
        placeholder={`current = ${showSpeed}s`}
        name="interval"
        id="interval"
      />
      <label htmlFor="numeric">Numeric</label>
      <input
        onClick={(e) => setIsNumeric(e.target.checked)}
        type="checkbox"
        checked={isNumeric}
        name="numeric"
        id="numeric"
      />
    </PageLayout>
  );
}
