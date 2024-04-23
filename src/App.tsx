import { useState } from "react";

import Field from "./components/Field";
import Languages from "./components/Languages";

export default function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");
  return (
    <div>
      <Field value={text} onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
    </div>
  );
}
