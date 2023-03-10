import React from "react";

import "../scss/pages/main.scss";

//images
import mainBanner from "../images/main/main-banner.png";
import mainBannerArticle from "../images/main/main-banner-article.svg";
import iconWheel from "../images/main/icon-wheel.svg";
import step1 from "../images/main/howto-step1.gif";
import step2 from "../images/main/howto-step2.gif";
import step3 from "../images/main/howto-step3.gif";

const Main = () => {
    return (
        <>
            <div
                className="main-banner-container"
                style={{ backgroundImage: `url(${mainBanner})` }}
            >
                <div className="main-banner-text">
                    <div className="main-banner-text-top">
                        ENJOY
                        <img
                            className="main-banner-article"
                            src={mainBannerArticle}
                            alt="main banner article"
                        />
                    </div>
                    <div className="main-banner-text-bottom">
                        DRAW TO MAKE GIF
                        <br />
                        WITH PICBOY
                    </div>
                </div>

                <div className="next-container">
                    how to play?
                    <br />
                    <img src={iconWheel} />
                </div>
            </div>
            <div className="howTo-container">
                <div className="howTo-title-text">
                    <div className="howTo-article">HOW TO PLAY?</div>
                    <div className="howTo-title">게임 이용 방법</div>
                </div>
                <div className="step-container">
                    <img className="step-image" src={step1} />
                    <div className="step-text-container">
                        <div className="step-text-number">#1</div>
                        <div className="step-text-title">그리기!</div>
                        <div className="step-text-explanation">
                            옵션을 선택하고 원하는 그림을 그려보세요
                            <br />
                            내가 만든 그림으로 gif를 만들 수 있어요
                        </div>
                    </div>
                </div>
                <div className="step-container">
                    <div className="step-text-container">
                        <div className="step-text-number">#2</div>
                        <div className="step-text-title">gif가 만들어진다</div>
                        <div className="step-text-explanation">
                            선택한 프레임 개수에 도달하면 자동으로 gif가
                            만들어진다!
                            <br />
                            complete 페이지에서 확인하자
                        </div>
                    </div>
                    <img className="step-image" src={step2} />
                </div>
                <div className="step-container">
                    <img className="step-image" src={step3} />
                    <div className="step-text-container">
                        <div className="step-text-number">#3</div>
                        <div className="step-text-title">소통해라</div>
                        <div className="step-text-explanation">
                            완성된 gif는 친구들과 소통 가능하다
                            <br />
                            좋아요와 댓글로 반응하자
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
