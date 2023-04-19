import { useState } from "react"
import { useParams } from "react-router-dom"

function Scoreboard () {
  // const [submitScore, setSubmitScore] = useState(false)
  // const [name, setName] = useState('')
  let {score} = useParams()

  // const handleName = (event) => {
  //   setName(event.target.value)
  // }

  // const handleSubmit = () => {
  //   setSubmitScore(true)
  // }



//   if (submitScore) {

//     return (
//       <div className="container">
//         <p>{name}:{score}</p>
//       </div>
//     )
//   } else {
//     return (
//       <div className="container">
//         <input onChange={handleName}></input>
//         <button onClick={handleSubmit}>submit</button>
//       </div>
//       )
//     }

  return (
    <div className="container">
      <div className="scorebox">
        <h3>You got {score}/10!</h3>
      </div>
    </div>
  )

}

export default Scoreboard
