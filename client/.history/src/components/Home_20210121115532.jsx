import { Link } from "react-router-dom"

function Home(props) {

  return (
    <div className="wine">
      <Link to="/new">
        <h4>Add Your Favorite wine</h4>
        </Link>
    </div>
  )
}

export default Home;

