import Flower from "./Flower";

interface FieldProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

function Field({ value, onChange }: FieldProps) {
  return (
    <div className="field">
      <Flower className="flower-right" fill="rgb(110, 146, 119)" />
      <Flower className="flower-left" fill="rgb(249, 148, 59)" />
      <h1>Translate App</h1>
      <label htmlFor="text-input">Enter English</label>
      <input
        className="input"
        id="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Field;
