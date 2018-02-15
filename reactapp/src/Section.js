import React, { Component } from 'react';
import classNames from 'classnames';

class Section extends Component {


constructor(props ) {
  super(props);
  this.state = {scale: 1, color: "#FFFFFF", anim: {mouseOver: false, mouseOut: true}, className: "", dateIn: 0, dateOut: 0, style: "color:blue"
};
  this.getClass();


}
handleMouseOver = () => {
  this.setState({anim: {mouseOver: false, mouseOut: true}});
  this.getClass();
}
handleMouseOut = () => {
  this.setState({anim: {mouseOver: true, mouseOut: false}});
  this.getClass();
}
getClass = () => {
  console.log(this.props.className);
  let u = this.props.className ;
  Object.keys(this.state.anim).map((e) => {
    console.log(this.state.anim[e]);
    if(this.state.anim[e])
      u+= " " + e ;
  })
  this.setState({isLoaded: true});
  console.log(this.state);
  this.state.className = u;
  return u;
}
handleClick = () => {
  console.log(Date.now());
}
render() {
    return (
      <div  onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} onClick={this.handleClick} width="100%" className={this.props.className}>
        <span className={this.state.className}>{this.props.children}</span>
      </div>
    );
}
}

export default Section;
