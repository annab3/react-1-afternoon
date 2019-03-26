import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"],
            userInput: '',
            filteredArray: []
        }
    }
    filter() {
        const {unFilteredArray, userInput, filteredArray} = this.state;
        let newFiltered = [];
        unFilteredArray.forEach(value => {
            if(value.includes(userInput)) {
                newFiltered.push(value)
            }
        })

        this.setState({filteredArray: newFiltered, userInput: ''})
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names:{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" value={this.state.userInput} onChange={e => this.setState({userInput: e.target.value})} />
                <button className="confirmationButton" onClick={() => this.filter()}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Names:{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString;