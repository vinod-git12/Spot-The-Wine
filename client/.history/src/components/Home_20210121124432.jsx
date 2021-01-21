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
            <Link key={image.name} to={`/images/${image1.name}`}>
              <img className="wineImg" src={image1.image} alt={image1.name} />
            </Link>))
        }
          </div>
      </div>
  )
}

export default Home;

