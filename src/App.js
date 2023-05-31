import React, { Component } from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import EventGenre from "./EventGenre";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // Legend,
} from 'recharts';



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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(', ').shift();
      return { city, number };
    });
    return data;
  };

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
        <div className="charts">
          <ResponsiveContainer height={400} width={400}>
              <ScatterChart
                margin={{
                  top: 20,
                  right: 0,
                  bottom: 20,
                  left: 0,
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='city' type='category' name='city' />
                <YAxis
                  dataKey='number'
                  type='number'
                  name='number of events'
                  allowDecimals={false}
                />

                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                {/* <Legend /> */}
                <Scatter data={this.getData()} fill='#2197F3' />
              </ScatterChart>
          </ResponsiveContainer>
          <EventGenre events={this.state.events} />
        </div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;