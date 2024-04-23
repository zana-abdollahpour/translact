import { useTranslation } from "../hooks/useTranslation";

interface TranslateProps {
  language: string;
  text: string;
}

export default function Translate({ language, text }: TranslateProps) {
  const [translated] = useTranslation(text, language);

  return (
    <div className="translate">
      <label className="label">Output</label>
      <h1 className="title">{translated.replace("&#39;", "'")}</h1>
    </div>
  );
}
