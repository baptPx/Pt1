import React, { Component } from 'react';
import rafSchedule from 'raf-schd';

const styles = {
    transition: 'all 10s ease-out'
}
class Element extends Component {

  // componentDidMount() {
  //    var v = new TimelineMax()
  // .staggerFrom(this.title, 1, {opacity: 0, scale: .3}, .12)
//
  // }
  handleScroll(e) {
  // When we receive a scroll event, schedule an update.
  // If we receive many updates within a frame, we'll only publish the latest value.
  this.scheduleUpdate({ x: e.clientX, y: e.clientY });
}

componentWillUnmount() {
  // Cancel any pending updates since we're unmounting.
  this.scheduleUpdate.cancel();
}
  constructor(props) {
    super(props)
    this.state = {
      opacity: 1,
      scale: 1,
      x: 0
    }
    setInterval(this.tryVisibility, 1000);
    this.handleScroll = this.handleScroll.bind(this);

    // Create a new function to schedule updates.
    this.scheduleUpdate = rafSchedule(
      point => this.props.onScroll(point)
    );
  }
  onScale = () => {
    this.setState({scale : 2})
  }
  onTranslateX = () =>  {
    this.setState({x : 1.5})

  }
  tryVisibility = () =>
  {
    console.log("visible : " + this.props.isVisible);
    setInterval(this.tryVisibility, 1000);

  }

  render() {
    return (
      <div onScroll={this.handleScroll}>
        <div className="block" onClick={this.onScale} style = {{...styles, transform: 'scale('+this.state.scale+')'}}> Click me </div>
        <div className="block" onClick={this.onScale} style = {{...styles, transform: 'scale('+this.state.scale+')'}}> Click me </div>
        <div className="block" onClick={this.onScale} style = {{...styles, transform: 'scale('+this.state.scale+')'}}> Click me </div>
        <div className="block" onClick={this.onScale} style = {{...styles, transform: 'scale('+this.state.scale+')'}}> Click me </div>
        <div className="block" onClick={this.onScale} style = {{...styles, transform: 'scale('+this.state.scale+')'}}> Click me </div>
        <div className="block" onClick={this.onScale} style = {{...styles, transform: 'scale('+this.state.scale+')'}}> Click me </div>
        <div className="block" onClick={this.onScale} style = {{...styles, transform: 'scale('+this.state.scale+')'}}> Click me </div>
        <div className="block" onClick={this.onScale} style = {{...styles, transform: 'scale('+this.state.scale+')'}}> Click me </div>
        <div className="block" onClick={this.onScale} style = {{...styles, transform: 'scale('+this.state.scale+')'}}> Click me </div>
        <div className="block" onClick={this.onScale} style = {{...styles, transform: 'scale('+this.state.scale+')'}}> Click me </div>

      </div>
    );
  }
}

export default Element;
