import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = { noe: 32,
            showError: false // Add a new state property to track error visibility
          }

  componentDidMount() {
    this.setState({ noe: this.props.noe || 32 });
  }

  changeNOE(value) {
    if (value <= 0 || value > 100) { // Check if the value is invalid
      this.setState({ showError: true }); // Show the error alert
    } else {
      this.setState({ noe: value, showError: false }); // Hide the error alert
      this.props.updateEvents(null, value);
    }
  }
  
  render() {
    const { noe, showError } = this.state;
    return (
      <div className="NumberOfEvents">
        <h3>Number of Events:</h3>
        <input
          className="noe-input"
          type="number"
          value={noe}
          onChange={(event) => {
            this.changeNOE(event.target.value);
          }}
        ></input>
        {showError && <ErrorAlert text="Invalid number of events" />} {/* Render the error alert if showError is true */}
      </div>
    );
  }
 

}

export default NumberOfEvents;