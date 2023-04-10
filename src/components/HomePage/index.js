import { useState } from "react"


function HomePage () {
  const [categoryInput, setCategoryInput] = useState('')
  const [questions, setQuestions] = useState([])

  const categoryChange = (event) => {
    setCategoryInput(event.target.value)
  }

  const submit = () => {
    return (
      fetch('https://opentdb.com/api.php?amount=10&type=multiple')
      .then((response) => response.json())
      .then((data) => setQuestions([...questions,...data.results]))
      .catch((error) => console.log(error))
    )
  }

  console.log(questions)

  return (
    <div>
      <h1>HomePage</h1>

      <input
        type="text"
        value={categoryInput}
        onChange={categoryChange}
      />
      <button onClick={submit}>Submit</button>


    </div>
  )
}

export default HomePage
