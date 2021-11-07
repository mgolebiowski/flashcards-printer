import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import Flashcard, { FlashCard } from "../components/Flashcards";
import Inputs from "../components/Inputs";

import styles from "../styles/Home.module.css";



const Home: NextPage = () => {
  const [flashcards, setFlashcards] = useState<FlashCard[]>([]);

  return (
    <>
      <Head>
        <title>Flashcard printing service</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Flashcards printer</h1>

        <Inputs readTextCallback={setFlashcards} />
        <div className={styles.successInfo}>
          {flashcards.length > 0 &&
            <>
              <p>Print this website and see the magic!</p>
              <button onClick={window.print}>Print!</button>
            </>
          }
        </div>
        <Flashcard flashcardsList={flashcards} />
      </main>

      <footer className={styles.footer}>Coded with ❤️ by&nbsp;<a href="https://golebiowski.me">Misiu</a></footer>
    </>
  );
};

export default Home;