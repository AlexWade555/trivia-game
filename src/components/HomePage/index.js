import { useState } from "react"


function HomePage () {
  // const [categoryInput, setCategoryInput] = useState('')
  const [categoryNumber, setCategoryNumber] = useState('')
  const [questions, setQuestions] = useState([])
  const categories = ["General Knowledge", "Geography", "Mythology", "Animals", "Science & Nature", "History", "Celebrities", "Entertainment: Music", "Entertainment: Video Games", "Entertainment: Television", "Entertainment: Film", "Entertainment: Books",  "Entertainment: Board Games", "Entertainment: Musicals & Theatre", "Science: Computers", "Science: Mathematics", ]

  const handleCategory = (event) => {
    convertCategory(event.target.value)
  }

  const submit = () => {
    return (
      fetch(`https://opentdb.com/api.php?amount=10&category=${categoryNumber}&type=multiple`)
      .then((response) => response.json())
      .then((data) => setQuestions([...data.results]))
      .catch((error) => console.log(error))
    )
  }

  const convertCategory = (categoryInput) => {

    switch (categoryInput) {
      case 'Mythology':
        setCategoryNumber("20")
        break;

      case 'Geography':
        setCategoryNumber("22")
        break;

      default:
        setCategoryNumber("not a category")
    }
  }


  console.log("questions", questions)
  // console.log("input", categoryInput)
  // console.log("number", categoryNumber)


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
