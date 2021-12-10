import { useNavigate } from "react-router-dom"
import "../App.css"
function Kartica2(props){
    const navigate = useNavigate();
    return(
        <div className="forKartica">
            <p>Id: {props.Id_state}</p>
            <p className="drzava">{props.State}</p>
            <p>id year: {props.Id_year}</p>
            <p>Year: {props.Year}</p>
            <p>Population: {props.Population}</p>
            <p>Slug state: {props.Slug_state}</p>
            <button className="forBut" onClick={() => {}}>click for more</button>
        </div>
    )
}
export default Kartica2