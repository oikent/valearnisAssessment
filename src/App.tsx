import { useState, useEffect } from "react";
import { Result } from "./components/Result";
import { Quiz } from "./components/Quiz";

interface Question {
    text: string;
    options: Option[];
    completed: boolean;
}

interface Option {
    id: number;
    text: string;
    isCorrect: boolean;
}

const App = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    useEffect(() => {
        const getQuestions = async () => {
            const questionsFromServer = await fetchQuestions();
            setQuestions(questionsFromServer);
        };
        getQuestions();
    }, []);

    const fetchQuestions = async () => {
        const res = await fetch("http://localhost:3000/questions");
        const data = await res.json();
        return data;
    };
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [finishedQuiz, setFinishedQuiz] = useState(false);

    const handleAnswer = (isCorrect: boolean) => {
        isCorrect && score < 5 && !finishedQuiz ? setScore(score + 1) : null;
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setCurrentQuestion(4);
            setShowResults(true);
        }
    };

    const handleQuizBackButton = () => {
        currentQuestion === 0
            ? setCurrentQuestion(0)
            : setCurrentQuestion(currentQuestion - 1);
    };

    const handleResultBackButton = () => {
        setShowResults(false);
        setFinishedQuiz(true);
        setCurrentQuestion(4);
    };
    return (
        <>
            <h1>Adding and Subtracting Integers</h1>

            {!showResults ? (
                <Quiz
                    currentQuestion={currentQuestion}
                    setCurrentQuestion={setCurrentQuestion}
                    questions={questions}
                    handleAnswer={handleAnswer}
                    finishedQuiz={finishedQuiz}
                    handleBackButton={handleQuizBackButton}
                />
            ) : (
                <Result
                    score={score}
                    questions={questions}
                    handleResultBackButton={handleResultBackButton}
                />
            )}
        </>
    );
};

export default App;
