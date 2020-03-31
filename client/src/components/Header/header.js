import React from 'react';
import { Link } from 'react-router-dom';

export default () => {

    return (
        <ul className="nav nav-tabs">
            <Link className="navbar-brand" to="/">home</Link>
            <li className="nav-item">
                <Link to="/" className="nav-link" data-toggle="tab" href="#home">Exercise List</Link>
            </li>
            <li className="nav-item">
                <Link to="create" className="nav-link" data-toggle="tab" href="#menu1">Create Exercise</Link>
            </li>
            <li className="nav-item">
                <Link to="user" className="nav-link" data-toggle="tab" href="#menu2">Create User</Link>
            </li>
        </ul>
    );
}