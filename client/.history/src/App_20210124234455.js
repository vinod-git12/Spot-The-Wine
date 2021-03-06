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

        <a className="aLink" href="" target="blank"><img src="https://portagechristianschool.org/wp-content/uploads/2019/08/png-facebook-logo-facebook-logo-png-710.png" height="30px" width="60px"></img></a> Spot The Wine
        <a className="aLink" href="" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" height="25px" width="50px"></img></a>
    
        </header>
        
        <div className="App">
        <Nav />
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
            <img src="https://lh3.googleusercontent.com/proxy/AFTq7YTm5-_MjunDxpnoNqYYY3E2IoW5q4GXwpDQkx8lpOTvpf1SgNItwM9l5eu0v2dYckJkrV1FMjfoHJOrhLzx40JXQXhuaUpjrUZ626d-yJVz3AbBSRJbVzTAlumcPP78rC5WYGjd" height="25px" width="50px"></img> : VK
        <a className="aLink" href="" target="blank"><img src="https://cdn.iconscout.com/icon/free/png-512/github-154-675675.png" height="25px" width="50px"></img></a>
        </footer>
        </div>

      </body>
    
  );
}

export default App;
