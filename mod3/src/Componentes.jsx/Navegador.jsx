import { AppBar, BottomNavigation, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Navegador = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>                    
                    <Link to={'/Home'}>
                        <Button target={"/App"}  color="inherit">Home</Button>
                    </Link>
                    <Link to={'/About'}>
                        <Button target={"/About"}  color="inherit">About</Button>
                    </Link>
                    <Link to={'/About'}>
                        <Button color="inherit">Logout</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navegador;