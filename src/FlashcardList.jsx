import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = () => {
  const [flashcards, setFlashcards] = useState([

    { question: 'Guess the shape', answer: 'Circle',difficulty: 'Easy',
    image:'https://dictionary.cambridge.org/us/images/thumb/circle_noun_001_02738.jpg?version=6.0.33' },

    { question: 'Guess the shape', answer: 'Triangle',difficulty: 'Easy',
    image:'https://dictionary.cambridge.org/images/thumb/triang_noun_001_18172.jpg?version=6.0.33' },

    { question: 'Guess the shape', answer: 'Square',difficulty: 'Medium',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/500px-Square_-_black_simple.svg.png?20210311042606' },

    { question: 'Guess the shape', answer: 'Pentagon',difficulty: 'Medium',
    image:'https://res.cloudinary.com/woodland/image/upload/c_limit,d_ni.png,f_auto,q_auto,w_1024/v1/craftcuts_media/media/catalog/product/d/i/dimensional_shapes_basic_pentagon.jpg' },

    { question: 'Guess the shape', answer: 'Hexagon',difficulty: 'Hard',
    image:'https://res.cloudinary.com/woodland/image/upload/c_limit,d_ni.png,f_auto,q_auto,w_1024/v1/craftcuts_media/media/catalog/product/d/i/dimensional_shapes_basic_hexagon.jpg' },

    { question: 'Guess the shape', answer: 'Octagon',difficulty: 'Hard',
    image:'https://res.cloudinary.com/woodland/image/upload/c_limit,d_ni.png,f_auto,q_auto,w_1024/v1/craftcuts_media/media/catalog/product/d/i/dimensional_shapes_basic_octogon.jpg' }

  ]);

  const [currentCard, setCurrentCard] = useState(flashcards[0]);

  const handleNextCard = () => {
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentCard(flashcards[randomIndex]);
  };

  return (
    <div>
      <h1>Shapes!</h1>
      <h3>Let's learn about shapes. Guess the shape</h3>
      <p>Total Cards: {flashcards.length}</p>
      <Flashcard card={currentCard} />
      <button onClick={handleNextCard}>Next Card</button>
    </div>
  );
};

export default FlashcardList;
