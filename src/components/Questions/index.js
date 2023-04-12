import { useLocation } from "react-router-dom"


function Questions() {
  const location = useLocation()
  const questions = location.state
  console.log(questions)
  return (
    questions.map((question) => (
      <>
        <p>{question.question}</p>
        <p>{question.correct_answer}</p>
        <p>{question.incorrect_answers[0]}</p>
        <p>{question.incorrect_answers[1]}</p>
        <p>{question.incorrect_answers[2]}</p>
      </>
    ))
  )
}

export default Questions
