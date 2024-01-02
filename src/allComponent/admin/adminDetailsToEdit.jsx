import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react"
import BusinessData from './businessMBX'
import { useRef } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AdminBusinessToEdit = observer((props) => {

    const { SetIsEdit } = props;
    const [name, setName] = useState(BusinessData.buisness.name);
    const [adress, setAdress] = useState(BusinessData.buisness.adress);
    const [owner, setOwner] = useState(BusinessData.buisness.owner);
    const [phone, setPhone] = useState(BusinessData.buisness.phone);
    const [description, setDescription] = useState(BusinessData.buisness.description);


    function handleSubmit() {

        BusinessData.buisness.name = name
        BusinessData.buisness.adress = adress;
        BusinessData.buisness.owner = owner;
        BusinessData.buisness.phone = phone;
        BusinessData.buisness.description = description;
        BusinessData.sendDataToServer()

        SetIsEdit(false)
    }


    return (
        <form >
            <div>
                <TextField id="outlined-basic" label="name" variant="outlined" placeholder={BusinessData.buisness.name} onChange={(e) => setAdress(e.target.value)} />
                <TextField id="outlined-basic" label="adress" variant="outlined" placeholder={BusinessData.buisness.adress} onChange={(e) => setAdress(e.target.value)} />
                <TextField id="outlined-basic" label="owner" variant="outlined" placeholder={BusinessData.buisness.owner} onChange={(e) => setOwner(e.target.value)} />
                <TextField id="outlined-basic" label="phone" variant="outlined" placeholder={BusinessData.buisness.phone} onChange={(e) => setPhone(e.target.value)} />
                <TextField id="outlined-basic" label="description" variant="outlined" placeholder={BusinessData.buisness.description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <Button variant="outlined" onClick={handleSubmit}>submit</Button>

        </form>
    )
})
export default AdminBusinessToEdit;
