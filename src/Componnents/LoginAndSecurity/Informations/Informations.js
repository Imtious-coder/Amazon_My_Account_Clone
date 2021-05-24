import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Informations = () => {
    return (
        <section className="container">
            {/* Navigation start */}
            <nav className="container d-flex mt-2">
                <Link style={{ textDecoration: "none" }} to="/home">
                    <p className="Text mt-1">Your Account</p>
                </Link>
                    &nbsp; &nbsp;
                    <FontAwesomeIcon className="mt-2 text-secondary" icon={faAngleRight} />
                    &nbsp; &nbsp;
                <p className="Nav__Title">Login and security</p>
            </nav>
            {/* Navigation End */}
            {/* Heading */}
            <p className="Heading container">Login and Security</p>

            {/* Main body */}
            <section className="container">
                <div className="row">
                    {/* Name card start*/}
                    <div className="col-md-6 mb-4">
                        <div className="container border">
                            <div className="row mt-3 ms-1 mb-1">
                                {/* Name */}
                                <div className="col-md-4">
                                    <p className="Small"><b>Name:</b></p>
                                    <p className="Small">Imtious Islam</p>
                                </div>
                                { /* Button */}
                                <div className="col-md-2 ms-auto">
                                    <Link to="/name">
                                        <button className="Button__1">Edit</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Name card end */}

                    {/* Email card start*/}
                    <div className="col-md-6 mb-4">
                        <div className="container border">
                            <div className="row mt-3 ms-1 mb-1">
                                {/* Name */}
                                <div className="col-md-4">
                                    <p className="Small"><b>Email:</b></p>
                                    <p className="Small">iarafat386@gmail.com</p>
                                </div>
                                { /* Button */}
                                <div className="col-md-2 ms-auto">
                                    <button className="Button__1">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Email card end */}

                    {/* Mobile Phone Number card start*/}
                    <div className="col-md-6 mb-4">
                        <div className="container border">
                            <div className="row mt-3 ms-1 mb-1">
                                {/* Name */}
                                <div className="col-md-4">
                                    <p className="Small"><b>Mobile Phone Number:</b></p>
                                    <p className="Small">+8801635501610</p>
                                </div>
                                { /* Button */}
                                <div className="col-md-2 ms-auto">
                                    <button className="Button__1">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile Phone Number card end */}

                    {/* Password card start*/}
                    <div className="col-md-6">
                        <div className="container border">
                            <div className="row mt-3 ms-1 mb-1">
                                {/* Name */}
                                <div className="col-md-4">
                                    <p className="Small"><b>Password:</b></p>
                                    <p className="Small">********</p>
                                </div>
                                { /* Button */}
                                <div className="col-md-2 ms-auto">
                                    <button className="Button__1">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Password card end */}

                    {/* Two step verification card start*/}
                    <div className="col-md-6">
                        <div className="container border">
                            <div className="row mt-3 ms-1 mb-1">
                                {/* Name */}
                                <div className="col-md-8 mt-1 mb-1">
                                    <p className="Small"><b>Two-Step Verification (2SV) Settings:</b></p>
                                    <p className="Small">Manage your Two Step Verification (2SV) Authenticators</p>
                                </div>
                                { /* Button */}
                                <div className="col-md-2 ms-auto">
                                    <button className="Button__1">Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Two step verification card end */}

                    {/* Done Button */}
                    <div className="col-md-12 mt-4">
                        <button className="Button__2">Done</button>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Informations;