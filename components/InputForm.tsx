import { FlashCard } from "./Flashcards";
import styles from "../styles/InputForm.module.css";
import { ChangeEvent, ChangeEventHandler } from "react";

interface InputFormProps {
  readTextCallback: (flashcards: FlashCard[]) => void;
}

const InputForm = ({ readTextCallback }: InputFormProps) => {
  const handleFileInput: ChangeEventHandler<HTMLInputElement> = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    let reader = new FileReader();
    const target = e.target as EventTarget & { files: FileList };
    reader.readAsText(target.files[0]);
    reader.onload = function () {
      const textValue = reader.result || "";
      if (typeof textValue === "string") {
        readTextCallback(
          textValue.split("\r\n").map((str) => ({
            front: str.split(";")[0],
            back: str.split(";")[1],
          }))
        );
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

export default InputForm;
