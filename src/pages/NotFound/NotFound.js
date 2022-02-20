import "./NotFound.css";
import { Link } from "react-router-dom";
import picture from "../../assets/notfound.jpg";

const NotFound = () => {
  return (
    <div className="notFound">
      <h2>Error 404 : Page not found</h2>
      <Link to="/">
        <button>Don't panic --- Click here to come back</button>
      </Link>
      <img className="img-notFound" src={picture} alt="Avengers" />
    </div>
  );
};

export default NotFound;
