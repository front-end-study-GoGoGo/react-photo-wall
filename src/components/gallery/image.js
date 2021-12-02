import React, { Component, useState } from 'react'

class Image extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     styleObj: {}
  //   };
  // }

  handleClick(e) {
    if (this.props.arrange.isCenter) {
      console.log(111);
      this.props.reverse()
    } else {
      console.log(222)
      this.props.center()
    }

    e.preventDefault()
  }

  render() {
    let styleObj = {}
    if (this.props.arrange.pos) {
      console.log('this.props.arrange.pos:', this.props.arrange.pos);
      styleObj = this.props.arrange.pos;
    }
    // console.log('this.props.arrange.rotate:', this.props.arrange.rotate);
    // if (this.props.arrange.rotate) {
    //   styleObj["transform"] = `rotate(${this.props.arrange.rotate}deg)`
    // }
    // if (this.props.arrange.isCenter) {
    //   styleObj['zIndex'] = 11;
    // }
    let figureClassName = "img-figure"
    figureClassName += this.props.arrange.isReverse ? ' is-reverse' : ''
    // this.setState({ styleObj: 1 });

    return (
      <figure
        className={figureClassName} id={this.props.id}
        style={styleObj}
        onClick={this.handleClick.bind(this)}
      >
        <span>333332</span>
        <div className="front">
          <img src={this.props.data.url} alt={this.props.data.title} />
          <h3 className="img-title">{this.props.data.title}</h3>
        </div>
        <div className="back" onClick={this.handleClick.bind(this)}>
          <p>
            {this.props.data.desc}
          </p>
        </div>
      </figure>
    )
  }
}
export default Image