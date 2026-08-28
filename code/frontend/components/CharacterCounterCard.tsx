"use client";

import { useRef, useState } from "react";
import styles from "./CharacterCounterCard.module.css";
import { characterCounterCopy } from "../lib/mock/build-character-counter-page";

export function CharacterCounterCard() {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const count = value.length;
  const countLabel = `${count} character${count === 1 ? "" : "s"}`;

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 className={styles.title}>{characterCounterCopy.title}</h1>
          <p className={styles.subtitle}>{characterCounterCopy.subtitle}</p>
        </header>

        <label className={styles.field}>
          <span className={styles.label}>Your text</span>
          <textarea
            ref={inputRef}
            aria-describedby="character-count privacy-hint"
            className={styles.textarea}
            onInput={(event) => setValue(event.currentTarget.value)}
            placeholder="Type here"
            value={value}
          />
        </label>

        <div aria-live="polite" className={styles.count} id="character-count">
          {countLabel}
        </div>

        <button
          className={styles.button}
          onClick={() => {
            setValue("");
            inputRef.current?.focus();
          }}
          type="button"
        >
          Clear
        </button>

        <p className={styles.hint} id="privacy-hint">
          {characterCounterCopy.hint}
        </p>
      </div>
    </div>
  );
}
