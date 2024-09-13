import Product from '../components/Product';
import './Catalog.css';


function Catalog() {
    return ( 
        <div className='catalog'>
            <h1>Our amazing catalog</h1>
            <Product title='1st toy' price='14.99'></Product>
            <Product title='2nd toy' price='14.99'></Product>
            <Product title='3rd toy' price='14.99'></Product>
            <Product title='4rd toy' price='14.99'></Product>
            <Product title='5th toy' price='14.99'></Product>
        </div>
     );
}

export default Catalog;