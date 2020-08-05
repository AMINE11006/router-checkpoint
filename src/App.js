import React from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Home from './component/Home';
import Category from './component/Category';
import Products from './component/Products';
import Admin from './component/AdminArea';


function App() {
  return (
   <BrowserRouter>
   <div>
     <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/Category">Category</Link></li>
       <li><Link to="/Products">Products</Link></li>
       <li><Link to="/Login">AdminArea</Link></li>
     </ul>
   </div>

    <Route path="/" exact component={Home}></Route>
    <Route path="/Category" component={Category}></Route>
    <Route path="/Products" component={Products}></Route>
    <Route path="/Login" component={Admin}></Route>

   </BrowserRouter>
  );
}

export default App;
