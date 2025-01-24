import { Link } from "react-router-dom";
import "./home.css";


const Home = () => {



  return (
    <div className="home">
      <div className="home-info">
        <div>
          <p>Capturing Earth’s Beauty, One Shot at a Time</p>
          <h2>NINO KHIKHADZE</h2>
        </div>
        <Link to='/portfolio'>View Portfolio</Link>
      </div>
      <img src="/pictureStore/background-pictures/home.jpg" alt="nature-background" className="nature-pic-home" />
    </div>
  );
};

export default Home;
