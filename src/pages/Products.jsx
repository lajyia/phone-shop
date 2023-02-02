import React, { useState } from 'react';
import iphone from '../image/phones/iphone13.png';
import samsung from '../image/phones/samsungA03.png';
import vivo from '../image/phones/vivoY35.png';
import ProductsList from '../components/ProductsList';
import '../styles/Products.css';
import CartPhonesList from '../components/CartPhonesList';
import Modal from '../components/UI/Modal/Modal';

const Products = () => {

    const [phones, setPhones] = useState([
        { id: 1, title: 'SAMSUNG A03 | 3/64', image: samsung, price: 2100, name: 'samsung' },
        { id: 2, title: 'IPHONE 13 | 4/128', image: iphone, price: 700, name: 'iphone' },
        { id: 3, title: 'VIVO Y35 | 2/32', image: vivo, price: 1300, name: 'vivo' },
    ])

    const [cartPhones, setCartPhones] = useState([]);

    const addCart = (phone) => {
        setCartPhones([...cartPhones, phone]);
    }
    const removeCart = (id) => {
        setCartPhones(cartPhones.filter(phone => phone.id !== id))
    }
    const removeAll = () =>{
        setCartPhones([]);
    }

    return (
        <div className='products'>
            <Modal>
                <CartPhonesList removeAll={removeAll} remove={removeCart} title="YOUR ORDER" phones={cartPhones} />
            </Modal>
            <ProductsList add={addCart} phones={phones}/>
        </div>
    );
};

export default Products;