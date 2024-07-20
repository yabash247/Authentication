
import React from "react";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from "./context/AuthContext";

import Homepage from './views/Homepage'
import Registerpage from './views/Registerpage'
import Loginpage from './views/Loginpage'
import Dashboard from './views/Dashboard'
import Profilepage from './views/Profilepage'
import HomepageSpec from './views/specifications/HomepageSpec'
import catfishFarming from './views/specifications/catfishFarming'
import catfishFarm_Project from './views/specifications/catFishFarm/Project'

//specifications 
import Navbar from './views/Navbar'

///console.log(process.env.REACT_APP_S3_BUCKET);
function App() {
  return (
    <Router>
      <AuthProvider>
        < Navbar/>
        <Switch>
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
          <PrivateRoute component={Profilepage} path="/Profile" exact />
          <Route path="/login" component={Loginpage}  />
          <Route component={Registerpage} path="/register" exact />
          <Route component={Homepage} path="/" exact />

          <PrivateRoute component={HomepageSpec} path="/IntutiveSpec" exact />
          <PrivateRoute component={catfishFarming} path="/IntutiveSpec/catfishFarming" exact />
          <PrivateRoute component={catfishFarm_Project} path="/IntutiveSpec/catfishFarming/project/*"/>
          
          

          <PrivateRoute component={Homepage} path="*" exact />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App

