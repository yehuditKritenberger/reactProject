import { useEffect, useState } from "react";
import { Alert, Button} from "@mui/material";
import BusinessData from "../admin/businessMBX";
import AppointmentMBX from "../admin/appointmentMBX";
import AdminAppointments from "../admin/adminAppointments";
import AppointmentItemToEdit from './appointmentItemToEdit'
import AdminServices from "../admin/adminServices";
import AdminBusinessToShow from "../admin/adminDetailsToShow";

export default function ClientWellcom(){
    const [editAppointment,setEditAppointment]=useState(false)
    useEffect(()=>{
        BusinessData.setIsLogin(false)
    },[])
return(<>
    <div>ClientWellcom</div>
    <AdminBusinessToShow></AdminBusinessToShow>
    <AdminServices></AdminServices>
   {!editAppointment?<Button variant='outlined' ariant="contained" onClick={()=>{setEditAppointment(true) }} >
          Add a meeting
        </Button>:<AppointmentItemToEdit  setEditAppointment={setEditAppointment}></AppointmentItemToEdit>}
   
    </>
)
}