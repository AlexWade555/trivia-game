import { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import './Questions.css'

function Questions() {
  const location = useLocation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionData = location.state;
  const [questions, setQuestions] = useState(null);
  const [score, setScore] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // add score to questions component

  // const tempIndex = Math.floor(Math.random() * 4);
  // if (tempIndex === 3) {
  //   answers.push
  // }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const arrangeData = () => {
    const questions = questionData.map((question) => {
      const temp = {};

      temp.question = question.question;
      temp.answers = shuffle([
        ...question.incorrect_answers,
        question.correct_answer,
      ]);
      temp.correct_answer = question.correct_answer;
      return temp;
    });
    setQuestions(questions);
  };

  useEffect(() => {
    arrangeData();
  }, []);

  function submitAnswer(answer, index) {
    const correctAnswer = questions[currentQuestion].correct_answer
    const buttons = document.getElementsByClassName("option")

    if (answer === correctAnswer) {
      setScore(score + 1)
      buttons[index].classList.add('correct')
      // setCurrentQuestion(currentQuestion +1)
      console.log('correct')
    } else {
      buttons[index].classList.add('incorrect')
      // setCurrentQuestion(currentQuestion + 1)
      console.log('wrong')
    }

    setIsAnimating(true)

    setTimeout(() => {
      if (answer === correctAnswer) {
        buttons[index].classList.remove("correct");
      } else {
        buttons[index].classList.remove("incorrect");
      }

      // setCurrentQuestion(currentQuestion + 1);
      setIsAnimating(false)
    }, 1000);
  }

  console.log(currentQuestion);
  console.log(score)

  if (!questions) {
    return <p>loading...</p>;
  }
  if (currentQuestion < 10) {

    return (
      <div className="container">
        <div className="card">
        <h3 dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }}></h3>
        </div>
        <div className="buttons">
          {questions[currentQuestion].answers.map((answer, index) => (
            <button
            key={answer}
            className="option"
            onClick={() => submitAnswer(answer, index)}
            disabled={isAnimating}
            dangerouslySetInnerHTML={{ __html: answer }}>

            </button>
          ))}
        </div>
        <p>
        Current score: {score}
        </p>
      </div>
    );
  } else {
    // return redirect(`/scoreboard/${score}`)
    return <Navigate to={`/scoreboard`} state={score}/>
  }
}

export default Questions;
