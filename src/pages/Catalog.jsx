import Product from '../components/Product';
import './Catalog.css';
// import { catalog as Products, categories } from '../services/DataService';
import DataService, { categories } from '../services/DataService';
import { useState, useEffect } from 'react';


function Catalog() {


    const [filter, setFilter] = useState("");
    const [products, setProducts] = useState([]);

    async function loadData(){
        let data = await DataService.getProducts();
        setProducts(data); 
    }


    // when page loads do this 
    useEffect( () => {
      loadData();
    }, [] );  // empty means call it once unless you place a dependencie to call when the dependencie changes 

    return ( 
        <div id='catalog' className='catalog page'>
            <h1>Our Amazing Catalog</h1>

            <div className='filters'>
              <button className='btn-filter' onClick={() => setFilter("")}>All</button>
            {categories.map(cat =><button className='btn-filter' onClick={() => setFilter(cat)}  >{cat}</button>) }  
            </div>

           


            {products.filter(prod => filter == "" || prod.category == filter).map(prod => <Product data={prod}></Product>)}


            {/* <Product data={Products[0]}></Product> */}
           

            {/* <Product title='2nd toy' price='14.99'></Product> */}
            
        
        </div>
     );
}

export default Catalog;