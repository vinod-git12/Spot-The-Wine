import './App.css';
import axios from "axios";
import { useEffect } from "react";
import { baseURL, config } from "./services";

function App() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios
    }
    return () => {
      
    }
  }, [input])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
