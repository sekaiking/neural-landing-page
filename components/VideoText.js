import React, { useState, useEffect } from 'react'
import Sticky from 'react-sticky-el';

export default function VideoText() {
    const [scale, setScale] = useState(1);
    const height = 5000;
    //5000-vh 1000%
    //vh 100%
    function handleScroll() {
        console.log("hello:", scale)
        let videoTextOff = document.getElementById("videotext").offsetTop;
        let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        setScale(scrollTop-videoTextOff)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    return (
        <div className="videotext" id="videotext">
                <Sticky boundaryElement="#videotext" hideOnBoundaryHit={false}>
                                <div className="theshow">
                                    <div id="canvas" style={{backgroundSize: (scale>100?(scale>1000?scale*10:scale):100)+"%"}}></div>
                                    <video className="video" autoPlay playsInline muted loop preload={1} poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
                                        <source src="/assets/videos/videotext.mp4" />
                                    </video>
                                </div>
                </Sticky>
            <style jsx>{`
                .videotext{
                    height: ${height}px;
                    position: relative;   
                }
                .theshow{
                    position: relative;   
                    height: 100vh;
                    width: auto;
                }
                video{
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                }
                #canvas{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    z-index: 1;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    background-image: url(/assets/img/textoverlay.png);
                }
                @media only screen and (max-width: 600px) {
                    #canvas {
                    //   background-position: top;
                    }
                }
            `}</style>
        </div>
    )
}
