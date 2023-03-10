import React from "react";
import "../scss/components/footer.scss";
//images
import logo from "../images/footer/footer-logo.png";

const Header = () => {
    const current = window.location.pathname;
    return (
        <div
            style={
                current === "/login" || current === "/join"
                    ? { display: "none" }
                    : { display: "block" }
            }
        >
            <div className="footer-wrap">
                <div className="footer">
                    <img className="logo-image" src={logo} />
                    <div className="footer-info">
                        <div className="info-title">DEVELOP</div>
                        <div className="developer">
                            <div className="front-end">
                                <div className="info-title">FE</div>
                                <div className="participants">
                                    Cho dasom | Jung Min-Hee | Woo Jong Hun
                                </div>
                            </div>
                            <div className="back-end">
                                <div className="info-title">BE</div>
                                <div className="participants">
                                    Lee Dong-Keon | Shin Sun-Ho | Jang
                                    Chang-Kyoon | Jeong Yong-Wook
                                </div>
                            </div>
                        </div>
                        <div className="designer">
                            <div className="info-title">DESIGN</div>
                            <div className="participants">KIM NAYOUNG</div>
                        </div>
                    </div>
                    <div className="copyright">
                        ©2022 PICBOY All Right Reserved
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
