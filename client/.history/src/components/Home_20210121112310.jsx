import { Link } from "react-router-dom"

function Home(props) {

  return (
    <div className="wine">
      <h2>Wines</h2>
      <h4>
        <Link to="/new">
          Add a new Wine
        </Link>
      </h4>
      <div>
        {
          props.images.map((bird) => (
            <Link key
          ))
        }
      </div>
    </div>
  )
}

export default Home;

