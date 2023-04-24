import { Link } from "react-router-dom"
import { BsGithub } from "react-icons/bs"

function LandingPage () {
  return (
    <div className="container">
      <h1>Welcome to Trivia!</h1>
      <Link to ="/categoryselection">
        <button>Play</button>
      </Link>
      <a target="_blank" rel="noreferrer" href="https://github.com/AlexWade555/trivia-game">
        <button><div className="icon"><BsGithub/>&nbsp;&nbsp;GitHub</div></button>
      </a>
    </div>
  )
}

export default LandingPage
