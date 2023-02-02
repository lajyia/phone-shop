import React from 'react';
import '../styles/CartPhonesItem.css';
import Button from './UI/Button/Button';
import { useDispatch } from 'react-redux';
import { getBasketAction } from '../store/basketReducer';
import { addPhoneAction } from '../store/existsReducer';

const CartPhonesItem = ({phone, remove}) => {

    const dispatch = useDispatch();

    const removeCart = () =>{
        dispatch(addPhoneAction(phone.name));
        remove(phone.id);
        dispatch(getBasketAction());
    }


    return (
        <div className="cart-phone">
            <div className="cart-phone__body-image">
                <img className="cart-phone__image" src={phone.image} alt={phone.title} />
            </div>
            <div className="cart-phone__title">{phone.title}</div>
            <div className="cart-phone__body">
                <div className="cart-phone__price">{phone.price}</div>
            <div className="cart-phone__remove-button">
                <Button onClick={removeCart}>REMOVE</Button>
            </div>
            </div>
        </div>
    );
};

export default CartPhonesItem;