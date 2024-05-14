import React, { useState } from 'react';
import img1 from '../images/quiz-intro-1.png';
import img2 from '../images/quiz-intro-2.png';
import img3 from '../images/quiz-intro-3.png';
import img4 from '../images/quiz-intro-4.png';

function Quiz({ data }) {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [result, setResult] = useState({
        goodwill: 0,
        second: 0,
        vintage: 0,
        consignment: 0
    });
    const [showResult, setShowResult] = useState(false);
    const [selectedAnswerIdx, setSelectedAnswerIdx] = useState(null);
    const [started, setStarted] = useState(false);

    const questions = data.quiz;
    const currentQuestion = questions[activeQuestion];
    const question = currentQuestion ? currentQuestion.question : '';
    const answers = currentQuestion ? currentQuestion.answers : [];


    function handleNextClick() {
        setResult((prev) => {
            let newResult = { ...prev };

            if (selectedAnswer.key === 0) {
                newResult.goodwill = prev.goodwill + 1;
            } else if (selectedAnswer.key === 1) {
                newResult.second = prev.second + 1;
            } else if (selectedAnswer.key === 2) {
                newResult.vintage = prev.vintage + 1;
            } else if (selectedAnswer.key === 3) {
                newResult.consignment = prev.consignment + 1;
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
        setSelectedAnswer('');
    }

    function handlePrevClick() {
        setActiveQuestion((prev) => prev - 1);
        const previousAnswer = questions[activeQuestion - 1].selectedAnswer;
        setSelectedAnswerIdx(previousAnswer.index);
        setSelectedAnswer(previousAnswer);
    }


    function handleAnswerSelected(answer, index) {
        return () => {
            setSelectedAnswerIdx(index);
            setSelectedAnswer({ text: answer, key: index });
            questions[activeQuestion].selectedAnswer = { text: answer, index: index };
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
                <div className="quiz-intro-container">
                    <div className="top-banner">
                        <img src={img1} alt="img1" />
                    </div>
                    <div className="quiz-intro-header">
                        <h1>DISCOVER YOUR THRIFT STYLE!</h1>
                        <p>Find your ideal stores based on your preferences and personality!</p>
                        <button type="button" onClick={handleStart}>Start Quiz</button>
                    </div>
                    <div className="image-left">
                        <img src={img2} alt="img2" />
                    </div>
                    <div className="image-right">
                        <img src={img3} alt="img3" />
                    </div>
                    <div className="bottom-image">
                        <img src={img4} alt="img4" />
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
                    <button onClick={handlePrevClick} disabled={activeQuestion === 0}>Prev</button>
                    <button onClick={handleNextClick} disabled={selectedAnswerIdx === null}>{changeButtonStatus()}</button>
                </div>
            )
        } else {
            return (
                <div className="quiz-result-container">
                    <h1>Result</h1>
                    <p>
                        Your Best Fit: <span>{getBestFit()}</span>
                    </p>
                    <button onClick={handleRestart}>Restart Quiz</button>
                </div>
            )
        }
    }

    function getBestFit() {
        const highest = Object.keys(result).reduce((a, b) => result[a] > result[b] ? a : b);
        if (highest === "goodwill") {
            return (
                <div>
                    <h2>Goodwill Bins</h2>
                    <ul>
                        <li>Likes the process of finding something</li>
                        <li>People that have experience with thrifting </li>
                        <li>Doesn’t mind putting in more work </li>
                        <li>Cheapest option, most time consuming</li>
                    </ul>
                </div>
            )
        } else if (highest === "second") {
            return (
                <div>
                    <h2>Second-Hand</h2>
                    <ul>
                        <li>Good for beginners</li>
                        <li>People that want affordable options</li>
                        <li>People that want a traditional store experience, looking thought racks, organized</li>
                    </ul>
                </div>
            )
        } else if (highest === "vintage") {
            return (
                <div>
                    <h2>Vintage</h2>
                    <ul>
                        <li>People interested in finding unique, historical pieces</li>
                        <li>Sometimes expensive, sometimes not</li>
                    </ul>
                </div>
            )
        } else if (highest === "consignment") {
            return (
                <div>
                    <h2>Consignment</h2>
                    <ul>
                        <li>People looking for curated pieces</li>
                        <li>Usually more modern</li>
                        <li>Relatively More Expensive</li>
                    </ul>
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
            goodwill: 0,
            second: 0,
            vintage: 0,
            consignment: 0
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
