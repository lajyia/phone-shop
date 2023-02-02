import React, { useState } from 'react';
import Button from './UI/Button/Button';
import '../styles/ProductsItem.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBasketAction } from '../store/basketReducer';
import classes from './cssModules/ProductsItem.module.css';
import { getPhoneAction } from '../store/existsReducer';

const ProductsItem = ({ item, add }) => {

    const dispatch = useDispatch();

    const exists = useSelector(state => state.exists.exists);

    const rootClasses = [[classes.item__image], [classes.item__ended_title]];

    if (!exists[item.name]) {
        rootClasses[0].push(classes.active);
        rootClasses[1].push(classes.active);
    }

    const addToCart = () => {
        dispatch(getPhoneAction(item.name))
        dispatch(addBasketAction());
        add({ ...item, id: Date.now() });
    }

    return (
        <div className="item">
            <div className="item__body">
                <div className="item__body-image">
                    <div className={rootClasses[1].join(' ')}>ENDED</div>
                    <img className={rootClasses[0].join(' ')} src={item.image} alt="phone" />
                </div>
                <div className="item__info-body">
                    <div className="item__title">{item.title}</div>
                    <div className="item__price">{item.price + "$"}</div>
                    {exists[item.name]
                        ? <Button onClick={addToCart}>ADD TO CART</Button>
                        : <div></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsItem;