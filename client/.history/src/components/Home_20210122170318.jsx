import { Link } from "react-router-dom"
import Review from "./compo"

function Home(props) {

  return (
    <div className="wine">
      
      <div className="wineCard">
        {
          props.images.map((imag) => (
            <Link  to={`/images/${imag.id}`}>
              <img className="wineImg" src={imag.fields.image} alt={imag.name} />
            </Link>))
          <Review />
        }

          </div>
      </div>
  )
}

export default Home;

