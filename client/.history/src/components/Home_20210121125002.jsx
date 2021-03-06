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
          props.images.map((image) => (
            <Link  to={`/images/${image.name}`}>
              <img className="wineImg" src={image.image} alt={image.name} />
            </Link>))
        }
          </div>
      </div>
  )
}

export default Home;

