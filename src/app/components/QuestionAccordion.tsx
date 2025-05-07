"use client";

import { useState } from "react";
import { BsCaretDownFill, BsCaretRightFill } from "react-icons/bs";
import styles from './QuestionAccordion.module.css';

interface Props {
  question: string;
  summary: string;
  fullText: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function QuestionAccordion({
  question,
  summary,
  fullText,
  imageSrc,
  imageAlt,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionContainer}>
      <div className={styles.header} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <BsCaretDownFill className={styles.icon} /> : <BsCaretRightFill className={styles.icon} />}
        <h5 className={styles.question}>{question}</h5>
      </div>
      <p className={styles.summary}>{summary}</p>

      {isOpen && (
        <div className={styles.content}>
          <p className={styles.fullText}>{fullText}</p>
          {imageSrc && (
            <img src={imageSrc} alt={imageAlt} className={styles.image} />
          )}
        </div>
      )}
    </div>
  );
}
