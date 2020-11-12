import React, { useState, useEffect } from 'react'
import Sticky from 'react-sticky-el';

export default function VideoText() {
    const [scale, setScale] = useState(1);
    const height = 5000;
    function handleScroll() {
        // setScale(scale + 1)
        console.log("hello:", scale)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });
    return (
        <div className="container" id="videotext">
                <Sticky boundaryElement="#videotext" hideOnBoundaryHit={false}>
                                <div className="theshow">
                                    <img style={{ transform: 'scale(' + scale + ')' }} id="canvas" src="https://i.ibb.co/r5Yz5ws/Layer-1.png" />
                                    <video className="video" autoPlay playsInline muted loop preload={1} poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
                                        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
                                        <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
                                    </video>
                                </div>
                </Sticky>
            <style jsx>{`
                .container{
                    height: ${height}px;
                    position: relative;   
                    background: #010101;
                }
                .theshow{
                    position: relative;   
                    overflow: hidden;
                }
                video{
                    width: 100%;
                }
                #canvas{
                    width: 100%;
                    height: 100%;
                    position: absolute;
                }
            `}</style>
        </div>
    )
}
