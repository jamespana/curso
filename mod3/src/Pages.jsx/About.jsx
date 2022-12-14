import Navegador from "../Componentes.jsx/Navegador";
import { useSelector } from "react-redux";

const About = () => {
    const nombreDelUsuario = useSelector( (state) => state.user_loged );
    const informacion = useSelector( (state) => state.information );
    return (
        <div>
            <Navegador/>
            <h2>Página About... </h2>
            {nombreDelUsuario} 
            {informacion}

        </div>
    )
}

export default About;