import React from 'react';
import {Link, Route} from 'react-router-dom';
import Productlist from './Product';
const Products = ({match}) =>{


 const products = [
  {
    id:1,
    name:"NIKE Liteforce Blue Sneakers",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
    status:"Available",
  },
  {
    id:2,
    name:"U.S. POLO ASSN. Slippers",
    description:"Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
    status:"Available",
  },
  {
    id:3,
    name:"ADIDAS Adispree Running Shoes",
    description:"Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
    status:"Available",
  },
  {
    id:4,
    name:"Lee Cooper Mid Sneakers",
    description:"Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
    status:"Out of Stock",
  },
 ];
 
 const list = products.map(product => {
  return(
  <li key={product.id}><Link to={`${match.url}/${product.id}`}>{product.name}</Link></li>
  )
 });

    return(
      <>
      <div style={{
        float: "left",
        backgroundColor: "#f0f0f0",
        padding: "10px",
        width: "30%",
      }}>
        <h4>Products</h4>
        <ul>{list}</ul>
      </div>

      <Route exact path={`${match.url}/:productId`} render={props => <Productlist data={products}{...props}/>}/>

      <Route exact path={match.url} render={() =>(
        <p style={{textAlign:"center"}}>Please select a product</p>
      )}/>
      </>
    )
  };

export default Products;
  