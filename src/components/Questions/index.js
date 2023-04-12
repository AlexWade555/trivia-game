import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"


function Questions() {
  const location = useLocation()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const questionData = location.state
  const [questions, setQuestions] = useState(null)

  // add score to questions component


  const arrangeData = () => {
    const questions = questionData.map((question) => {
      const temp = {}

      temp.question = question.question
      temp.answers = [...question.incorrect_answers, question.correct_answer]
      temp.correct_answer = question.correct_answer
      return(temp)
      })
      setQuestions(questions)
  }

  useEffect(() => {
    arrangeData()
  },[])

  console.log(questions)

  if (!questions) {
    return(<p>loading...</p>)
  }
  return (
    <>
      <p>
        {questions[currentQuestion].question}
      </p>
      {questions[currentQuestion].answers.map((answer) => {
        return(
          <button>{answer}</button>
        )
        }
      )}
    </>
  )
}

export default Questions
