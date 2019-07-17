import React from 'react';

import miniData from '../../helpers/data/minis';

import './EditMini.scss';

const defaultMini = {
  army: '',
  imageUrl: '',
  name: '',
  numberOwned: '',
  pointValue: '',
  monetaryValue: '',
  uid: '',
};

class EditMini extends React.Component {
  state = {
    newMini: defaultMini,
  }

  componentDidMount() {
    const miniId = this.props.match.params.id;
    miniData.getSingleMini(miniId)
      .then(miniPromise => this.setState({ newMini: miniPromise.data }))
      .catch(err => console.error('could not find single mini', err));
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
    const miniId = this.props.match.params.id;
    miniData.putMini(saveMe, miniId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to save', err));
  }

  render() {
    const { newMini } = this.state;
    return (
      <div className="EditMini">
        <h1>Edit Mini</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="army">Army</label>
            <input
              type="text"
              className="form-control"
              id="army"
              placeholder="Army"
              value={newMini.army}
              onChange={this.armyChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Color</label>
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              placeholder="Image of Unit"
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
              placeholder="Unit Name"
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
              placeholder="Number Owned"
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
              placeholder="Point Value"
              value={newMini.pointValue}
              onChange={this.pointValueChange}
            />
          </div>
          <div className="form-group">
          <label htmlFor="monetaryValue">Monetary Value</label>
          <input
            type="text"
            className="form-control"
            id="monetaryValue"
            placeholder="NSS"
            value={newMini.monetaryValue}
            onChange={this.monetaryValueChange}
          />
        </div>
          <button type="submit" className="btn btn-primary">Update Mini</button>
        </form>
      </div>
    );
  }
}

export default EditMini;
