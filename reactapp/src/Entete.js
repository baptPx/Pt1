import React, { Component } from 'react';
import  {TweenMax, TweenLineMax} from 'gsap';
import { Parallax } from 'react-scroll-parallax';
import Element from './Element.js';
import Section from './Section.js';

const ParallaxImage = () => (
    <Parallax
        className="custom-class"
        offsetXMax={0}
        offsetXMin={-50}
        slowerScrollRate={false}
        tag="figure"
    >
        <img src="https://www.manimalworld.net/medias/images/leoparduspardalispusaeus.jpg" />
    </Parallax>
);

class Entete extends Component {

constructor(props ) {
  super(props);
  this.state = { text: "souris pas dessus" }
  this.onClick = this.onClick.bind(this);
}

  // componentDidMount() {
  //    var v = new TimelineMax()
  // .staggerFrom(this.title, 1, {opacity: 0, scale: .3}, .12)
//
  // }
  handleChange = () => {
    this.setState({text: "dessus !"});
  }
  handleChange2 = () => {
    this.setState({text: "pas dessus !"});
  }
  onClick(event)  {
    this.setState({text: "clické"});
  }
  render() {
    return (
      <div className="App">
        <header className=" row">
          <div  className="col-lg-2 ">
            <img className="logo" src="img/logo.png" width="100%" />
          </div>
          <div className="col-lg-9 sections ">
            <div className="row">
              <Section className="col-lg-2"> Accueil </Section>
              <Section className="col-lg-2"> Le crew </Section>
              <Section className="col-lg-2"> Activités </Section>
              <Section className="col-lg-2"> Associations </Section>
              <Section className="col-lg-2"> Partenaires </Section>
              <Section className="col-lg-2"> Olympiade </Section>
            </div>
          </div>
          <div className=" col-lg-1">
            <img className="summary" src="img/list.png" width="50%"/>
          </div>

        </header>


      </div>
    );
  }
}

export default Entete;
