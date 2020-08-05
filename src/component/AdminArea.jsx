import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Login from './Login';

const Admin = () =>{
  
  
    return(
      <BrowserRouter>
      <div>
      <p>You must log in to view the page at /admin</p>
      <Link to="/admin"><button>Log in</button></Link>
      </div>

      <Route path="/admin" exact component={Login}/>
      </BrowserRouter>
    )
  }
  
export default Admin;