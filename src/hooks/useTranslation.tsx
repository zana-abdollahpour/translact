import { useEffect, useState } from "react";
import axios from "axios";

import { debounce } from "../utils/debounce";

const doTranslation = debounce(
  async (
    input: string,
    languageCode: string,
    callback: (data: string) => void
  ) => {
    try {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA",
        {
          q: input,
          target: languageCode,
        }
      );

      callback(data.data.translations[0].translatedText);
    } catch (err) {
      callback("");
    }
  }
);

export const useTranslation = (text: string, language: string) => {
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    if (!text) {
      return;
    }

    const cancelToken = axios.CancelToken.source();

    doTranslation(text, language, cancelToken, setTranslated);

    return () => {
      try {
        cancelToken.cancel();
      } catch (err) {
        console.error(err);
      }
    };
  }, [text, language]);

  return [translated];
};
