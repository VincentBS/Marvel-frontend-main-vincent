import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = ({
  handleConnect,
  token,
  setSearchComics,
  setSearchCharacters,
}) => {
  const onClick = (event) => {
    handleConnect(null);
  };
  const [search, setSearch] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setSearchCharacters("");
    setSearchComics("");
    setSearch("");
  }, [pathname, setSearchCharacters, setSearchComics, setSearch]);

  const showSearchBar = pathname === "/" || pathname === "/comics";

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
    if (pathname === "/") {
      setSearchCharacters(event.target.value);
    }
    if (pathname === "/comics") {
      setSearchComics(event.target.value);
    }
  };

  return (
    <>
      <div className="header-wrapper">
        {!token ? (
          <div className="header-buttons">
            <Link to="/signin">
              <button>LOGIN</button>
            </Link>
            <div>|</div>
            <Link to="/join">
              <button>JOIN</button>
            </Link>
          </div>
        ) : (
          // Affichage du bouton disconnect seulement si un User est déjà connecté
          <button className="disconnect-button" onClick={onClick}>
            DISCONNECT
          </button>
        )}
        <div className="header-logo-wrapper">
          <img src={logo} alt="logo" width="160px" />
        </div>
        {showSearchBar && (
          <div className="search">
            <input
              onChange={handleChange}
              value={search}
              className="searchBar"
              type="text"
              placeholder="Search an Hero"
            />
            <FaSearch className="search-bar-icon" color="#767676" />
          </div>
        )}
      </div>
      <ul className="header-low">
        <li>
          <Link className="low-section-title" to="/">
            HEROS
          </Link>
        </li>
        <li>
          <Link className="low-section-title" to="/comics">
            COMICS
          </Link>
        </li>
        {token && (
          <li>
            <Link className="low-section-title" to="/favourites">
              FAVORITES
            </Link>
          </li>
        )}
      </ul>
    </>
  );
};

export default Header;
