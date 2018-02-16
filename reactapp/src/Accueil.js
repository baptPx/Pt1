import React, { Component } from 'react';
import classNames from 'classnames';
import TrackVisibility from 'react-on-screen';;


class PresentationBDE extends Component {

  constructor(props) {
    super(props);
    this.state={isLoadedIn: false, style: "far", isLoadedOut: false, canLoad: true};
  }
  changeStyle = () => {
    this.setState({style: "descriptionP"});
    clearInterval(this.state.intId);
  }
  componentDidMount() {
      if(this.props.nb != 0)
      {
        this.props.tab[nb-1]
      }
      else this.props.setTab(nb, true);
  }
  render() {
    if(this.state.canLoad)
    {
      if(this.props.isVisible && !this.state.isLoadedIn) {
        var intervalId = setInterval(this.changeStyle, 800);
        this.setState({isLoadedIn: true, isLoadedOut: false, intId: intervalId});
      }

      if(!this.props.isVisible && !this.state.isLoadedOut)  {
        this.setState({ isLoadedOut: true, style: "far", isLoadedIn: false});
      }

      return(
        <div className="marginl15">
          {this.props.isVisible &&
            <div>
              <h2 className="titreA ">Présentation </h2>
                <div className={this.state.style}>
                  <p > INSERER LE TEXTE DE LA PRESENTATION </p>
                </div>
            </div>
          }
          {!this.props.isVisible &&
            <div>
              <h2 className="far ">Présentation </h2>
                <div className="far">
                <p className="far"> INSERER LE TEXTE DE LA PRESENTATION </p>
                </div>
                </div>
          }
      </div>);
    }
    else return(<div></div>)
    }
}

class PartenairesSpar extends Component {

  constructor(props) {
    super(props);
    this.state={isLoadedIn: false, style: "far", isLoadedOut: false};
  }
  changeStyle = () => {
    this.setState({style: "descriptionP"});
    clearInterval(this.state.intId);
  }
  render() {
    if(this.props.isVisible && !this.state.isLoadedIn) {
      var intervalId = setInterval(this.changeStyle, 800);
      this.setState({isLoadedIn: true, isLoadedOut: false, intId: intervalId});
      this.changeStyle = this.changeStyle.bind(this);
    }

    if(!this.props.isVisible && !this.state.isLoadedOut)  {
      this.setState({ isLoadedOut: true, style: "far", isLoadedIn: false});
    }
      return(
        <div className="marginl15 margint10">
          {this.props.isVisible &&
            <div>
              <h2 className="titreA ">Nos Partenaires </h2>
              <div className={this.state.style}>
                <img src="img/macdol.png"/>
              </div>
            </div>
          }
          {!this.props.isVisible &&
            <div>
              <h2 className="far ">Présentation </h2>
                <div className="far">
                <p className="far"> INSERER LE TEXTE DE LA PRESENTATION </p>
                </div>
                </div>
          }
      </div>);
    }
}

class Accueil extends Component {


constructor(props ) {
  super(props);
  this.state = {isShow: false, tabLoaded: []};
  setInterval(this.verifV, 100);
  this.setLoaded = this.setLoaded.bind(this);
}
setLoaded(nb, isL) {
  this.setState({tabLoaded[nb]: isL})
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
        <p>tt</p>
      </div>
      <TrackVisibility>
        <PresentationBDE setLoaded={this.setLoaded} nb=0 tab={this.state.tabLoaded}/>
      </TrackVisibility>

      <TrackVisibility>
        <PresentationBDE  setLoaded={this.setLoaded} nb=1 tab={this.state.tabLoaded}/>
      </TrackVisibility>

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
        <br />
        <br />
        <br />
      </div>
    );
}
}

export default Accueil;
