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