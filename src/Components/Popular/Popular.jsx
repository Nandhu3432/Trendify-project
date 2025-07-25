import './Popular.css'
import data_products from '../assets/data.js'
import Item from '../Item/Item.jsx'; // Only if Item.jsx is in src/components/Item/


const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-item">
        {data_products.map((item,i)=>{
          return <Item key={i} id={item.id} name={item.name} image={item.img} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
   </div>
  )
}

export default Popular;
