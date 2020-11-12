import React from 'react'

export default function hero() {

    return (
        <div className="container">
            <a href="/" className="logo">
                <img src={"https://www.tissotwatches.com/media//landing/images/ttouch/svg/logo-t-touch.svg"} alt="logo" />
            </a>
            <div className="mainimg">
                <img src={"/assets/img/main-screenshot.png"} alt="app preview" />
            </div>
            <div className="bgpath1"></div>
            <div className="bgpath2"></div>
            <style jsx>{`
                .container{
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    align-items: center;
                    position: relative;
                    background: #010101;
                    // background: #ffff11;
                }
                img{
                    object-fit: contain;
                    height: 100%;
                    width: 100%;
                }
                .logo{
                    margin: 20px auto 0 auto;
                    display: block;
                    width: 240px;
                }
                .mainimg{
                    width: 900px;
                    max-width: 90vw;
                    z-index: 2;
                    position: relative;
                    margin: 60px auto 0 auto;
                }
            `}</style>
        </div>
    )
}
