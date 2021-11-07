import { FlashCard } from "./Flashcards";
import styles from "../styles/TextForm.module.css";
import { ChangeEvent, ChangeEventHandler } from "react";
import { textParser } from "../utils/textParsing";

interface TextFormProps {
    readTextCallback: (flashcards: FlashCard[]) => void;
}

const TextForm = ({ readTextCallback }: TextFormProps) => {
    const handleTextInput: ChangeEventHandler<HTMLTextAreaElement> = (
        e: ChangeEvent<HTMLTextAreaElement>
    ) => {
        const textValue = e.target.value;
        readTextCallback(textParser(textValue));
    };

    return (
        <div style={{textAlign: 'center'}}>
            <p>
                The questions and answers should be splitted using
                &apos;;&apos;
            </p>
            <textarea className={styles.input} onChange={handleTextInput} />
        </div>
    );
};

export default TextForm;
