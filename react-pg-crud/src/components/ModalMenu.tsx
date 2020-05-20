import React from 'react';
import classes from './ModalMenu.module.css';
import { IModalMenuProps } from '../interfaces';

const ModalMenu : React.FC<IModalMenuProps> = (props) => {
    const { closeFunc, active } = props;
    return (
        <div className={`${classes.ModalMenu} ${active && classes.ModalMenuActive}`}>
            <div className={classes.ModalMenuOverlay} onClick={()=>closeFunc()}></div>
            <div className={classes.ModalMenuContent}>
                {props.children}
            </div>
        </div>
    )
}

export default ModalMenu;