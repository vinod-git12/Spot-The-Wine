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
      
      <header className="title">

        <a className="aLink" href="" target="blank"><img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Symbol.png" height="25px" width="45px"></img></a> Spot The Wine
        <a className="aLink" href="" target="blank"><img src="data:image/png;base64,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" height="25px" width="45px"></img></a>
    
        </header>
        
        <div className="App">
          <div className="Img">
            <Nav />
              <Route exact path="/">
                <Home images={images} />
               </Route>
            </div>

        <Route path="/images/:id">
            <Show images={images} setToggle={setToggle} />
        </Route>

        <Route path="/new">
            <Form images={images} toggle={toggle} setToggle={setToggle} />

          </Route>
          <Route path="/edit/:id">
        <Review key={images.id} images={images} setToggle={setToggle} />
        </Route>
      </div>
    
      <div className="footer">
        <footer>copyright:VK</footer>
        </div>
      </body>
    
  );
}

export default App;
