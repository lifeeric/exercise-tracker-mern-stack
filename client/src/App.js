import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ExercisesList from './components/ExercisesList/ExerciseList';
import CreateExerciseList from './components/CreateExerciseList/CreateExerciseList';
import CreateUser from './components/CreateUser/CreateUser';
import Header from './components/Header/header'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={ExercisesList} />
      <Route path="/create" component={CreateExerciseList} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
