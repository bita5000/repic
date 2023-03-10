import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../scss/pages/join.scss";

//images
import bgCloud from "../images/background/top-cloud.png";
import logo from "../images/logo.svg";

const Join = () => {
    const navigate = useNavigate();
    // const baseURL = process.env.REACT_APP_API_KEY;
    // console.log(process.env.REACT_APP_API_KEY);
    axios({
        method: "GET",
        url: "https://picboy.net/post/random-topic"
    }).then(function (res) {
        console.log(res);
    });
    return (
        <>
            <div
                className="join-wrap"
                style={{ backgroundImage: `url(${bgCloud})` }}
            >
                <div
                    className="logo"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <img src={logo} />
                </div>
                <div className="join-title">JOIN</div>
                <div className="join-form">
                    <div className="input-box">
                        <div className="input-wrap">
                            <div className="input-title">아이디</div>
                            <input
                                type="text"
                                className="input-text"
                                placeholder="아이디를 입력하세요"
                            />
                        </div>
                        <div className="confirm-button">중복확인</div>
                    </div>
                    <div className="input-box">
                        <div className="input-wrap">
                            <div className="input-title">비밀번호</div>
                            <input
                                type="password"
                                className="input-text"
                                placeholder="비밀번호를 입력하세요"
                            />
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-wrap">
                            <div className="input-title">비밀번호 확인</div>
                            <input
                                type="password"
                                className="input-text"
                                placeholder="비밀번호를 다시 입력하세요"
                            />
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-wrap">
                            <div className="input-title">전화번호</div>
                            <input
                                type="number"
                                className="input-text number"
                                placeholder="전화번호를 입력하세요"
                            />
                        </div>
                    </div>
                    <div className="input-box">
                        <div className="input-wrap">
                            <div className="input-title">닉네임</div>
                            <input
                                type="text"
                                className="input-text"
                                placeholder="닉네임을 입력하세요 (2~8자 제한)"
                            />
                        </div>
                        <div className="confirm-button">중복확인</div>
                    </div>
                    <div className="submit">회원가입</div>
                </div>
            </div>
        </>
    );
};

export default Join;
