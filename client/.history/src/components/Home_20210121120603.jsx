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
            <Link key={}
                <img className="wineImg" src={image.fields.image} alt={image.image} />
                </div>
        }
      </div>
    </div>
  )
}

export default Home;

