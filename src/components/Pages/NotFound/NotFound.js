import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <h1>404 Oops...</h1>
            <h2>Page not found!</h2>
            <span>Go back <strong><Link to={'/'}>Home</Link></strong>.</span>
        </div>
    );
}

export default NotFound;
