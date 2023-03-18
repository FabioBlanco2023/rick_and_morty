import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx"
import Favorites from "./components/Favorites/Favorites.jsx";

function App () {

   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   const [access,setAccess] = useState(false);
   const navigate = (useNavigate);

   useEffect(() => {
    !access && navigate("/");
   }, [access]);

   const username = "mblanco@mail.com";
   const password = "mblanco123";

   const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "3e0411043446.102b6d9d5fa85ad2236f";
    if(characters.find((char)=>char.id === id)) {
     
      return alert("personaje repetido");
    }
      
    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then(response=>response.json()) 
    .then(data=>{
      if(data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }else{
        alert("Algo salió mal");
      }
    });
  };
    

    const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData) => {
    if(userData.username===username && userData.password===password){
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };
  
  return (
    <div> 
        {pathname !== "/" && <Nav onSearch={onSearch} />}
         <Routes>
          <Route path="/" element={<Form Login={login} />} /> 
        <Route 
           path="/home" 
           element={<Cards characters={characters} onClose={onClose} />} 
          />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/detail/:detailId" element={<Detail />} />
         </Routes>
      </div>
  );
}

export default App;
