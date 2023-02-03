import React from 'react';
import ProductsItem from './ProductsItem';
import '../styles/ProductsList.css';

const ProductsList = ({ phones, add }) => {

    if (phones.length == 0) {
        return (
            <h1 className="list__title">Products not found</h1>
        )
    }

    return (
        <div className="list">
            <div className="list__container">
                <div className="list__body">
                    {phones.map(phone =>
                        <ProductsItem add={add} key={phone.id} item={phone} />
                    )}
                </div>

            </div>

        </div>
    );
};

export default ProductsList;