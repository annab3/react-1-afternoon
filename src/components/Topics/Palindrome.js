import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    reverse(){
        const {userInput, palindrome} = this.state;
        let backward = userInput.split('').reverse().join('');
        if(backward === userInput) {
            this.setState({palindrome: "true"});
        }
        else{
            this.setState({palindrome: "false"});
        }
    }
    
    render() {
        return ( 
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" value={this.state.userInput} onChange={e => this.setState({userInput: e.target.value})}/>
                <button className="confirmationButton" onClick={() => this.reverse()} >Check</button>
                <span className="resultsBox" >Palindrome:{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;