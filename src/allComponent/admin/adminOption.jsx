import { Outlet } from "react-router-dom";
import { useState } from "react"
import { Link } from "react-router-dom";
import AdminAppointments from './adminAppointments'
import AdminServices from "./adminServices";
import AdminBusinessToEdit from "./adminDetailsToEdit";
export default function AdminOption() {
    const [isEdit, SetIsEdit] = useState(false)
    return (

        <>{!isEdit ?
            <div>
                <button onClick={() => SetIsEdit(true)}>to edit</button>
                <p>
                    <button><Link to="appointments">to show appointments</Link></button>
                    <button><Link to="services" >to show service</Link></button>
                </p>
            </div> : <AdminBusinessToEdit SetIsEdit={SetIsEdit} ></AdminBusinessToEdit>
        }
            <Outlet></Outlet>

        </>
    )
}