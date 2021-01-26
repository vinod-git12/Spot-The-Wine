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
import Footer from "./components/Footer";

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
      
    <html className="backGroundImage">
      <div className="App">
        <header className="title">Spot The Wine  </header>
        
        <Nav />
          <div className="homeImg">
          
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
        <Footer />
  
      </html>
    
  );
}

export default App;
