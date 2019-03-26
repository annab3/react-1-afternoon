import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [{
                name: "Jimmy Joe",
                title: "HackOr",
                age: 12
            }, {
                name: "Jeremy Schrader",
                age: 24,
                hairColor: "brown"
            }, {
                name: "Carly Armstrong",
                title: "CEO"
            }],
            userInput: '',
            filteredArray: []
        }
    }
    filter() {
        const {unFilteredArray, userInput, filteredArray} = this.state;
        
        let newFiltered = [];
        for(let i = 0; i < unFilteredArray.length; i++) {
            for(let key in unFilteredArray[i]) {
                if(key === userInput) {
                    newFiltered.push(unFilteredArray[i]);
                }
            }
        }
        this.setState({filteredArray: newFiltered, userInput: ''})
    }
    
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText" >Original:{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" value={this.state.userInput} onChange={e => {this.setState({userInput: e.target.value})}}/>
                <button className="confirmationButton" onClick={() => this.filter()}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered:{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject;