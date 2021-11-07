import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { FlashCard } from './Flashcards';
import FileForm from './FileForm';

import 'react-tabs/style/react-tabs.css';
import styles from '../styles/Inputs.module.css';
import TextForm from './TextForm';

interface InputsProps {
    readTextCallback: (flashcards: FlashCard[]) => void;
}

const Inputs = ({ readTextCallback }: InputsProps) => {
    return (
        <Tabs className={styles.inputList}>
            <TabList>
                <Tab>Import using CSV file</Tab>
                <Tab>Import by pasting content</Tab>
            </TabList>

            <TabPanel>
                <FileForm readTextCallback={readTextCallback} />
            </TabPanel>
            <TabPanel>
                <TextForm readTextCallback={readTextCallback} />
            </TabPanel>
        </Tabs>
    );
};

export default Inputs;
