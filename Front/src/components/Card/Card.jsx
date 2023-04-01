import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { connect } from "react-redux"
<<<<<<< HEAD:Front/src/components/Card/Card.jsx
import { removeFavorite } from "../../redux/actions";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

function Card({ id, name, species, gender, image, onClose, removeFavorite, myFavorites }) {

   const [isFav,setIsFav] = useState(false);

   
   const addFavorite = (character) => {
      axios
      .post("http://localhost:3001/rickandmorty/fav",character)
      .then((res) => console.log("ok"));
   };
   const handleFavorite = () => {
      if(isFav) {
          setIsFav(false);
          removeFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({ id, name, species, gender, image, });
      }
   };
=======
import { addFavorite, removeFavorite } from "../../redux/actions"
import { useEffect, useState } from "react";

function Card({ id, name, species, gender, image, onClose, addFavorite, removeFavorite, myFavorites }) {

   const [isFav,setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
          setIsFav(false)
          removeFavorite(id)
      }else{
         setIsFav(true)
         addFavorite({ id, name, species, gender, image, onClose, addFavorite, removeFavorite, })
      }
   }
>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/components/Card/Card.jsx
   useEffect(() => {
      myFavorites.forEach((fav)=> {
         if (fav.id === id){
            setIsFav(true)
         }
      });
   }, [myFavorites]);

<<<<<<< HEAD:Front/src/components/Card/Card.jsx
=======

>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/components/Card/Card.jsx
   return (
      <div className={style.container}>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <button onClick={() => onClose(id)} className={style.closeButton}>
          X
         </button>
         <Link to={`/detail/${id}`}>
         <h2> {name}</h2>
         </Link>
         <img src={image} alt="" /> 
       
          
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return{
<<<<<<< HEAD:Front/src/components/Card/Card.jsx
      //addFavorite: (character)=>{
         //dispatch(addFavorite(character));
      //},
      removeFavorite: (id)=>{
         dispatch(removeFavorite(id));
      },
   };
};
=======
      addFavorite: (character)=>{dispatch(addFavorite(character))},
      removeFavorite: (id)=>{dispatch(removeFavorite(id))},
   }
}
>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/components/Card/Card.jsx

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites,
   } 

}

<<<<<<< HEAD:Front/src/components/Card/Card.jsx
export default connect(mapStateToProps, mapDispatchToProps)(Card);
=======
export default connect(mapStateToProps, mapDispatchToProps)(Card)
>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/components/Card/Card.jsx
