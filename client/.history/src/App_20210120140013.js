import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";

function App() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);
      setImage(resp.data.records)
    };
    getData();
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
