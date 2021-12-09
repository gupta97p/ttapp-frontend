import React from 'react';
import Login from './components/Login';
import Profile from './components/profile'
import Signup from './components/singup'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


const Main= () => {

    return(<div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
        {/*<Route path="/profile">
            < Profile/>, 
        </Route>*/}
          </Routes>
    </Router>
   
    </div>)
}
export default Main;