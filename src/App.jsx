import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link, Outlet, useParams } from 'react-router-dom';
import './App.css'
import AdminWellcom from './allComponent/admin/adminwellcom'
import ClientWellcom from './allComponent/client/clientWellcom';
import AdminAppointments from './allComponent/admin/adminAppointments'
import AdminServices from './allComponent/admin/adminServices';
import Home from './allComponent/home';
// import BasicDatePicker from './aaaaa'
// import BasicTextFields from './aaaaa'
// import ServiceMBX from '../allComonent/admin/businessMBX'
function App() {



  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />}>
            <Route path={"client"} element={<ClientWellcom />}></Route>
            <Route path={"admin"} element={<AdminWellcom />}>
              <Route path={'appointments'} element={<AdminAppointments />}></Route>
              <Route path={'services'} element={<AdminServices />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <BasicDatePicker></BasicDatePicker> */}
      {/* <BasicTextFields></BasicTextFields> */}
    </div>
  )
}
export default App;
// App.jsx

// import React from 'react';
// import Button from '@mui/material/Button';

// function App() {
//   return (
//     <div>
//       <Button variant="contained">Hello World</Button>
//     </div>
//   );
// }

// export default App;

