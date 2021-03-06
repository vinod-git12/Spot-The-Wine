import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import { Link, Route } from "react-router-dom";
import Show from "./components/./Show";
import Home from "./components/./Home";
import Form from "./components/./Form";

function App() {
  const [images, setImages] = useState([]);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);
      setImages(resp.data.records)
      console.log(images)
    };
    getData();
  }, [toggle]);

  return (
    <div className="App">
      <header className="title"><strong>The Wine List</strong></header>
      <div>
      <nav>
          <Link to="/">
            <h1>Home</h1>
        </Link>
        </nav>
        <Route exact path="/">
          <Home images={images} />
        </Route>

        <Route path="/images/:id">
        <Show images={images} />
        </Route>
        <Form toggle={toggle} setToggle={setToggle}
        </div>
      </div>
  );
}

export default App;
