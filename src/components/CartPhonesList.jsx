import React, { useState } from 'react';
import CartPhonesItem from './CartPhonesItem';
import '../styles/CartPhonesList.css';
import { useTotalPrice } from '../hooks/useTotalPrice';
import sad from '../image/sad.svg';
import Button from './UI/Button/Button';
import { useDispatch } from 'react-redux';
import { clearPhoneAction } from '../store/existsReducer';
import { nullBasketAction } from '../store/basketReducer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const CartPhonesList = ({ phones, title, remove, removeAll }) => {

    let totalCount = useTotalPrice(phones);

    const dispatch = useDispatch();

    const clearAll = () => {
        dispatch(clearPhoneAction());
        removeAll();
        dispatch(nullBasketAction())
    }

    if (phones.length == 0) {
        return (
            <div className='modal-active'>
                <h1 className="modal-active__title">the basket is empty </h1>
                <img className="sad-face" src={sad} alt="sad face" />
            </div>
        )
    }

    return (
        <div className="cart-list">
            <h1 className="products__order-title">{title}</h1>
            <div className="cart-list__container">
                <TransitionGroup>
                    {phones.map(phone =>
                        <CSSTransition key={phone.id} timeout={500} classNames="item-cart">
                            <CartPhonesItem remove={remove}  phone={phone} />
                        </CSSTransition>
                    )}
                </TransitionGroup>

                <div className="cart-list__body-total">
                    <Button onClick={clearAll}>CLEAR ALL</Button>
                    <div className="cart-list__info-cart">
                        <div className="cart-list__title-total">Total: </div>
                        <div className="cart-list__total">{totalCount + "$"}</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CartPhonesList;