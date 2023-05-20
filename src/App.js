import React, { Component } from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";


class App extends Component {
  state = {
    events: [],
    locations: [],
    eventCount: 32,
    selectedCity: "all",
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        const shownEvents = events.slice(this.state.eventCount);
        this.setState({
          events: shownEvents,
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, inputNumber) => {
    console.log("Location", location, "InputNumber", inputNumber);
    console.log(this.state.selectedCity, this.state.eventCount)
    const { eventCount, selectedCity } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === 'all'
            ? events
            : events.filter((event) => event.location === location);
        const eventsToShow = locationEvents.slice(0, eventCount);
        this.setState({
          events: eventsToShow,
          selectedCity: location,
        });
      });
    } else {
      console.log("Else condition")
      getEvents().then((events) => {
        const locationEvents =
          selectedCity === 'all'
            ? events
            : events.filter((event) => event.location === selectedCity);
        console.log("selectedCity", selectedCity);
        const eventsToShow = locationEvents.slice(0, inputNumber);
        this.setState({
          events: eventsToShow,
          eventCount: inputNumber,
        });
      });
    }
  }

  render() {
    return (
      <div className='App'>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          selectedCity={this.state.selectedCity}
          noe={this.state.eventCount}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;