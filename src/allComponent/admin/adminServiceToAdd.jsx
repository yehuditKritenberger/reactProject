import ServiceMBX from './servicesMBX'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import BusinessData from './businessMBX'
import TextField from '@mui/material/TextField';

export default function AdminServiceToAdd({setIsAdd}) {

    const { register, handleSubmit, formState: { errors } } = useForm();

    function submitFunc(data) {
        console.log("addService",data)
        ServiceMBX.addService({ id: data.id, name: data.name, description: data.description, price: data.price, duration: data.duration })
        
        setIsAdd(false)

    }

    return (

        <form onSubmit={handleSubmit(submitFunc)}>
        <TextField id="outlined-basic" label="id" variant="outlined" placeholder="id" {...register("id", { required: "id is..." })}/>
        <p>{errors.id?.message}</p>
        <TextField id="outlined-basic" label="name" variant="outlined" placeholder="name"  {...register("name", { minLength: 3 })}/>
        {errors.name?.type === "minLength" && <span> name is not valid</span>}
        <TextField id="outlined-basic" label="description" variant="outlined" placeholder="description" {...register("description", { minLength: 5 })}/>
        <TextField id="outlined-basic" label="price" variant="outlined" placeholder="price" {...register("price", { min: 5 })}/>
        <TextField id="outlined-basic" label="duration" variant="outlined" placeholder="duration" {...register("duration", { min: 15 })}/>

            <button type="submit">Send</button>
        </form>
    )
}