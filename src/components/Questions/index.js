import { useLocation } from "react-router-dom"


function Questions() {
  const location = useLocation()
  const propsData = location.state
  console.log(propsData)
  return (
    <div>

    </div>
  )
}

export default Questions
