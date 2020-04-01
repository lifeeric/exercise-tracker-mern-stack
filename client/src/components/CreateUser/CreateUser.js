import React, { useState } from 'react';
import axios from '../../axios-instance';


export default (props) => {

    const [ getUser, setUser ] = useState({username:''});

    const userHandler = (e) => {
        setUser({username: e.target.value});
    }

    const FormSubmit = e => {
        e.preventDefault();

        axios.post('users', getUser)
            .then(() => {
                props.history.push('/'); // redirect
            })

    }

    return (
        <div className="container mt-5">
            <h3> Create User</h3>
            <form onSubmit={FormSubmit} className="mt-5">
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input required onChange={userHandler} type="text" className="form-control" placeholder="Enter username" id="email" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}