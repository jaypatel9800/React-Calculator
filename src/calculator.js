import React from "react";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      count: "",
    };
  }

  handleChange(digits) {
    const { count, equal } = this.state;
    this.setState({ count: count + digits });
  }

  erase() {
    this.setState({ count: "" });
  }

  equalTo() {
    const { count } = this.state;
    try {
      this.setState({
        count: parseFloat(eval(count).toFixed(2)),
      });
    } catch (error) {
      this.setState({ count: "Math Error" });
    }
  }

  dot() {
    const { count } = this.state;
    this.setState({ count: count + "." });
  }

  percentage() {
    const { count } = this.state;
    try {
      this.setState({ count: eval(count) / 100 });
    } catch (error) {
      this.setState({ count: "Math Error" });
    }
  }

  render() {
    return (
      <div>
        <input placeholder="0" value={this.state.count} />
        <table>
          <tr>
            <th>
              <button onClick={() => this.erase()}>C</button>
            </th>
            <th>
              <button onClick={() => this.handleChange("(")}>(</button>
            </th>
            <th>
              <button onClick={() => this.handleChange(")")}>)</button>
            </th>
            <th>
              <button onClick={() => this.percentage()}>%</button>
            </th>
          </tr>
          <tr>
            <th>
              <button onClick={() => this.handleChange("7")}>7</button>
            </th>
            <th>
              <button onClick={() => this.handleChange("8")}>8</button>
            </th>
            <th>
              <button onClick={() => this.handleChange("9")}>9</button>
            </th>
            <th>
              <button onClick={() => this.handleChange("/")}>/</button>
            </th>
          </tr>
          <tr>
            <th>
              <button onClick={() => this.handleChange("4")}>4</button>
            </th>
            <th>
              <button onClick={() => this.handleChange("5")}>5</button>
            </th>
            <th>
              <button onClick={() => this.handleChange("6")}>6</button>
            </th>
            <th>
              <button onClick={() => this.handleChange("-")}>-</button>
            </th>
          </tr>
          <tr>
            <th>
              <button onClick={() => this.handleChange("1")}>1</button>
            </th>
            <th>
              <button onClick={() => this.handleChange("2")}>2</button>
            </th>
            <th>
              <button onClick={() => this.handleChange("3")}>3</button>
            </th>
            <th>
              <button onClick={() => this.handleChange("*")}>x</button>
            </th>
          </tr>
          <tr>
            <th>
              <button onClick={() => this.handleChange("0")}>0</button>
            </th>
            <th>
              <button onClick={() => this.dot(".")}>.</button>
            </th>
            <th>
              <button onClick={() => this.equalTo()}>=</button>
            </th>
            <th>
              <button onClick={() => this.handleChange("+")}>+</button>
            </th>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
