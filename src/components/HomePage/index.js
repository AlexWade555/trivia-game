import { useState } from "react"


function HomePage () {
  const [categoryInput, setCategoryInput] = useState('')
  const [questions, setQuestions] = useState([])
  const categories = ["General Knowledge", "Geography", "Mythology", "Animals", "Science & Nature", "History", "Celebrities", "Entertainment: Music", "Entertainment: Video Games", "Entertainment: Television", "Entertainment: Film", "Entertainment: Books",  "Entertainment: Board Games", "Entertainment: Musicals & Theatre", "Science: Computers", "Science: Mathematics", ]

  const handleCategory = (event) => {
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

      {/* <input
        type="text"
        value={categoryInput}
        onChange={handleCategory}
      /> */}

      <select onChange={(category) => handleCategory(category)}>
        <option>
        Choose a category
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button onClick={submit}>Submit</button>


    </div>
  )
}

export default HomePage
