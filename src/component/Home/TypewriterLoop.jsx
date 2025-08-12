// TypewriterLoop.jsx
import React, { useEffect, useState } from "react";

const TypewriterLoop = ({
  words = ["Developer.", "Professional Coder.", "UI/UX Designer."],
  typingSpeed = 120,   // ms per char
  deletingSpeed = 50,  // ms per char when deleting
  pauseAfter = 1500,   // ms to pause after full word typed
  className = "text-lg sm:text-xl lg:text-5xl font-semibold "
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId;

    const currentWord = words[wordIndex % words.length];

    if (!isDeleting && text === currentWord) {
      // full word typed, pause then start deleting
      timeoutId = setTimeout(() => setIsDeleting(true), pauseAfter);
    } else if (isDeleting && text === "") {
      // finished deleting, move to next word
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // calculate next substring
      const delta = isDeleting ? deletingSpeed : typingSpeed;
      timeoutId = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.substring(0, text.length - 1)
          : currentWord.substring(0, text.length + 1);
        setText(nextText);
      }, delta);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseAfter]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-1 h-6 align-middle bg-white ml-1 animate-pulse" />
    </span>
  );
};

export default TypewriterLoop;
