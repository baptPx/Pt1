import React, { Component } from 'react';
import logo from './logo.svg';
import './css/bootstrap.css';
import './App.css';
import Entete from './Entete.js';
import Accueil from './Accueil.js';
import GSAP from 'react-gsap-enhancer'
import TimelineMax from 'gsap';
import { ParallaxProvider } from 'react-scroll-parallax';
import rafSchedule from 'raf-schd';
import TrackVisibility from 'react-on-screen';;

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class App extends Component {

 constructor(props) {
   super(props);
 }

  handleScroll(e) {
    console.log(e);
  }

  render() {
    return (
      <div className=" container-fluid">
      <ParallaxProvider>
        <Entete />
      </ParallaxProvider>
      <TrackVisibility>
           <Accueil />
       </TrackVisibility>

      </div>
    );
  }
}

const GSAPDemo = GSAP()(App)
export default App;
