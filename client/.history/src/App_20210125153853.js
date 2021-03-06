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
      <div className="App">
      <header className="title">
      <div className="Nav"> <Nav /></div>Spot The Wine
      <div>
        <a className="aLink" href="" target="blank"><img src="https://cdn1.vectorstock.com/i/1000x1000/79/75/facebook-logo-icon-vector-29227975.jpg" height="30px" width="60px"></img></a> 
        <a className="aLink" href="" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" height="25px" width="50px"></img></a>
            </div>
       </header>
        
        
        
          <div className="Img">
           
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
        <footer>
            <a className="aLink" href="" target="blank"><img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Symbol.png" height="30px" width="60px"></img></a> 
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhvH4sOOw1FHfzNkp7C_XwPWzV3fNJRZgfA&usqp=CAU" height="25px" width="50px"></img> : <strong>VK</strong>
        <a className="aLink" href="" target="blank"><img src="https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" height="25px" width="50px"></img></a>
        </footer>
        </div>

      </body>
    
  );
}

export default App;
