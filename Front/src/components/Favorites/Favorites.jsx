<<<<<<< HEAD:Front/src/components/Favorites/Favorites.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Card from "../Card/Card"
import { getFavorites } from "../../redux/actions";

const Favorites = () => {
    const dispatch = useDispatch()
    const favorites = useSelector((state)=>state.myFavorites);

    useEffect(() => { 
        dispatch(getFavorites())
    }, [])
    return (
        <>
        {favorites.map(({ id, name, species, gender, image }) => {
=======
import { useSelector } from "react-redux"
import Card from "../Card/Card"

const Favorites = () => {
    const favorites = useSelector(state=>state.favorites)
    return (
        <>
        {favorites.map(({id, name, species, gender, image }) => {
>>>>>>> abeed3f355627283cfd9e5dd19b3922364bd1207:src/components/Favorites/Favorites.jsx
            return (
            <Card
            key={id}
            id={id}
            name={name}
            species={species}             
            gender={gender}
            image={image}
            />
            )
            })}
        </>
    )
}

export default Favorites