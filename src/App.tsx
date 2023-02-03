import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
interface Option {
  id: number;
  text: string;
  isCorrect: boolean;
}

interface Question {
  text: string;
  options: Option[];
}

const App = () => {
  const questions: Question[] = [
    {
      text: "-12 + 8 =",
      options: [
        { id: 0, text: "4", isCorrect: false },
        { id: 1, text: "-4", isCorrect: true },
        { id: 2, text: "-20", isCorrect: false },
        { id: 3, text: "20", isCorrect: false },
      ],
    },
    {
      text: "-7 + -5 =",
      options: [
        { id: 0, text: "2", isCorrect: false },
        { id: 1, text: "12", isCorrect: false },
        { id: 2, text: "-12", isCorrect: true },
        { id: 3, text: "-2", isCorrect: false },
      ],
    },
    {
      text: "-9 + 20 =",
      options: [
        { id: 0, text: "11", isCorrect: true },
        { id: 1, text: "-29", isCorrect: false },
        { id: 2, text: "-11", isCorrect: false },
        { id: 3, text: "29", isCorrect: false },
      ],
    },
    {
      text: "18 + -3 =",
      options: [
        { id: 0, text: "15", isCorrect: true },
        { id: 1, text: "-21", isCorrect: false },
        { id: 2, text: "21", isCorrect: false },
        { id: 3, text: "-15", isCorrect: false },
      ],
    },
    {
      text: "-9 - 10 =",
      options: [
        { id: 0, text: "-19", isCorrect: true },
        { id: 1, text: "-1", isCorrect: false },
        { id: 2, text: "19", isCorrect: false },
        { id: 3, text: "1", isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    isCorrect ? setScore(score + 1) : null;
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setCurrentQuestion(4);
      setShowResults(true);
    }
  };

  return (
    <>
      {showResults ? (
        <div className="card">
          <div className="question-number">
            <h2>Result</h2>
          </div>
          <div className="question">
            <h3>
              You got {score} out of {questions.length} questions correct (
              {(score / questions.length) * 100}%)
            </h3>
          </div>
          <div className="buttons">
            <button
              onClick={() => {
                setShowResults(false);
                setCurrentQuestion(4);
                setScore(0);
              }}
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <>
          <h1>Adding and Subtracting Integers</h1>
          <div className="card">
            <div className="question-number">
              <h2>Question {currentQuestion + 1}</h2>
            </div>
            <div className="question">
              <h3>{questions[currentQuestion].text}</h3>
            </div>

            <ul className="options">
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    key={option.id}
                    onClick={() => handleAnswer(option.isCorrect)}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
            <div className="buttons">
              <button
                onClick={() =>
                  currentQuestion === 0
                    ? setCurrentQuestion(0)
                    : setCurrentQuestion(currentQuestion - 1)
                }
              >
                Back
              </button>
              <button>Next</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default App;
