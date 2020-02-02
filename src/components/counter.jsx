import React, { Component } from "react";
import bg from "../images/bg.png";
import "bootstrap/dist/css/bootstrap.css";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["tags1", "tags2", "tags3"]
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "900px",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover"
        }}
      >
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button style={this.styles} className="btn btn-secondary btn-sm">
          Increment
        </button>
        <ul style={{ color: "#fff" }}>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
