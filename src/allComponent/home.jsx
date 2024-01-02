import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Button from '@mui/material/Button';


export default function Home() {
    return (<>
        <div>
            <Button variant="outlined"><Link to="admin">admin</Link></Button>
            <Button variant="outlined"><Link to="client">client</Link></Button>

        </div>
        <Outlet></Outlet>
    </>)
}