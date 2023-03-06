import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './componets/navbar.component';
import ExerciseList from './componets/exercises-list.component';
import EditExercise from './componets/edit-exercise.component';
import CreateExercise from './componets/create-exercise.componet';
import CreateUser from './componets/create-user.component';


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExerciseList}/>
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;