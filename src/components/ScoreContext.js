import React, { createContext, useState, useContext } from "react";

// Buat Context
const ScoreContext = createContext();

// Provider untuk membungkus aplikasi atau komponen-komponen yang membutuhkan akses ke skor
export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(null); // State untuk menyimpan skor

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

// Hook custom untuk mempermudah akses ke context
export const useScore = () => {
  return useContext(ScoreContext);
};
