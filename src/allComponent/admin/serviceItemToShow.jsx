import { observer } from "mobx-react-lite";
import {  useState } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ServiceItemToShow = ({service}) => {

    return(<>
        
        <Card sx={{ minWidth: 275 }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        id: {service.id}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       name:{service.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        description:{service.description}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        price:{service.price}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        duration: {service.duration}
        </Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
            </>)
    
}

 export default ServiceItemToShow;













