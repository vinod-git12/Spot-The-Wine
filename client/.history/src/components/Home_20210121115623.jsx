import { Link } from "react-router-dom"

function Home(props) {

  return (
    <div className="wine">
      <h4>
        <Link to="/new">
        Add Your Favorite wine</h4>
        </Link>
    </div>
  )
}

export default Home;

