import React from 'react';
import basket from '../image/basket.svg';
import '../styles/Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { trueVisibleAction } from '../store/visibleReducer';

const Header = () => {

    const basketCounter = useSelector(state => state.basket.basket);

    const dispatch = useDispatch();

    const goVisible = () =>{
        dispatch(trueVisibleAction())
    }

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <Link to={'/products'}>PHONE SHOP</Link></div>
                <div className="header__bag">
                    <div className="header__counter-bag">{basketCounter}</div>
                    <div onClick={goVisible} className="header__body-bag">
                        <img className="header__image-bag" src={basket} alt="box" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;