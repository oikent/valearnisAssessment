export const Result = ({ score, questions, handleResultBackButton }: any) => {
    return (
        <div className='card'>
            <div className='card-heading'>
                <h2>Result</h2>
            </div>
            <div className='card-body'>
                <h3>
                    You got {score} out of {questions.length} questions correct
                    ({(score / questions.length) * 100}%)
                </h3>
            </div>
            <div className='buttons'>
                <button onClick={handleResultBackButton}>Back</button>
            </div>
        </div>
    );
};
