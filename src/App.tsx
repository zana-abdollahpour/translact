import { useState } from "react";
import Field from "./components/Field";

export default function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <Field value={text} onChange={setText} />
    </div>
  );
}
