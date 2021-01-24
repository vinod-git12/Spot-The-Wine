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
        <a classname="aLink" href="https://www.linkedin.com/in/vinodkumar201981/" target="blank"><img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Symbol.png" height="35px" width="55px"></img></a>Spot The Wine
        <a classname="aLink" href="https://github.com/vinod-git12" target="blank"><img src="https://ctl.s6img.com/society6/img/y-xZ_syD7LhIJOGtpdTU08ra6Aw/w_700/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/8e29a2e79387449caa28090d71f489e3/~~/github-logo-prints.jpg" height="35px" width="55px"></img></a>
      </header>
      
        <div className="App">
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
    
      <div className="footer">
        <footer>copyright:VK</footer>
        </div>
      </body>
    
  );
}

export default App;