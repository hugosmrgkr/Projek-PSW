import React, { createContext, useContext, useState } from "react";

const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]); // Tambahkan state ini

  return (
    <ScoreContext.Provider value={{ score, setScore, incorrectAnswers, setIncorrectAnswers }}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScore = () => useContext(ScoreContext);
