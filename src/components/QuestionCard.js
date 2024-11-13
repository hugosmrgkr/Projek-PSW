import React from 'react';

const QuestionCard = ({ question, handleAnswer }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5>{question.text}</h5>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option, question.correctAnswer)}
            className="btn btn-secondary m-1"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
