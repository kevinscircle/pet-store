import Product from '../components/Product';
import './Catalog.css';
import { catalog as Products, categories } from '../services/DataService';


function Catalog() {


    return ( 
        <div id='catalog' className='catalog'>
            <h1>Our Amazing Catalog</h1>

            <div className='filters'>
              {categories.map(cat =><button className='btn btn-sm btn-outline-dark'>{cat}</button>)}   
            </div>

           


            {Products.map(prod => <Product data={prod}></Product>)}
            {/* <Product data={Products[0]}></Product> */}
           

            {/* <Product title='2nd toy' price='14.99'></Product> */}
        
        </div>
     );
}

export default Catalog;