import { useEffect } from "react";
import Navegador from "../Componentes.jsx/Navegador";
import { useDispatch } from "react-redux";
import { setSaveUserLoger } from "./Redux/action";
import { SAVE_USER } from "./Redux/type";


const Home = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        //dispatch( {type: SAVE_USER, payload: "Jorge ... E."} );
        dispatch(setSaveUserLoger("Jorge"));
    }, []);

    return (
        <div>
            <Navegador/>
            <h2> Home</h2>
        </div>
    )
}

export default Home;
