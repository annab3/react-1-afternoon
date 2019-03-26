import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    add() {
        const {number1, number2, sum} = this.state;
        let newSum =  Number(number1) + Number(number2);

        this.setState({number1: 0, number2: 0, sum: newSum})
    }
    
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" value={this.state.number1} onChange={e => this.setState({number1: e.target.value})} />
                <input className="inputLine" value={this.state.number2} onChange={e => this.setState({number2: e.target.value})}/>
                <button className="confirmationButton" onClick={() => this.add()}>Add</button>
                <span className="resultsBox" >{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;