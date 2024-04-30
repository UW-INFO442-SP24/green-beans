import React, { useState } from 'react';
import tempData from '../TempData/temp.json';
import background from '../images/background.png'

function Quiz() {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [result, setResult] = useState({
        correctAnswers: 0,
        wrongAnswers: 0
    });
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswerIdx, setSelectedAnswerIdx] = useState(null);
    const [started, setStarted] = useState(false);

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
        if (!started) {
            return (
                <div className="home">
                    <div className="homeContainer">
                        <img src={background} alt="background" />
                        <div className="centered">
                            <h1>QUIZ</h1>
                            <p>Our quiz can tell you what type of stores best fit your preferences!
                                Click the “Start Quiz” button to get started!</p>
                        </div>
                    </div>
                    <div className="homeContainer">
                        <button type="button" className="btn btn-light btn-lg centered" onClick={handleStart}>Start Quiz</button>
                    </div>
                </div>
            )
        } else if (!showResult) {
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
                    <button onClick={handleRestart}>Restart Quiz</button>
                </div>
            )
        }
    }

    function handleStart() {
        setStarted(true);
    }

    function handleRestart() {
        setActiveQuestion(0);
        setSelectedAnswer('');
        setResult({
            correctAnswers: 0,
            wrongAnswers: 0
        })
        setShowResult(false);
        setSelectedAnswerIdx(null)
    }

    return (
        <div className="quiz-page-container">
            <RenderQuizOrResult />
        </div>
    );
}

export default Quiz;
