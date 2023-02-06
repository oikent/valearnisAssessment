export const Quiz = ({
    currentQuestion,
    questions,
    handleAnswer,
    finishedQuiz,
    handleBackButton,
}: any) => {
    return (
        <div className='card'>
            <div className='card-heading'>
                <h2>Question {currentQuestion + 1}</h2>
            </div>
            <div className='card-body'>
                <h3>
                    {questions.length > 0 && questions[currentQuestion].text}
                </h3>
            </div>

            <ul className='options'>
                {questions.length > 0 &&
                    questions[currentQuestion].options.map((option: any) => {
                        return (
                            <li
                                className={
                                    finishedQuiz && option.isCorrect
                                        ? "correct"
                                        : ""
                                }
                                key={option.id}
                                onClick={() => {
                                    handleAnswer(option.isCorrect);
                                }}
                            >
                                {option.text}
                            </li>
                        );
                    })}
            </ul>
            <div className='buttons'>
                {currentQuestion > 0 && (
                    <button onClick={handleBackButton}>Back</button>
                )}
            </div>
        </div>
    );
};
