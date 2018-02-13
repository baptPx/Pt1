import React, { Component } from 'react';


class Entete extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header row">
          <div className="col-lg-2">
            <span> logo </span>
          </div>
          <div className ="col-offset-lg-3 col-lg-1">
            <span>Accueil</span>
          </div>
          <div className ="col-lg-1">
            <span>Présentation</span>
          </div>
          <div className =" col-lg-1">
            <span>Partenaires</span>
          </div>
        </header>

      </div>
    );
  }
}

export default Entete;
