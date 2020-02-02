import React, { Component } from 'react';
import swamp from '../images/swamp.png';
import 'bootstrap/dist/css/bootstrap.css';
import './formatting.css';
import Rectangle from 'react-rectangle';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDistance = this.handleDistance.bind(this);
  }
  handleChange(event) {
    this.setState({ selectedVisa: event.target.value });
  }
  handleDistance(event) {
    this.setState({ distance: event.target.value });
  }
  state = {
    latitude: 0,
    longitude: 0,
    showComponent: false,
    Name: '',
    distance: 0,
    visaList: [
      'B1',
      'B2',
      'F1',
      'F2',
      'M1',
      'J1',
      'Q',
      'H1B',
      'H1B1',
      'H2A',
      'H2B',
      'H3',
      'L1',
      'O1',
      'O2',
      'O3',
      'P',
      'TN',
      'TD',
      'E3',
      'I',
      'E1',
      'E2',
      'A1',
      'A2',
      'T',
      'U',
      'C',
      'D',
      'F2A',
      'F2B',
      'IR2',
      'IR5',
      'F3',
      'F4',
      'IR3',
      'IH3',
      'IR4',
      'IH4',
      'K3',
      'IR1',
      'CR1',
      'EB1',
      'EB5',
      'SI',
      'SQ',
      'SB'
    ],
    selectedVisa: ''
  };

  showPosition = position => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  };

  showJobs = () => {
    this.setState({
      showComponent: true
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('error getting position');
    }
  };

  visaList = this.state.visaList.sort();
  visaList = this.state.visaList.unshift('Enter visa');
  render() {
    return (
      <div className="background">
        <img src={swamp} className="swampLogo" />
        <Rectangle className="rect">
          <Rectangle className="invis">
            <h3 className="instructions" style={{ fontSize: 20 }}>
              Please choose your visa and maximum desired job distance.
            </h3>
          </Rectangle>
          <select
            className="visaScroll"
            value={this.state.selectedVisa}
            onChange={this.handleChange}
          >
            {this.state.visaList.map(visa => (
              <option key={visa} value={visa}>
                {visa}
              </option>
            ))}
          </select>
          <input
            className="visaSubmit"
            type="submit"
            value="Submit"
            onClick={this.showJobs}
          />
          <form>
            <label>
              <input
                className="distance"
                type="text"
                name="name"
                placeholder="Enter distance (mi)"
                onChange={this.handleDistance}
              />
            </label>
          </form>
        </Rectangle>
        {/* Look into:
          flexbox froggy

        */}
        {this.state.showComponent ? (
          <Rectangle className="jobscreen">
            <Rectangle className="joblist">
              <div>{this.state.latitude}</div>
              <div>{this.state.longitude}</div>
            </Rectangle>
          </Rectangle>
        ) : null}
      </div>
    );
  }
}

export default Main;
