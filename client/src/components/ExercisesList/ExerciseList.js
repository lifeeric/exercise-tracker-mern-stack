import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import axios from '../../axios-instance';


export default class ExerciseList extends Component {

    state = {
        exercises: [],
        loading: true
    }

    componentDidMount () {
        axios.get('exercises')
            .then(res => { this.setState({ exercises: res.data, loading: false}) 
            console.log(res.data)
        })
            .catch( err => {
                this.setState({loading: true})
                console.log(err)
            });
    };

    // Delete Exercise
    deleteExcercise = (id) => {
        axios.delete('exercises/'+ id);

        this.setState(prevState => ({
            exercises: prevState.exercises.filter(ex => ex._id !== id)
        }));
    }

    // update
    updateHandler = id => {


        this.props.history.push({
            pathname: '/create',
            search: '?' + id
        })
    }

    render() {

        // Show Single Exercise detail
        let singleExercise = (
            <tr>
                <td> <p>No Data Yet inserted!</p> </td>
            </tr>
        )
        
        if ( this.state.loading ) {
            singleExercise = (
                <tr>
                    <td> <Loader /></td>
                    <td></td>
                </tr>
            );
        }

        if( this.state.exercises.length )
        {
            singleExercise = this.state.exercises.map( exercise => (
                <tr key={exercise._id}>
                   <td> {exercise.username} </td>
                   <td> {exercise.description} </td>
                   <td> {exercise.duration} </td>
                   <td> {exercise.date.substring(0, 10)} </td>
                   <td> <button className="btn btn-link" onClick={() => this.updateHandler(exercise._id)} >Edit</button> | <button className="btn btn-link" onClick={() => this.deleteExcercise(exercise._id)}>Delete</button> </td>
                </tr>
            ));
        }
            

        return (
            <div className="container mt-5">
                <h3> Exercise List </h3>

                <table className="table table-striped mt-4">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        { singleExercise }
                    </tbody>
                </table>
            </div>
        );
    }
}