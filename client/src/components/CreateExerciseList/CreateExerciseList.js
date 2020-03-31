import React, { Component } from 'react';
import Datepicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class extends Component {
    
    state = {
        username: null,
        description: '',
        duration: 0,
        date: new Date(),
        users: [],
    }

    // componentDidUpdate (){
        


    // }

    // when the component injected
    componentDidMount () {
        console.log('updated')


        let uri = String(this.props.location.search)
        uri = uri.substring(1);

        if ( uri.length )
        {
                 axios.get('http://localhost:5000/api/exercises/'+uri)
                .then(res => {
                    this.setState({
                            users: [res.data.username],
                            username:  res.data.username,
                            description: res.data.description,
                            duration: res.data.duration,
                        })
                })
            
        }
        else {
            axios.get('http://localhost:5000/api/users/')
                .then(res => {
                    
                    if( res.data.length > 0 )
                    {
                        this.setState({
                            users: res.data.map(user => user.username),
                            username:  res.data[0].username 
                        })
                    }
                })
        }
    }


    // username handler
    usernameHandler = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    // description handler
    descriptionHandler = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    // duration handler
    durationHandler = (e) => {
        this.setState({
            duration: e.target.value
        });
    }

    // Change Date
    changeDate = (date) => {
        this.setState({
            date: date
        });
    }

    // form submit
    onFormSubmit = (e) => {
        e.preventDefault();

        // exercise 
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        };
        // send data
        const uri = 'http://localhost:5000/api/exercises/';
        const id = this.props.location.search.substring(1);
        
        if( id )
        {
            axios.put(uri + id, exercise)
                .then(res => this.props.history.push('/'));
        }
        else
        {
            axios.post(uri, exercise);
             this.props.history.push('/');
        }
    }

    render() {

        let option = null;

        if ( this.state.users.length > 0 )
        {
            option = this.state.users.map( (usr, id) => (
                        <option key={id+'3'} value={usr}>
                            {usr}
                        </option>
                    ))
        }
        return (
            <div className="container mt-5">
                <h3> Create New Exercise</h3>
                <form onSubmit={this.onFormSubmit}>
                    
                    <div className="form-group">
                        <label htmlFor="sel1">Select list:</label>
                        <select
                            required
                            value={this.state.username ? this.state.username : ''}
                            onChange={this.usernameHandler} 
                            className="form-control" 
                            id="sel1">
                            { option }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input value={this.state.description} required onChange={this.descriptionHandler} type="text" className="form-control" placeholder="I was hiking" id="description" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="duration">Duration:</label>
                        <input value={this.state.duration} onChange={this.durationHandler} type="text" className="form-control" placeholder="5" id="email" />
                    </div>

                    <div className="form-group">
                        <label>Date:</label>
                        <Datepicker 
                            selected={this.state.date}
                            onChange={this.changeDate}
                            className="form-control"
                            style={{width: '100%'}}
                        />
                    </div>

                    <br />
                    <input type="submit" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}