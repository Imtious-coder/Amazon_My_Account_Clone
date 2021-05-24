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
        </section>
    );
};

export default Name;