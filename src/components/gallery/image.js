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
      styleObj = { ...this.props.arrange.pos };
      // styleObj = this.props.arrange.pos; // 这句会报错，但是上面那个解构语句却不会报错
    }
    if (this.props.arrange.rotate) {
      styleObj["transform"] = `rotate(${this.props.arrange.rotate}deg)`
    }
    if (this.props.arrange.isCenter) {
      styleObj['zIndex'] = 11;
    }
    let figureClassName = "img-figure"
    figureClassName += this.props.arrange.isReverse ? ' is-reverse' : ''
    // this.setState({ styleObj: 1 });

    return (
      <figure
        className={figureClassName} id={this.props.id}
        style={styleObj}
        onClick={this.handleClick.bind(this)}
      >
        {/* <span>333332</span> */}
        <div className="front">
          <img src={this.props.data.url} alt={this.props.data.title} />
          <h3 className="img-title">{this.props.data.title}</h3>
        </div>
        {/* 图片背面的内容 */}
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