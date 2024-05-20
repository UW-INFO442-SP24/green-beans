import React, { useState, useEffect } from 'react';
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
    const [shuffledAnswers, setShuffledAnswers] = useState([]);


    const questions = data.quiz;
    const currentQuestion = questions[activeQuestion];
    const question = currentQuestion ? currentQuestion.question : '';
    
    useEffect(() => {
        if (currentQuestion) {
            setShuffledAnswers(shuffleArray([...currentQuestion.answers]));
        }
    }, [activeQuestion, currentQuestion]);

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

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
                        <h1>DISCOVER YOUR<br />THRIFT STYLE!</h1>
                        <p>Find your ideal stores based on your preferences and personality!</p>
                        <button type="button" onClick={handleStart}>START QUIZ</button>
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
                    {/* <h1>Quiz</h1> */}
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${(activeQuestion + 1) * 10}%` }}></div>
                    </div>
                    <h2>{question}</h2>
                    <p>Choose one of the following</p>
                    <ul>
                        {shuffledAnswers.map((answer, index) => (
                            <li key={answer} onClick={handleAnswerSelected(answer, index)} className={getClassName(index)}>{answer}</li>
                        ))}
                    </ul>
                    <div className="button-group">
                        <button onClick={handlePrevClick} disabled={activeQuestion === 0}>Prev</button>
                        <button onClick={handleNextClick} disabled={selectedAnswerIdx === null}>{changeButtonStatus()}</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="quiz-result-container">
                    <h1>Your Best Fit...</h1>
                    <div>
                         <span>{getBestFit()}</span>
                    </div>
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
                        <li>You like the process of finding something</li>
                        <li>You have experience with thrifting </li>
                        <li>Cheapest option but most time consuming</li>
                    </ul>
                </div>
            )
        } else if (highest === "second") {
            return (
                <div>
                    <h2>Second-Hand</h2>
                    <ul>
                        <li>Good for beginners</li>
                        <li>You want affordable options</li>
                        <li>You want a traditional store experience where you can look through organized racks</li>
                    </ul>
                </div>
            )
        } else if (highest === "vintage") {
            return (
                <div>
                    <h2>Vintage</h2>
                    <ul>
                        <li>You are interested in finding unique, historical pieces</li>
                        <li>Sometimes expensive, sometimes not</li>
                        <li>You like standing out from mainstream fashion</li>
                    </ul>
                </div>
            )
        } else if (highest === "consignment") {
            return (
                <div>
                    <h2>Consignment</h2>
                    <ul>
                        <li>You are looking for curated pieces</li>
                        <li>You usually like more modern looks</li>
                        <li>Relatively more expensive</li>
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
