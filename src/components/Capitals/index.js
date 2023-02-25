import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]
class Capital extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeButton = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state
    const activeCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeId,
    )
    console.log(activeCountry)
    return activeCountry.country
  }

  render() {
    const {selectedCountryId} = this.state
    const capital = this.getCountry(selectedCountryId)
    return (
      <div className="bg-container">
        <div className="box">
          <h1>Countries and Capitals</h1>
          <div>
            <select
              className="options"
              id="label-id"
              value={selectedCountryId}
              onChange={this.onChangeButton}
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="label-id" className="label-text">
              is capital of which country?
            </label>
          </div>
          <p className="capital">{capital}</p>
        </div>
      </div>
    )
  }
}

export default Capital
