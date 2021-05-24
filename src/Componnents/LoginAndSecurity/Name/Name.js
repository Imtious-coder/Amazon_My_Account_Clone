import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Name = () => {
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
                    <Link style={{ textDecoration: "none" }} to="/home">
                    <p className="Text mt-1">Login and security</p>
                </Link>
                &nbsp; &nbsp;
                    <FontAwesomeIcon className="mt-2 text-secondary" icon={faAngleRight} />
                &nbsp; &nbsp;
                <p className="Nav__Title">Change your name</p>
            </nav>
            {/* Navigation End */}

            {/* Heading */}
            <p className="Heading">Change your name</p>

            {/* Main body start */}
            <section className="container border">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-2">
                            <p>If you want to change the name associated with your Amazon customer account, you may do so below. Be sure to click the <b> Save Changes </b> button when you are done.</p>
                        </div>
                        <div className="col-md-3 mt-3 mb-3">
                            <p className="Input__Title"><b>New name</b></p>
                            <input type="text" className="Input" name="name" id="name" placeholder="Imtious Islam" />
                        </div>
                        <div className="col-md-12 mb-4">
                            <button className="Button__2">Save changes</button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Main body end */}
        </section>
    );
};

export default Name;