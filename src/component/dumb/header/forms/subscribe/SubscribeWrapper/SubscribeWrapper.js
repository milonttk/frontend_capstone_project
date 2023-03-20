import React from "react";
import './SubscribeWrapper.css';

function SubscribeWrapper({children,...restPros}){
    return(
        <div className="subscribe-wrapper" {...restPros}>
            {children}
        </div>
    )
}

export default SubscribeWrapper;