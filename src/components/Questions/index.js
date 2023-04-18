import { useEffect, useState } from "react";
import { Outlet, redirect, useLocation, Navigate } from "react-router-dom";

function Questions() {
  const location = useLocation();
  let [currentQuestion, setCurrentQuestion] = useState(0);
  const questionData = location.state;
  const [questions, setQuestions] = useState(null);
  let [score, setScore] = useState(0)

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

  function submitAnswer(answer) {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1)
      setCurrentQuestion(currentQuestion +1)
      console.log('correct')
    } else {
      setCurrentQuestion(currentQuestion + 1)
      console.log('wrong')
    }
  }

  console.log(currentQuestion);

  if (!questions) {
    return <p>loading...</p>;
  }
  if (currentQuestion < 10) {

    return (
      <div className="container">
        <h2 dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }}></h2>
        {questions[currentQuestion].answers.map((answer) => {
          return <button key={answer} onClick={() => submitAnswer(answer)} dangerouslySetInnerHTML={{ __html: answer }}></button>;
        })}
        <p>
        score: {score}
        </p>
      </div>
    );
  } else {
    // return redirect(`/scoreboard/${score}`)
    return <Navigate to={`/scoreboard/${score}`}/>
  }
}

export default Questions;
