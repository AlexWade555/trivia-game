import { useState } from "react"
import { Link } from "react-router-dom"


function CategorySelection () {
  // const [categoryInput, setCategoryInput] = useState('')
  const [categoryNumber, setCategoryNumber] = useState('')
  const [questions, setQuestions] = useState([])
  const categories = ["General Knowledge", "Geography", "Mythology", "Animals", "Science & Nature", "History", "Celebrities", "Entertainment: Music", "Entertainment: Video Games", "Entertainment: Television", "Entertainment: Film", "Entertainment: Books",  "Entertainment: Board Games", "Entertainment: Musicals & Theatre", "Science: Computers", "Science: Mathematics", ]
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleCategory = (event) => {
    setIsSubmitted(false)
    convertCategory(event.target.value)
  }

  // const submit = () => {
  //   return (
  //     fetch(`https://opentdb.com/api.php?amount=10&category=${categoryNumber}&type=multiple`)
  //     .then((response) => response.json())
  //     .then((data) => {setQuestions([...data.results])
  //     setIsVisable(true)
  //     })
  //     .catch((error) => console.log(error))
  //   )
  // }

  const convertCategory = (categoryInput) => {

    switch (categoryInput) {
      case 'Mythology':
        setCategoryNumber("20")
        break;
      case 'Geography':
        setCategoryNumber("22")
        break;
      case 'General Knowledge':
        setCategoryNumber("9")
        break;
      case 'Animals':
        setCategoryNumber("27")
        break;
      case 'Science & Nature':
        setCategoryNumber("17")
        break;
      case 'History':
        setCategoryNumber("23")
        break;
      case 'Celebrities':
        setCategoryNumber("26")
        break;
      case 'Entertainment: Music':
        setCategoryNumber("12")
        break;
      case 'Entertainment: Video Games':
        setCategoryNumber("15")
        break;
      case 'Entertainment: Television':
        setCategoryNumber("14")
        break;
      case 'Entertainment: Film':
        setCategoryNumber("11")
        break;
      case 'Entertainment: Books':
        setCategoryNumber("10")
        break;
      case 'Entertainment: Board Games':
        setCategoryNumber("16")
        break;
      case 'Entertainment: Musicals & Theatre':
        setCategoryNumber("13")
        break;
      case 'Science: Computers':
        setCategoryNumber("18")
        break;
      case 'Science: Mathematics':
        setCategoryNumber("19")
        break;
      default:
        setCategoryNumber("not a category")
    }
  }

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await fetch(`https://opentdb.com/api.php?amount=10&category=${categoryNumber}&type=multiple`)
      .then((response) => response.json())
      .then((data) => {setQuestions([...data.results])
      })
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
    setIsSubmitted(true)
  };

  let buttonText
    if (isLoading) {
      buttonText = 'Loading...'
    } else if (isSubmitted) {
      buttonText = 'Play'
    } else {
      buttonText = 'Submit'
    }

  console.log("questions", questions)
  // console.log("input", categoryInput)
  // console.log("number", categoryNumber)


  return (
    <div className="container">
      <h1>Category Selection</h1>

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

          {isSubmitted ? (
            <Link to="/questions" onClick={handleClick} state={questions}>
              <button>{buttonText}</button>
            </Link>
          ) : (
            <button onClick={(handleClick)}>
              {buttonText}
            </button>
          )}

        {/* <button onClick={handleClick}>
        {buttonText}
        </button> */}
        {/* {isVisable &&
        <Link
          to="/questions"
          state={questions}
          >
          <button>Play</button>
        </Link>
        } */}

    </div>
  )
}

export default CategorySelection
