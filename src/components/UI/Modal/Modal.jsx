import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { falseVisibleAction } from '../../../store/visibleReducer';

const Modal = ({children}) => {

    const visible = useSelector(state => state.visible.visible);
    const dispatch = useDispatch();

    const rootClasses = [classes.modal];

    if (visible){
        rootClasses.push(classes.active);
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active')
    }

    const goUnvisible = () =>{
        dispatch(falseVisibleAction());
    }

    return (
        <div onClick={goUnvisible} className={rootClasses.join(' ')}>
            <div onClick={((e) => e.stopPropagation() )} className={classes.modal__container}>
                {children}
            </div>
        </div>
    );
};

export default Modal;