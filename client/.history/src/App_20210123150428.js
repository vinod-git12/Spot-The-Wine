import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import { Link, Route } from "react-router-dom";
import Show from "./components/Show";
import Home from "./components/Home";
import Form from "./components/Form";
import Nav from "./components/Nav";
import Review from "./components/Review";

function App() {
  const [images, setImages] = useState([]);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(baseURL, config);
      setImages(resp.data.records)
      history.pusg
    };
    getData();
  }, [toggle]);

  return (
    <div className="App">
       <div>
          <div className="Img">
            <Nav />
              <Route exact path="/">
                <Home images={images} />
               </Route>
            </div>

        <Route path="/images/:id">
          <Show images={images} />
        </Route>

        <Route path="/new">
          <Form toggle={toggle} setToggle={setToggle} />
        </Route>
        <Review key={images.id} images={images} setToggleFetch={setToggleFetch} />

      </div>
      <div className="footer">
        <footer>copyright:VK</footer>
        </div>
    </div>
    
  );
}

export default App;
