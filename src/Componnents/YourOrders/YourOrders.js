import React from 'react';
import './YourOrders.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const YourOrders = () => {
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
                <p className="Nav__Title">Your orders</p>
            </nav>
            {/* Navigation End */}

            <main className="container">
                <section className="row">
                    {/* Body Heading */}
                    <div className="col-md-6">
                        <p className="Heading">Your Orders</p>
                    </div>
                    {/* Search input */}
                    <div style={{ height: "31px", border: "1px solid grey" }} className="col-md-4 d-flex rounded Shadow mb-2">
                        <FontAwesomeIcon className="mt-2 text-secondary" icon={faSearch} />
                        <input type="text" className="ms-2" name="search" id="search" placeholder="Search all orders" />
                    </div>
                    {/* Search button */}
                    <div className="col-md-2">
                        <button id="Search__Button">Search Orders</button>
                    </div>

                    {/* Body Navigations start */}
                    <section className="col-md-12 border-bottom mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row text-center">
                                    <div style={{ borderBottom: "2.5px solid #c45500", fontSize: "14px", fontWeight: "bold" }} className="col-md-2 pb-2">Orders</div>
                                    <div className="col-md-3 Text">Buy Again</div>
                                    <div className="col-md-3 Text">Digital Orders</div>
                                    <div className="col-md-4 Text">Cancelled Orders</div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Body Navigations End */}
                    {/* Body Description */}
                    <section className="col-md-12 d-flex mt-3">
                        {/* Text */}
                        <p> <b>0 order</b> placed</p> &nbsp; &nbsp;
                        {/* Options */}
                        <select name="" id="Record" className="Shadow">
                            <option value="">past 3 months</option>
                            <option value="">last 30 days</option>
                            <option value="">2021</option>
                        </select>
                    </section>
                    {/* Description text */}
                    <section className="col-md-12 text-center mt-5">
                        <p>You have not placed any orders in last 30 days. <span className="Text">View orders in  2021 </span></p>
                    </section>
                </section>
            </main>
        </section>
    );
};

export default YourOrders;