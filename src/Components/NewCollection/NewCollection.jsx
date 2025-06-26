import React from 'react';
import './NewCollection.css';
import new_collection from '../assets/newcollection'; 
import Item from '../Item/Item'; // ✅ fixed path

const NewCollections = () => {
  return (
    <div className='newcollection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collection">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.img}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewCollections;





