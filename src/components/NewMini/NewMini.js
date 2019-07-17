import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import miniData from '../../helpers/data/minis';

import './NewMini.scss';

const defaultMini = {
  army: '',
  imageUrl: '',
  name: '',
  numberOwned: '',
  pointValue: '',
  monetaryValue: '',
};

class NewMini extends React.Component {
  state = {
    newMini: defaultMini,
  }

  formFieldStringState = (name, e) => {
    const tempMini = { ...this.state.newMini };
    tempMini[name] = e.target.value;
    this.setState({ newMini: tempMini });
  }

  armyChange = e => this.formFieldStringState('army', e);

  imageUrlChange = e => this.formFieldStringState('imageUrl', e);

  nameChange = e => this.formFieldStringState('name', e);

  numberOwnedChange = e => this.formFieldStringState('numberOwned', e);

  pointValueChange = e => this.formFieldStringState('pointValue', e);

  monetaryValueChange = e => this.formFieldStringState('monetaryValue', e);

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newMini };
    saveMe.uid = firebase.auth().currentUser.uid;
    miniData.postMini(saveMe)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save', err));
  }

  render() {
    const { newMini } = this.state;
    return (
      <div className="NewMini">
        <h1>New Mini</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="army">Army</label>
            <input
              type="text"
              className="form-control"
              id="army"
              placeholder="Which army?"
              value={newMini.army}
              onChange={this.armyChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              placeholder="Image URL goes here"
              value={newMini.imageUrl}
              onChange={this.imageUrlChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name of the unit?"
              value={newMini.name}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="numberOwned">Number Owned</label>
            <input
              type="text"
              className="form-control"
              id="numberOwned"
              placeholder="How many are owned?"
              value={newMini.numberOwned}
              onChange={this.numberOwnedChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pointValue">Point Value</label>
            <input
              type="text"
              className="form-control"
              id="pointValue"
              placeholder="What is the point value of mini"
              value={newMini.pointValue}
              onChange={this.pointValueChange}
            />
          </div>
          <div className="form-group">
          <label htmlFor="monetaryValue">Monetary Value</label>
          <input
            type="text"
            className="form-control"
            id="How much is it worth?"
            placeholder=""
            value={newMini.monetaryValue}
            onChange={this.monetaryValueChange}
          />
        </div>
          <button type="submit" className="btn btn-primary">Save Mini</button>
        </form>
      </div>
    );
  }
}

export default NewMini;
