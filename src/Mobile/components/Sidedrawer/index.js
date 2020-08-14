import React from 'react'
import { AiOutlineClose } from "react-icons/ai";

import Navigation from '../Navigation/index'
import Backdrop from './Backdrop/index'
import SideDrawerStyle from './sideDrawer.styled';

const SideDrawer = (props) => {
    return (
        <div>
            <Backdrop
                show={props.open}
                clicked={props.close} />
            <SideDrawerStyle show={props.open}>
                <div className="close" onClick={props.close}>
                    <AiOutlineClose color="white" size="35px" />
                </div>
                <h1 onClick={props.close} >Sputnik V</h1>
                <Navigation close={props.close} />
            </SideDrawerStyle >
        </div>
    )
}

export default SideDrawer
