import { useEffect, useState } from "react";
import axios from "axios";

import { debounce } from "../utils/debounce";

const doTranslation = debounce(
  async (
    input: string,
    languageCode: string,
    callback: (data: string) => void
  ) => {
    // TODO: get a working access key from google translate api
    const ACCESSKEY = "AIzaSyCf0Xy0OnhxldhyEy3K8zP-sOuu-l_u6uA";

    try {
      const { data } = await axios.post(
        `https://translation.googleapis.com/language/translate/v2?key=${ACCESSKEY}`,
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
