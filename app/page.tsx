'use client';

import { useState } from 'react';

import Flashcard, { FlashCard } from '../components/Flashcards';
import Inputs from '../components/Inputs';

import styles from '../styles/Home.module.css';

export default function Home() {
  const [flashcards, setFlashcards] = useState<FlashCard[]>([]);

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Flashcards printer</h1>

        <Inputs readTextCallback={setFlashcards} />
        <div className={styles.successInfo}>
          {flashcards.length > 0 && (
            <>
              <p>Print this website and see the magic!</p>
              <button onClick={() => window.print()}>Print!</button>
            </>
          )}
        </div>
        <Flashcard flashcardsList={flashcards} />
      </main>

      <footer className={styles.footer}>Coded with love by&nbsp;<a href="https://golebiowski.me">Misiu</a></footer>
    </>
  );
}