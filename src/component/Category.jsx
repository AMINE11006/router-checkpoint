import React from 'react';
import {Link, Route} from 'react-router-dom';

const Category = ({match}) =>{
    return(
      <div>
        <ul>
          <li><Link to={`${match.url}/Shoes`}>Shoes</Link></li>
          <li><Link to={`${match.url}/Boots`}>Boots</Link></li>
          <li><Link to={`${match.url}/Footwear`}>Footwear</Link></li>
        </ul>

        <Route path={`${match.path}/:name`}
        render={({match}) =>(
        <h2>{match.params.name}</h2>
        )}/>

      </div>
    );
  };
  
export default Category;