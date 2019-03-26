import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    evnOrOdd(){
        const {evenArray, oddArray, userInput} = this.state;
        let inputArray = userInput.split(",");
        let newEvens = evenArray.slice();
        let newOdds = oddArray.slice();
        for(let i = 0; i < inputArray.length; i++) {
            if(inputArray[i] % 2 === 0) {
                if(newEvens.length >= 1) {
                    newEvens.push(",")
                }
                newEvens.push(inputArray[i]);
                
            }
            else if(inputArray[i] % 2 === 1) {
                if(newOdds.length >= 1) {
                    newOdds.push(",")
                }
                newOdds.push(inputArray[i]);

            }
        }
        this.setState({evenArray: newEvens, oddArray: newOdds, userInput: ''})
    }

    
    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' value={this.state.userInput} onChange={event => {this.setState({userInput: event.target.value})}} />
                <button className='confirmationButton' onClick={event => this.evnOrOdd()} >Split</button>
                <span className='resultsBox'>Evens:[{this.state.evenArray}]</span>
                <span className='resultsBox'>Odds:[{this.state.oddArray}]</span>
            </div>
        )
    }
}

export default EvenAndOdd;