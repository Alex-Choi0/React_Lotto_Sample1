import { Component } from "react"

class NumberOutputComponent extends Component {
  render() {
    const { number, idx } = this.props
    return (
      <div>
        <h2>
          Number Output({idx + 1}) : {number}
        </h2>
      </div>
    )
  }
}

export default NumberOutputComponent
