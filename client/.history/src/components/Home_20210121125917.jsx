import { Link } from "react-router-dom"

function Home(props) {

  return (
    <div className="wine">
      <h4>
        <Link to="/new">
          Add Your Favorite wine
        </Link>
      </h4>
      <div className="red">
        {
          props.images.map((imag) => (
            <Link  to={`/images/${imag.name}`}>
              <img className="wineImg" src={imag.image} alt={imag.name} />
            </Link>))
        }
          </div>
      </div>
  )
}

export default Home;

