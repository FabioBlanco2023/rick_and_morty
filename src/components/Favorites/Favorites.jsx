import { useSelector } from "react-redux"
import Card from "../Card/Card"

const Favorites = () => {
    const favorites = useSelector(state=>state.favorites)
    return (
        <>
        {favorites.map(({id, name, species, gender, image }) => {
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