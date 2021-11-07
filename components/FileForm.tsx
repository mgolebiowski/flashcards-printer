import { FlashCard } from "./Flashcards";
import styles from "../styles/FileForm.module.css";
import { ChangeEvent, ChangeEventHandler } from "react";
import { textParser } from "../utils/textParsing";

interface FileFormProps {
  readTextCallback: (flashcards: FlashCard[]) => void;
}

const FileForm = ({ readTextCallback }: FileFormProps) => {
  const handleFileInput: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    let reader = new FileReader();
    const target = e.target as EventTarget & { files: FileList };
    reader.readAsText(target.files[0]);
    reader.onload = function () {
      const textValue = reader.result || "";
      if (typeof textValue === "string") {
        readTextCallback(textParser(textValue));
      }
    };
  };

  return (
    <div className={styles.input}>
      <p>
        Choose a text file. It should be UTF-8 CSV-like with cells splited by
        &apos;;&apos;
      </p>
      <input onChange={handleFileInput} type="file" />
    </div>
  );
};

export default FileForm;
