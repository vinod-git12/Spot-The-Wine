import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import { Link, Route } from "react-router-dom";


function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);
      setImages(resp.data.records)
    };
    getData();
  }, []);

  return (
    <div className="App">
      <header className="title"><strong>The Wine List</strong></header>
      <div>
      <nav>
          <Link to="/">
            <h1>Home</h1>
        </Link>
      </nav>

        {images.map((image) => (
        <div class>
            <img className="wineImg" src={image.fields.image} alt={image.image} />
            </div>
      ))}
      </div>
      </div>
  );
}

export default App;
