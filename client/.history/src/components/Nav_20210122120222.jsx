import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
       <header className="title">The Wine List</header>
      <Link to="/">Home</Link>
      <Link to="/new">Add Your Favorite Wine</Link>
    </nav>
  );
}

export default Nav;


