import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

function Scoreboard () {
  // const [submitScore, setSubmitScore] = useState(false)
  // const [name, setName] = useState('')
  const location = useLocation()
  let score = location.state;

  // const handleName = (event) => {
  //   setName(event.target.value)
  // }

  // const handleSubmit = () => {
  //   setSubmitScore(true)
  // }

  // useEffect(() => {
  //   setScore(handleScore(score))
  // }, []);

  // const handleScore = (score) => {
  //   if (score === null) {
  //     return 0
  //   }
  //   return score
  // }

  let handleScore
    if (score === null) {
      handleScore = 0
    } else {
      handleScore = score
    }

  console.log(score)

  const handleStars = () => {
    if (score > 7) {
      return (
        <div className="score">
          <div className="stars">
            <img src="/images/Star.gif" alt="Gold Star!"/>
            <img src="/images/Star.gif" alt="Gold Star!"/>
            <img src="/images/Star.gif" alt="Gold Star!"/>
          </div>
          <h3>Amazing!</h3>
       </div>)
    } else if (score > 4) {
      return (
        <div className="score">
          <div className="stars">
            <img src="/images/Star.gif" alt="Gold Star!"/>
            <img src="/images/Star.gif" alt="Gold Star!"/>
            <img src="/images/BlankStar.jpg" alt="Blank Star"/>
          </div>
          <h3>Well done!</h3>
        </div>)
    } else if (score > 3) {
      return (
        <div className="score">
          <div className="stars">
            <img src="/images/Star.gif" alt="Gold Star!"/>
            <img src="/images/BlankStar.jpg" alt="Blank Star2"/>
            <img src="/images/BlankStar.jpg" alt="Blank Star"/>
          </div>
          <h3>Not bad!</h3>
        </div>)
    } else {
      return (
        <div className="score">
          <div className="stars">
            <img src="/images/BlankStar.jpg" alt="Blank Star"/>
            <img src="/images/BlankStar.jpg" alt="Blank Star"/>
            <img src="/images/BlankStar.jpg" alt="Blank Star"/>
          </div>
            <h3>Better luck next time!</h3>
        </div>)
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h3>You got {handleScore}/10!</h3>
        {handleStars()}
      </div>
      <Link to="/categoryselection">
        <button>Play Again?</button>
      </Link>
    </div>
  )

}

export default Scoreboard
