import React from 'react'

export default function hero() {

    return (
        <div className="Hero">
            <h1 className="container">
                Lorem <span className="foc">ipsum</span> dolor sit amet, consectetur adipiscing elit.
            </h1>
            <div className="mainimg">
                <img src={"/assets/img/main-screenshot.png"} alt="app preview" />
            </div>
            <div className="bgpath1"></div>
            <div className="bgpath2"></div>
            <style jsx>{`
                .Hero{
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    align-items: center;
                    position: relative;    
                    padding: 160px 0 80px 0;
                    background: linear-gradient(0deg, rgba(1,1,1,1) 0%, rgba(32,32,32,1) 100%);
                }
                h1{
                    font-size: calc( 1vw + 40px );
                }
                .foc{
                    color: var(--brand);
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
                    max-width: 1200px;
                    width: 90vw;
                    z-index: 2;
                    position: relative;
                    margin: 60px auto 0 auto;
                }
            `}</style>
        </div>
    )
}
