import { useState } from "react"


function Scoreboard (props) {
  const [submitScore, setSubmitScore] = useState(false)
  const [name, setName] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = () => {
    setSubmitScore(true)
  }



  if (submitScore) {

    return (
      <div className="container">
        <p>{name}:{props.score}</p>
      </div>
    )
  } else {
    return (
      <div className="container">
        <input onChange={handleName}></input>
        <button onClick={handleSubmit}>submit</button>
      </div>
      )
    }
}

export default Scoreboard
