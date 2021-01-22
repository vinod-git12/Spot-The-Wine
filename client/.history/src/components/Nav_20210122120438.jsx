import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <Link to="/">Home</Link>
      <header className="title">e-WINE</header>
      <Link to="/new">Add Your Favorite Wine</Link>
    </nav>
  );
}

export default Nav;


