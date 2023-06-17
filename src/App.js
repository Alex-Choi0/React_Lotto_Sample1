import { Component } from "react"
import "./App.css"
import NumberOutputComponent from "./components/numberoutput/numberoutput.component"
import generateNumberFunction from "./utili/generateNumber/generateNumber.utili"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: [-1],
      count: 0,
    }
  }

  componentDidMount() {
    console.log("state componentDidMount : ", this.state)
  }

  updateNumbers = () => {
    console.log("Current Numbers : ", this.state.numbers)
    this.setState(
      { numbers: generateNumberFunction(), count: this.state.count + 1 },
      () => console.log("new random number : ", this.state.numbers)
    )
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.updateNumbers}>Generate Numbers</button>
        <h1>Lotto Program (count : {this.state.count})</h1>
        {this.state.numbers.map((ele, idx) => {
          return <NumberOutputComponent key={ele} number={ele} idx={idx} />
        })}
      </div>
    )
  }
}

export default App
