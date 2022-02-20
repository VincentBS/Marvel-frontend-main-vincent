import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Header from "./components/Header.js";
import Characters from "./pages/Characters/Characters";
import CharacterId from "./pages/CharacterId/CharacterId";
import Comics from "./pages/Comics/Comics";
import Favorites from "./pages/Favorites/Favorites";
import Signup from "./pages/Sign/Signup";
import Signin from "./pages/Sign/Signin";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer.js";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [searchComics, setSearchComics] = useState("");
  const [searchCharacters, setSearchCharacters] = useState("");

  console.log(token);

  const handleConnect = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 1 });
    } else {
      Cookies.remove("token");
    }
    setToken(token);
  };

  return (
    <Router>
      <Header
        handleConnect={handleConnect}
        token={token}
        setSearchCharacters={setSearchCharacters}
        setSearchComics={setSearchComics}
      />
      <Routes>
        <Route
          path="/"
          element={<Characters searchCharacters={searchCharacters} />}
        />
        <Route path="/character/:_id" element={<CharacterId />} />
        <Route
          path="/comics"
          element={<Comics searchComics={searchComics} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/join"
          element={<Signup handleConnect={handleConnect} />}
        />
        <Route
          path="/signin"
          element={<Signin handleConnect={handleConnect} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
