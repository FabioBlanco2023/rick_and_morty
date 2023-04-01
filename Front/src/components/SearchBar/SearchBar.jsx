import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState("");
   const handleChange = (event) => {
      setId(event.target.value);
   };
   return (
      <div className={style.bar}>
<<<<<<< HEAD:Front/src/components/SearchBar/SearchBar.jsx
      <input type="search"
=======
      <input type="search" 
>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/components/SearchBar/SearchBar.jsx
      className={style.searchInput} 
      onChange={handleChange}/>
      <button
      className={style.searchButton} onClick= {() => onSearch(id)} >
          Agregar
         </button>
      </div>
   );
}


