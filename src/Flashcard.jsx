import React, { useState } from 'react';

const Flashcard = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Function to set background color based on difficulty
  const getBackgroundColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return '#8BC34A';  // Green for easy
      case 'Medium':
        return '#FFEB3B';  // Yellow for medium
      case 'Hard':
        return '#F44336';  // Red for hard
      default:
        return '#f4f4f4';  // Default background
    }
  };

  return (
    <div className="flashcard" onClick={handleFlip} style={{ backgroundColor: getBackgroundColor(card.difficulty) }}>
      <h2>{isFlipped ? (
        // If the card has an image, display it
        card.image ? (
          <img src={card.image} alt={card.answer} className="flashcard-image" />
        ) : (
          <h2>{card.question}</h2>
        )
      ) : (
        <h2>{card.answer}</h2>
      )}</h2>
    </div>
  );
};

export default Flashcard;
