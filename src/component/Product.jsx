import React from 'react';


const Productlist = ({match, data}) =>{

    const produit = data.find(e => e.id === Number(match.params.productId))
    let dataList;

if (produit)
    dataList = (
        <div style={{width:"80%"}}>
            <h3>{produit.name}</h3>
            <p>{produit.description}</p>
            <hr/>
            <h4>{produit.status}</h4>
        </div>
    )

else  dataList = (<div style={{textAlign:"center"}}>This product doesn't exist</div>);



    return(
    <div>{dataList}</div>
    )
};

export default Productlist;