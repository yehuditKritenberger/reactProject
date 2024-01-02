import { useEffect, useState } from "react"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';



import TextField from '@mui/material/TextField';
import BusinessData from './businessMBX'
export default function AdminInputLogin() {
    const [openError, setOpenError] = useState(false);
    const [name, setName] = useState("name")
    const [password, setPassword] = useState("password")
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handeleLogin = async () => {
        console.log('login');

        const response = await fetch("http://localhost:8787/login", {
            method: "POST",
            body: JSON.stringify({
                name, password
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.status === 200) {
            BusinessData.setIsLogin(true);
            setOpenError(false);
        }
        else {
            console.log(password)
            setOpenError(true);

        }


    }
    return (<>
        <Snackbar open={openError} autoHideDuration={6000} onClose={() => setOpenError(false)}>
            <Alert onClose={() => setOpenError(false)} severity="error" sx={{ width: '100%' }}>
                the password invalid!
            </Alert>
        </Snackbar>
    
        <TextField id="outlined-basic" label="name" variant="outlined" placeholder={name} onChange={(e) => setName(e.target.value)}/>
        <TextField id="outlined-basic" type="password" label="password" variant="outlined" placeholder={password} onChange={(e) => setPassword(e.target.value)}/>
        <Button variant="contained" onClick={() => handeleLogin()}>login</Button>

    </>)
}