import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
     const {addToCart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
         <div className="productdisplay-img-list">
         <img src={product.img} alt=""/>
         <img src={product.img} alt=""/>
         <img src={product.img} alt=""/>
         <img src={product.img} alt=""/>
         


         </div>
         <div className="productdisplay-img">
             <img  className='productdisplay-main-img' src={product.img} alt=""/>
         </div>
      </div>
      <div className="productdisplay-right">
           <h1>{product.name}</h1>
           <div className="productdisplay-right-stars">
                  <img src={star_icon} alt=""/>
                  <img src={star_icon} alt=""/>
                  <img src={star_icon} alt=""/>
                  <img src={star_icon} alt=""/>
                  <img src={star_dull_icon} alt=""/>
                   <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
              <div className="productdisplay-right-price-old">${product.old_price}</div>
              <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
                <div className="productdisplay-right-description">
                "Experience style and comfort with our premium quality fabric. Perfect fit, 
                long-lasting material, and made to match your everyday fashion!"
                </div>
                <div className="productdisplay-right-size">
                  <h1>Select Size</h1>
                  <div className="productdisplay-right-sizes">
                      <div>S</div>
                      <div>M</div>
                      <div>L</div>
                      <div>XL</div>
                      <div>XXL</div>
                </div>
            </div>
                 <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
                 <p className='productdisplay-right-category'> <span>Category :</span>Women , T-Shirt, Crop Top</p>
                 <p className='productdisplay-right-category'> <span>Tags :</span>Modren, Latest</p>
       </div>
     </div>
  );
};


export default ProductDisplay;






























