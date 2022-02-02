import React from "react";
import CenterLayout from "../CenterLayout";
import './style.scss';

const LandingHeader = () => {
    return (
        <div className="landing-header">
            <CenterLayout>
                <div className="logo-text">
                    <span>Mint</span>
                    <span>Web</span>
                    <span>Tuts</span>
                </div>
                <div className="icon">
                    <a className='login-btn' href='/login'>Login</a>
                </div>
            </CenterLayout>
        </div>
    )
}

export default LandingHeader;