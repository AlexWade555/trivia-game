import { Link } from "react-router-dom"

function NotFound () {
  return (
    <div className="container">
      <h1>Uh oh that page doesn't exist</h1>
      <Link to="/categoryselection">
        <button>Return to Category Selection?</button>
      </Link>
    </div>
  )
}

export default NotFound
