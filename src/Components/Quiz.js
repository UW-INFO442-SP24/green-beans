import React, { useState } from 'react';
import tempData from '../TempData/temp.json';

function Quiz() {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [result, setResult] = useState({
        correctAnswers: 0,
        wrongAnswers: 0
    });
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswerIdx, setSelectedAnswerIdx] = useState(null);

    const questions = tempData.quiz;
    const { question, answers, correct_answer } = questions[activeQuestion];



    function handleClick() {
        setResult((prev) => {
            let newResult = { ...prev };

            if (selectedAnswer) {
                newResult.correctAnswers = prev.correctAnswers + 1;
            } else {
                newResult.wrongAnswers = prev.wrongAnswers + 1;

            }
            return newResult;
        });

        if (activeQuestion === questions.length - 1) {
            setShowResult(true);
            setActiveQuestion(0);
        } else {
            setActiveQuestion((prev) => prev + 1)
        }
        setSelectedAnswerIdx(null);
        setSelectedAnswer(false);
    }

    function handleAnswerSelected(answer, index) {
        return () => {
            setSelectedAnswerIdx(index);
            setSelectedAnswer(answer === correct_answer);
        }
    }

    function getClassName(index) {
        if (selectedAnswerIdx === index) {
            return 'selected-answer';
        }
        return null;
    }

    function changeButtonStatus() {
        if (activeQuestion === questions.length - 1) {
            return "Finish";
        } else {
            return "Next";
        }
    }

    function RenderQuizOrResult() {
        if (!showResult) {
            return (
                <div className="quiz-container">
                    <h1>Quiz</h1>
                    <h2>{question}</h2>
                    <ul>
                        {answers.map((answer, index) => (

                            <li key={answer} onClick={handleAnswerSelected(answer, index)} className={getClassName(index)}>{answer}</li>
                        ))}
                    </ul>
                    <button onClick={handleClick} disabled={selectedAnswerIdx === null}>{changeButtonStatus()}</button>
                </div>
            )
        } else {
            return (
                <div className="quiz-result-container">
                    <h1>Result</h1>
                    <p>
                        Total Question: <span>{questions.length}</span>
                    </p>
                    <p>
                        Correct Answers:<span> {result.correctAnswers}</span>
                    </p>
                    <p>
                        Wrong Answers:<span> {result.wrongAnswers}</span>
                    </p>
                </div>
            )
        }
    }

    return (
        <RenderQuizOrResult />
    );
}

export default Quiz;
