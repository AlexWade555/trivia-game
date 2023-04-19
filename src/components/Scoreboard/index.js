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

  const handleStars = () => {
    if (score > 8) {
      return (
      <div className="stars">
        <img src="../../../public/images/Star.gif" alt="Gold Star!"/>
        <img src="../../../public/images/Star.gif" alt="Gold Star!"/>
        <img src="../../../public/images/Star.gif" alt="Gold Star!"/>
        <h3>Amazing!</h3>
      </div>)
    } else if (score > 5) {
      return (
        <div className="stars">
        <img src="../../../public/images/Star.gif" alt="Gold Star!"/>
        <img src="../../../public/images/Star.gif" alt="Gold Star!"/>
        <img src="../../../public/images/BlankStar.jpg" alt="Blank Star"/>
        <h3>Well done!</h3>
      </div>)
    } else if (score > 3) {
      return (
        <div className="stars">
        <img src="../../../public/images/Star.gif" alt="Gold Star!"/>
        <img src="../../../public/images/BlankStar.jpg" alt="Blank Star"/>
        <img src="../../../public/images/BlankStar.jpg" alt="Blank Star"/>
        <h3>Not bad!</h3>
      </div>)
    } else {
      return (
        <div className="stars">
        <img src="../../../public/images/BlankStar.jpg" alt="Blank Star"/>
        <img src="../../../public/images/BlankStar.jpg" alt="Blank Star"/>
        <img src="../../../public/images/BlankStar.jpg" alt="Blank Star"/>
        <h3>Better luck next time!</h3>
      </div>)
    }
  }

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
        {handleStars()}
      </div>
    </div>
  )

}

export default Scoreboard
