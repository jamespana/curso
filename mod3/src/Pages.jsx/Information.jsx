import { useEffect } from "react";
import Navegador from "../Componentes.jsx/Navegador";
import { useDispatch } from "react-redux";
import { setSaveInformation } from "./Redux/action";


const Information = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(setSaveInformation("DSSM - Talca"));
    }, []);

    return (
        <div>
            <Navegador/>
            <h2> Información</h2>
        </div>
    )
}

export default Information;
