import React, { Component } from 'react';
import './App.css';

import Calendar from './Components/Calendar/';


const style = {
  position: "relative",
  margin: "50px auto"
}

class App extends Component {
  onDayClick = (e, day) => {
    // Enregistrer la date de la réservation dans local storage
    localStorage.setItem('Reservation', day);
    alert("Votre Réservation est le --> "+localStorage.getItem(localStorage.key('Reservation')));
  
  
  }
  
  render() {
    return (
      <div className="App">
        <h1> Ahmed SABRY Calendrier</h1>
        <Calendar style={style} width="80%" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>     
      </div>
    );
  }
}

export default App;
