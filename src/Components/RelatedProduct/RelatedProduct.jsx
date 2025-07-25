import React from 'react';
import './RelatedProduct.css';
import data_product from '../assets/data';
import Item from '../Item/Item';


const RelatedProduct = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr/>
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                return <Item
                key={i} // ✅ unique key
                id={item.id}
                name={item.name}
                image={item.img}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            })}
        </div>
    </div>
  );
};

export default RelatedProduct;

