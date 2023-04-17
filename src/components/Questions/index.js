import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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

  const submitAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      score = score + 1
      currentQuestion = currentQuestion + 1
      console.log('correct')
    } else {
      currentQuestion = currentQuestion + 1
      console.log('wrong')
    }
  }

  console.log(currentQuestion);

  if (!questions) {
    return <p>loading...</p>;
  }
  return (
    <>
      <p>{questions[currentQuestion].question}</p>
      {questions[currentQuestion].answers.map((answer) => {
        return <button onClick={submitAnswer(answer)}>{answer}</button>;
      })}
      <p>
        score: {score}
      </p>
    </>
  );
}

export default Questions;
