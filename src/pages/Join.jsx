import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../scss/pages/join.scss";

//images
import bgCloud from "../images/background/top-cloud.png";
import logo from "../images/logo.svg";

const Join = () => {
    const navigate = useNavigate();

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
                                placeholder="아이디를 입력해 주세요"
                            />
                        </div>
                    </div>
                    <div className="validation-warning">
                        이미 사용중인 아이디입니다.
                    </div>
                    <div className="input-box">
                        <div className="input-wrap">
                            <div className="input-title">비밀번호</div>
                            <input
                                type="password"
                                className="input-text"
                                placeholder="비밀번호를 입력해 주세요"
                            />
                        </div>
                    </div>
                    <div className="validation-warning">
                        8~16자 사이 영문과 숫자, 특수문자를 사용하세요.
                    </div>
                    <div className="input-box">
                        <div className="input-wrap">
                            <div className="input-title">비밀번호 확인</div>
                            <input
                                type="password"
                                className="input-text"
                                placeholder="비밀번호를 다시 입력해 주세요"
                            />
                        </div>
                    </div>
                    <div className="validation-warning">
                        비밀번호가 일치하지 않습니다.
                    </div>
                    <div className="input-box">
                        <div className="input-wrap">
                            <div className="input-title">전화번호</div>
                            <input
                                type="text"
                                className="input-text"
                                placeholder="전화번호를 입력해 주세요"
                            />
                        </div>
                        <div className="confirm-button">인증번호받기</div>
                    </div>
                    <div className="validation-warning">
                        형식에 맞지 않는 번호입니다.
                    </div>
                    <div className="input-box">
                        <div className="input-wrap">
                            <div className="input-title">전화번호 인증</div>
                            <input
                                type="text"
                                className="input-text"
                                placeholder="인증번호를 입력해 주세요"
                            />
                        </div>
                    </div>
                    <div className="validation-warning">
                        인증번호가 일치하지 않습니다.
                    </div>
                    <div className="input-box">
                        <div className="input-wrap">
                            <div className="input-title">닉네임</div>
                            <input
                                type="text"
                                className="input-text"
                                placeholder="닉네임을 입력해 주세요 (2~8자 제한)"
                            />
                        </div>
                    </div>
                    <div className="validation-warning">
                        이미 사용 중인 아이디입니다.
                    </div>
                    <div className="submit">회원가입</div>
                </div>
            </div>
        </>
    );
};

export default Join;
