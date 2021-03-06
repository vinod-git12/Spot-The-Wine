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
    };
    getData();
  }, [toggle]);

  return (
    <body>
      <div
      <a classname="aLink" href="">Github</a><a classname="aLink" href="">Linkedin</a>
     
      <header className="title">
        Spot The Wine </header>
        
      
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
            <Form images={images} toggle={toggle} setToggle={setToggle} />
        </Route>
        {/* <Review key={images.id} images={images} setToggle={setToggle} /> */}

      </div>
      </div>
      <div className="footer">
        <footer>copyright:VK</footer>
        </div>
      </body>
    
  );
}

export default App;
