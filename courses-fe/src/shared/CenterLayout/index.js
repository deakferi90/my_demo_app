import React from "react";
import './style.scss';

const CenterLayout = (props) => {
    return (
        <div className="center-container">{props.children}</div>
    );
}

export default CenterLayout;