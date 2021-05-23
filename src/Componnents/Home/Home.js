import React from 'react';
import './Home.css';
import Image1 from './Your_Orders.png';
import Image2 from './Login_Security.png';
import Image3 from './Prime.png';
import Image4 from './GiftCard.png';
import Image5 from './payment.png';
import Image6 from './Your_Profile.png';
import Image7 from './digital_devices.png';
import Image8 from './Messages.jpg';
import Image9 from './archived_orders.png';
import Image10 from './Lists.png';

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
                    <div className="col-md-4 mb-4">
                        <div className="container pt-3 pb-3 border rounded">
                            <div className="row d-flex align-items-center">
                                {/* Card1 Image */}
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img className="Card__Images" src={Image1} alt="" />
                                </div>
                                {/* Card1 info */}
                                <div className="col-md-8 mt-2">
                                    <p className="Card__Title">Your Orders</p>
                                    <p className="Card__Description">Track, return, or buy things again</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card1 End */}

                    {/* Card2 start */}
                    <div className="col-md-4 mb-4">
                        <div className="container pt-3 pb-3 border rounded">
                            <div className="row d-flex align-items-center">
                                {/* Card1 Image */}
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img className="Card__Images" src={Image2} alt="" />
                                </div>
                                {/* Card1 info */}
                                <div className="col-md-8 mt-2">
                                    <p className="Card__Title">Login and security</p>
                                    <p className="Card__Description">Edit login, name, and mobile number</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card2 End */}

                    {/* Card3 start */}
                    <div className="col-md-4 mb-4">
                        <div className="container pt-3 pb-3 border rounded">
                            <div className="row d-flex align-items-center">
                                {/* Card1 Image */}
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img className="Card__Images" src={Image3} alt="" />
                                </div>
                                {/* Card1 info */}
                                <div className="col-md-8 mt-2">
                                    <p className="Card__Title">Prime</p>
                                    <p className="Card__Description">View benefits and payment settings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card3 End */}

                    {/* Card4 start */}
                    <div className="col-md-4 mb-4">
                        <div className="container pt-3 pb-3 border rounded">
                            <div className="row d-flex align-items-center">
                                {/* Card1 Image */}
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img className="Card__Images" src={Image4} alt="" />
                                </div>
                                {/* Card1 info */}
                                <div className="col-md-8 mt-2">
                                    <p className="Card__Title">Gift cards</p>
                                    <p className="Card__Description">View balance, redeem, or reload cards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card4 End */}


                    {/* Card5 start */}
                    <div className="col-md-4 mb-4">
                        <div className="container pt-3 pb-1 border rounded">
                            <div className="row d-flex align-items-center">
                                {/* Card1 Image */}
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img className="Card__Images" src={Image5} alt="" />
                                </div>
                                {/* Card1 info */}
                                <div className="col-md-8">
                                    <p className="Card__Title">Your Payments</p>
                                    <p className="Card__Description">Manage payment methods and settings, view all transactions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card5 End */}


                    {/* Card6 start */}
                    <div className="col-md-4 mb-4">
                        <div className="container pt-2 pb-1 border rounded">
                            <div className="row d-flex align-items-center">
                                {/* Card1 Image */}
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img className="Card__Images" src={Image6} alt="" />
                                </div>
                                {/* Card1 info */}
                                <div className="col-md-8 mt-2">
                                    <p className="Card__Title">Your Profiles</p>
                                    <p className="Card__Description">Manage, add, or remove user profiles for personalized experiences</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card6 End */}


                    {/* Card7 start */}
                    <div className="col-md-4 mb-4">
                        <div className="container pt-2 pb-2 border rounded">
                            <div className="row d-flex align-items-center">
                                {/* Card1 Image */}
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img className="Card__Images" src={Image7} alt="" />
                                </div>
                                {/* Card1 info */}
                                <div className="col-md-8 mt-2">
                                    <p className="Card__Title">Your Device and Contents</p>
                                    <p className="Card__Description">Manage your Amazon devices and digital content</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card7 End */}


                    {/* Card8 start */}
                    <div className="col-md-4 mb-4">
                        <div className="container pt-2 pb-2 border rounded">
                            <div className="row d-flex align-items-center">
                                {/* Card1 Image */}
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img className="Card__Images" src={Image8} alt="" />
                                </div>
                                {/* Card1 info */}
                                <div className="col-md-8 mt-2">
                                    <p className="Card__Title">Your Device and Contents</p>
                                    <p className="Card__Description">Manage your Amazon devices and digital content</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card4 End */}


                    {/* Card4 start */}
                    <div className="col-md-4 mb-4">
                        <div className="container pt-2 pb-2 border rounded">
                            <div className="row d-flex align-items-center">
                                {/* Card1 Image */}
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img className="Card__Images" src={Image4} alt="" />
                                </div>
                                {/* Card1 info */}
                                <div className="col-md-8 mt-2">
                                    <p className="Card__Title">Gift cards</p>
                                    <p className="Card__Description">View balance, redeem, or reload cards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card4 End */}


                    {/* Card4 start */}
                    <div className="col-md-4 mb-4">
                        <div className="container pt-2 pb-2 border rounded">
                            <div className="row d-flex align-items-center">
                                {/* Card1 Image */}
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img className="Card__Images" src={Image4} alt="" />
                                </div>
                                {/* Card1 info */}
                                <div className="col-md-8 mt-2">
                                    <p className="Card__Title">Gift cards</p>
                                    <p className="Card__Description">View balance, redeem, or reload cards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card4 End */}

                </div>
            </main>
            {/* Main part End */}
        </div>
    );
};

export default Home;