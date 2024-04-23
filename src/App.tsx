import { useState } from "react";

import Field from "./components/Field";
import Languages from "./components/Languages";
import Translate from "./components/Translate";

export default function App() {
  const [language, setLanguage] = useState("es");
  const [text, setText] = useState("");
  return (
    <div>
      <Field value={text} onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
