import React, { useState } from "react";

const Products =[{id:1,name:"Laptop",Brand:"Dell",Qty:1},
    {id:2,name:"Laptop",Brand:"Hp",Qty:1},
    {id:3,name:"Laptop",Brand:"Lenovo",Qty:1}
]
const Keys = () => {

    const [items,setitem] = useState(Products);


    const changeQty = (id) => {
        const newitem =  items.map((item) => 
            item.id === id? {...item, Qty : item.Qty + 1} : item
        );
        setitem(newitem);
        
    };
    return (
        <div>
            {items.map((product) => (
                <div style={{backgroundColor:'red',color:"white",textAlign:"center"}} key={product.id}>
                <h1>{product.name}</h1>
                <h3>Brand:{product.Brand}</h3>
                <h4>Qty:{product.Qty}</h4>
                <button onClick={() => changeQty(product.id)}>+</button>
                </div>
            ))}
            
        </div>
    );
};

export default Keys