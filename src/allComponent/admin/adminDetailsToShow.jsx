import { observer } from "mobx-react-lite";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BusinessData from './businessMBX'
import AdminOption from "./adminOption";


const AdminBusinessToShow = observer(() => {

  return (

    <>
      <div>

        <Card variant="outlined" sx={{ width: 320 }}>

          <CardActions>
            <CardContent>
            <input width="100 px" type="image" alt="logo" src="https://img.freepik.com/free-photo/business-word-banner-meeting-room-background_53876-139751.jpg?size=626&ext=jpg&ga=GA1.1.495211049.1699267399&semt=ais" ></input>
              <Typography level="body-sm">Name: {BusinessData.buisness.name}</Typography>
              <Typography level="body-sm">Adress: {BusinessData.buisness.adress}</Typography>
              <Typography level="body-sm">Phone: {BusinessData.buisness.phone}</Typography>
              <Typography level="body-sm">Owner: {BusinessData.buisness.owner}</Typography>
              <Typography level="body-sm">Description: {BusinessData.buisness.description}</Typography>

            </CardContent>
          </CardActions>
        </Card>
      </div>
      {BusinessData.isLogin && <AdminOption></AdminOption>}
    </>
  )
})

export default AdminBusinessToShow;






