import React, {Component} from 'react';

export default class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            gameConsoles: [
                'PS4', 'Xbox One', 'Nintendo Switch', 'iOS', 'Nintnedo DS', 'VR'
            ],
            userInput: '',
            filteredConsoles: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    filteredConsoles(userInput) {
        let gameConsoles = this.state.gameConsoles;
        let filteredConsoles = [];
        for (let i=0; i < gameConsoles.length; i++) {
            if (gameConsoles[i].includes(userInput)){
                filteredConsoles.push(gameConsoles[i]);
            }
        }

        this.setState({filteredConsoles: filteredConsoles});
    }



    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleBox">Sayings: { JSON.stringify(this.state.gameConsoles, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filteredConsoles(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterString RB">Filtered Consoles: {JSON.stringify(this.state.filteredConsoles, null, 10)}</span>
            </div>
        )
    }
}