import React, { Component } from 'react';
import classNames from 'classnames';

class Accueil extends Component {


constructor(props ) {
  super(props);
  this.state = {isShow: false };
  setInterval(this.verifV, 100);

}
verifV = () => {
  if(this.props.isVisible)
    console.log("yolooo");
}
render() {
    return (
      <div className="Accueil">
      <div className="test1">
        <img src="img/GImage2.png" width="80%" className="imageM" />
        <h1 className="missionT">Notre <br />Mission</h1>
      </div>
      <div>
        <h2 className="titreA marge5">Présentation </h2>
        <div className="descriptionP">
          <p className="texteA"> INSERER LE TEXTE DE LA PRESENTATION </p>
        </div>
      </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>dezdez</p>
        <br />
        <br />
        <br />
      </div>
    );
}
}

export default Accueil;
