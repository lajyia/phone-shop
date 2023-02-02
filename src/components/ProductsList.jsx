import React,{useState} from 'react';
import ProductsItem from './ProductsItem';
import '../styles/ProductsList.css';
import Select from './UI/Select/Select';

const ProductsList = ({ phones, add }) => {

    const [sorted, setSorted] = useState({ sort: '', exists: false });


    if (phones.length == 0) {
        return (
            <h1 className="list__title">Products not found</h1>
        )
    }

    return (
        <div className="list">
            <div className="list__container">
                <Select defaultValue='sorted' onChange={setSorted} value={sorted.sort} options={[{ name: "by price", value: "price" }, { name: "by exists", value: 'exists' }]} />
                {phones.map(phone =>
                    <ProductsItem add={add} key={phone.id} item={phone} />
                )}
            </div>

        </div>
    );
};

export default ProductsList;