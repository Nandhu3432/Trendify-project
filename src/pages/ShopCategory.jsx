import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext'; // ✅ correct context import
import dropdown_icon from '../Components/assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); // ✅ context used correctly

  return (
    <div className='shop-category'> {/* typo fixed here too */}
      <img  className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-13</span> out of 40 products
        </p>
        <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt=""/> 
        </div>
      </div>
      <div className="shpocategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
             return <Item
             key={i} // ✅ unique key
             id={item.id}
             name={item.name}
             image={item.img}
             new_price={item.new_price}
             old_price={item.old_price}
           />
          }
           else{
            return null;
           }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;





