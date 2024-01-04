import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import "../scss/components/header.scss";

//images
import logo from "../images/logo.svg";

const Header = () => {
    const navigate = useNavigate();
    const current = window.location.pathname;
    return (
        <div
            style={
                current === "/login" || current === "/join"
                    ? { display: "none" }
                    : { display: "block" }
            }
        >
            <div className="header">
                <div className="header-wrap">
                    <div className="header-element">
                        <div>
                            <img
                                src={logo}
                                onClick={() => {
                                    navigate("/");
                                }}
                                alt="logo"
                            />
                        </div>
                        <div className="gnb">
                            <ul>
                                <li
                                    onClick={() => {
                                        navigate("/#");
                                    }}
                                >
                                    PROGRESS
                                </li>
                                <li
                                    onClick={() => {
                                        navigate("/#");
                                    }}
                                >
                                    COMPLETE
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="header-element">
                        <ul>
                            {/* <li className="drawing-button">DRAWING</li> */}
                            <li
                                className="login"
                                onClick={() => {
                                    navigate("/#");
                                }}
                            >
                                로그인
                            </li>
                            <li
                                className="join"
                                onClick={() => {
                                    navigate("/join");
                                }}
                            >
                                회원가입
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-margin"></div>
        </div>
    );
};

export default Header;
