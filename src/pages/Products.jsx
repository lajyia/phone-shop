import React, { useState } from 'react';
import { useSorted } from '../hooks/useSorted';
import '../styles/Products.css';

import iphone from '../image/phones/iphone13.png';
import samsung from '../image/phones/samsungA03.png';
import vivo from '../image/phones/vivoY35.png';
import htc from '../image/phones/htcWildfireE3.png';
import infinix from '../image/phones/infinixSmart6.png';
import nokia from '../image/phones/nokiaC20.png';
import realme from '../image/phones/realmeC11.png';
import xiaomi from '../image/phones/xiaomiRedmiA1.png';


import ProductsList from '../components/ProductsList';
import CartPhonesList from '../components/CartPhonesList';
import Modal from '../components/UI/Modal/Modal';
import Select from '../components/UI/Select/Select.jsx';


const Products = () => {

    const [phones, setPhones] = useState([
        { id: 1, title: 'SAMSUNG A03 | 3/64', image: samsung, price: 2100, name: 'samsung' },
        { id: 2, title: 'IPHONE 13 | 4/128', image: iphone, price: 700, name: 'iphone'},
        { id: 3, title: 'VIVO Y35 | 2/32', image: vivo, price: 1300, name: 'vivo'},
        { id: 4, title: 'HTC WILDFIRE E3 | 1/16', image: htc, price: 300, name: 'htc'},
        { id: 5, title: 'INFINIX SMART 6 | 4/64', image: infinix, price: 1900, name: 'infinix'},
        { id: 6, title: 'NOKIA C20 | 8/32', image: nokia, price: 100, name: 'nokia'},
        { id: 7, title: 'REALME C11 | 2/16', image: realme, price: 500, name: 'realme'},
        { id: 8, title: 'XIAOMI REDMI A1 | 16/256', image: xiaomi, price: 1100, name: 'xiaomi'},
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

    const [sorted, setSorted] = useState({ sort: '', exists: false });
    const sortedProducts = useSorted(phones, sorted.sort);

    return (
        <div className='products'>
            <Modal>
                <CartPhonesList removeAll={removeAll} remove={removeCart} title="YOUR ORDER" phones={cartPhones} />
            </Modal>
            <Select defaultValue="sort" value={sorted} onChange={setSorted} options={[{ name: "by price", value: "price" }, { name: "by exists", value: "exists" }]} />
            <ProductsList add={addCart} phones={sortedProducts}/>
        </div>
    );
};

export default Products;