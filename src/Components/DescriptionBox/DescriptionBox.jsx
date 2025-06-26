import React from 'react';
import'./DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className="descriptionbox-navigator">
       <div className="descriptionbox-nav-box">Description</div>
       <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
       </div>
       <div className="descriptinbox-description">
        <p>Step into elegance with this beautifully crafted dress, designed for both comfort and style.
         Made with soft, breathable fabric, it hugs your curves perfectly and enhances your natural charm.
         Ideal for casual outings, parties, or daily wear — stay trendy and confident every day!</p>
         
       </div>
    </div>
  );
};

export default DescriptionBox;

