import React from 'react';
import './YourOrders.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const YourOrders = () => {
    return (
        <section className="container">
            {/* Navigation start */}
            <nav className="container d-flex mt-2">
                <p className="Text mt-1">Your Account</p> &nbsp; &#8594; &nbsp;
                <p id="Nav__Title">Your orders</p>
            </nav>
            {/* Navigation End */}

            <main className="container">
                <section className="row">
                    {/* Body Heading Start */}
                    <div className="col-md-6">
                        <p id="Heading">Your Orders</p>
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
                    {/* Body Navigations */}
                    <div className="col-md-12 border-bottom mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row text-center">
                                    <div style={{borderBottom:"2.5px solid #c45500", fontSize:"14px", fontWeight:"bold"}} className="col-md-2 pb-2">Orders</div>
                                    <div className="col-md-3 Text">Buy Again</div>
                                    <div className="col-md-3 Text">Digital Orders</div>
                                    <div className="col-md-4 Text">Cancelled Orders</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
};

export default YourOrders;