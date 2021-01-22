import { Link } from "react-router-dom"

function Home(props) {

  return (
    <div className="wine">
      
      <div className="wineCard">
        {
          props.images.map((imag) => (
            <Link  to={`/images/${imag.id}`}>
              <img className="wineImg" src={imag.fields.image} alt={imag.name} />
            </Link>))
          <R
        }

          </div>
      </div>
  )
}

export default Home;

