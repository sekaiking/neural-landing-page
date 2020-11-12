import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="container">
                <a href="/" className="logo">
                    <img className="logo" src={"/assets/img/logo-white.svg"} alt="logo" />
                </a>
                <nav>
                    <a href="/about">
                        About Us
                    </a>
                    <a href="/about">
                        Link 1
                    </a>
                    <a href="/about">
                        Link 2
                    </a>
                    <a className="button" href="/about">
                        Get It Now
                    </a>
                </nav>
            </div>
        <style jsx>{`
            .navbar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                z-index: 10;
                padding: 20px;
            }
            .navbar>.container{
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .logo{
                height: 50px;
            }
            nav{
                display: flex;
            }
            nav>a{
                display: block;
                padding: 8px 22px;
                text-decoration: none;
                margin: auto 20px; 
                color: #fff;
                font-weight: bold;
                border: 2px solid transparent;
                transition: 100ms ease;
                border-radius: 100px;
            }
            nav>a:hover{
                border-color: var(--brand);
            }
            nav>.button{
                background-color: var(--brand);
                background-image: linear-gradient(to left, #4adb9b, #46cf92, #41c289, #3db681, #39aa78);
                border-radius: 3px;
                border: 0 !important;
                padding: 10px 22px;
                background-size:1px 200px;  
            }
        `}</style>
        </div>
    )
}
