import "./styles.css";
import React, { Component } from "react";
export default class App extends Component {
  state = {
    grid: ["", "", "", "", "", "", "", "", ""],
    isX: true,
    victorymessage: null,
    count: 0
  };
  handleClick = (val) => {
    let g = [...this.state.grid];
    let i = this.state.grid[val];
    if (i != "") {
      return;
    }
    i = this.state.isX ? "X" : "O";
    g[val] = i;
    const { grid } = this.state;
    this.setState(
      {
        grid: g,
        isX: !this.state.isX,
        count: this.state.count + 1
      },
      () => {
        const { grid } = this.state;
        if (
          (grid[0] == grid[1] &&
            grid[1] == grid[2] &&
            (grid[0] == "X" || grid[0] == "O")) ||
          (grid[3] == grid[4] &&
            grid[4] == grid[5] &&
            (grid[3] == "X" || grid[3] == "O")) ||
          (grid[6] == grid[7] &&
            grid[7] == grid[8] &&
            (grid[7] == "X" || grid[7] == "O")) ||
          (grid[0] == grid[3] &&
            grid[3] == grid[6] &&
            (grid[3] == "X" || grid[3] == "O")) ||
          (grid[1] == grid[4] &&
            grid[4] == grid[7] &&
            (grid[4] == "X" || grid[4] == "O")) ||
          (grid[2] == grid[5] &&
            grid[5] == grid[8] &&
            (grid[5] == "X" || grid[5] == "O")) ||
          (grid[0] == grid[4] &&
            grid[4] == grid[8] &&
            (grid[8] == "X" || grid[8] == "O")) ||
          (grid[2] == grid[4] &&
            grid[4] == grid[6] &&
            (grid[6] == "X" || grid[6] == "O"))
        ) {
          let mess = !this.state.isX ? "X" : "O";
          mess = mess + "Won";
          this.setState({
            victorymessage: mess,
            grid: ["", "", "", "", "", "", "", "", ""],
            isX: true,
            count: 0
          });
        } else if (this.state.count == 9) {
          this.setState({
            victorymessage: "Draw",
            grid: ["", "", "", "", "", "", "", "", ""],
            isX: true,
            count: 0
          });
        }
      }
    );
  };

  render() {
    const { victorymessage } = this.state;
    return (
      <section>
        <div className="container">
          <div className="box" onClick={() => this.handleClick(0)}>
            {this.state.grid[0]}
          </div>
          <div onClick={() => this.handleClick(1)}>{this.state.grid[1]}</div>
          <div onClick={() => this.handleClick(2)}>{this.state.grid[2]}</div>
          <div onClick={() => this.handleClick(3)} id="4">
            {this.state.grid[3]}
          </div>
          <div onClick={() => this.handleClick(4)} id="5">
            {this.state.grid[4]}
          </div>
          <div onClick={() => this.handleClick(5)} id="6">
            {this.state.grid[5]}
          </div>
          <div onClick={() => this.handleClick(6)} id="7">
            {this.state.grid[6]}
          </div>
          <div onClick={() => this.handleClick(7)} id="8">
            {this.state.grid[7]}
          </div>
          <div onClick={() => this.handleClick(8)} id="9">
            {this.state.grid[8]}
          </div>
        </div>

        <div className="vic">{victorymessage}</div>
      </section>
    );
  }
}
