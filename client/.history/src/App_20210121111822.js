import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import { Link, Route } from "react-router-dom";
import Show from "./components/./Show";

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
        <Route path="/images/:image"
        <Show images={images} />

        {images.map((image) => (
        <div className="red">
            <img className="wineImg" src={image.fields.image} alt={image.image} />
            </div>
      ))}
      </div>
      </div>
  );
}

export default App;
