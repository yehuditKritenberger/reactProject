import { observer } from "mobx-react-lite";
import { useState } from "react";
import ServiceItemToShow from './serviceItemToShow'
import ServiceMBX from './servicesMBX'
import AdminServiceToAdd from "./adminServiceToAdd";
import BusinessData from './businessMBX'

const AdminServices = observer(() => {
    const [isAdd, setIsAdd] = useState(false)
    
    return (<>
        
        {ServiceMBX.listServices.map((service, index) => <ServiceItemToShow service={service} key={index} ></ServiceItemToShow>)}
        
        {BusinessData.isLogin && <button onClick={(e) => setIsAdd(true)}>to edit service</button>}

        {isAdd && <AdminServiceToAdd setIsAdd={setIsAdd}></AdminServiceToAdd>}

    </>
    )
})

export default AdminServices;
