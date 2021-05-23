import React from 'react';
import './Home.css';
import Image1 from './Your_Orders.png';

const Home = () => {
    return (
        <div className="container">
            {/* Title start */}
            <nav className="container">
                <p id="Title">Your Account</p>
            </nav>
            {/* Title End */}

            {/* Main Part Start */}
            <main className="container">
                <div className="row">
                    {/* Card1 start */}
                    <div className="col-md-4 border rounded">
                        <div className="container mt-2 mb-2">
                            <div className="row d-flex align-items-center">
                                {/* Card1 Image */}
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img className="Card__Images" src={Image1} alt="" />
                                </div>
                                {/* Card1 info */}
                                <div className="col-md-8 mt-2">
                                    <p className="Card__Title">Your Orders</p>
                                    <p>Track, return, or buy things again</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card1 End */}
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4"></div>
                </div>
            </main>
            {/* Main part End */}
        </div>
    );
};

export default Home;