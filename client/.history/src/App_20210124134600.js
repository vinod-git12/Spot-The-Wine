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

  const handleDelete = async () => {
    const recordURL = `${baseURL}/${props.image.id}`;
    await axios.delete(recordURL, config);
    props.setToggleFetch((prev) => !prev);
  };


    return (
    <body>
      
      <header className="title">

        <a className="aLink" href="" target="blank"><img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Symbol.png" height="25px" width="45px"></img></a> Spot The Wine
        <a className="aLink" href="" target="blank"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" height="25px" width="45px"></img></a>
    
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
