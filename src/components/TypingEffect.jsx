// TypingEffect.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const TypingEffect = ({
  // eslint-disable-next-line react/prop-types
  texts,
  // eslint-disable-next-line react/prop-types
  speed = 100,
  // eslint-disable-next-line react/prop-types
  delayBetweenParagraphs = 1000,
}) => {
  const [displayedText, setDisplayedText] = useState(""); // Store the cumulative text
  const [currentParagraph, setCurrentParagraph] = useState(0); // Track which paragraph is being typed
  const [charIndex, setCharIndex] = useState(0); // Track the character index of the current paragraph

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (currentParagraph < texts.length) {
      // If there are paragraphs left to display, type the current one
      // eslint-disable-next-line react/prop-types
      if (charIndex < texts[currentParagraph].length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + texts[currentParagraph][charIndex]); // Append characters one by one
          setCharIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout); // Clear the timeout on each effect re-run
      } else {
        // Once the current paragraph is fully typed, move to the next one after a delay
        // eslint-disable-next-line react/prop-types
        if (currentParagraph < texts.length - 1) {
          const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + "\n\n"); // Add line breaks between paragraphs
            setCurrentParagraph((prev) => prev + 1); // Move to the next paragraph
            setCharIndex(0); // Reset the character index for the next paragraph
          }, delayBetweenParagraphs);
          return () => clearTimeout(timeout);
        }
      }
    }
  }, [charIndex, currentParagraph, texts, speed, delayBetweenParagraphs]);

  return (
    <div className="text-lg font-mono text-green-600 whitespace-pre-wrap">
      {displayedText}
      {/* // eslint-disable-next-line react/prop-types */}
      {currentParagraph < texts.length && (
        <span className="blinking-cursor">|</span>
      )}
    </div>
  );
};

export default TypingEffect;
