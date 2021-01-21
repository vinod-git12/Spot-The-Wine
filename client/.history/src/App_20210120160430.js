import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";


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
      <nav>
        <Link
      </nav>

      {images.map((image) => (
        <img className="wineImg" src={image.fields.image} alt={image.image}/>
      ))}
    </div>
  );
}

export default App;
