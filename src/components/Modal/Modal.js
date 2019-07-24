import React from 'react';
import Modal from 'react-awesome-modal';
import firebase from 'firebase/app';
import wishlistData from '../../helpers/data/wishlist';

const defaultMini = {
  army: '',
  imageUrl: '',
  name: '',
  numberOwned: '',
  pointValue: '',
  monetaryValue: '',
};

class NewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      newMini: defaultMini,
    };
  }

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

  componentDidMount() {
    console.error(this.state);
  }

  formSubmit = (e) => {
    e.preventDefault();
    const saveMe = { ...this.state.newMini };
    saveMe.uid = firebase.auth().currentUser.uid;
    saveMe.numberOwned = Number.parseInt(saveMe.numberOwned, 10);
    saveMe.pointValue = Number.parseInt(saveMe.pointValue, 10);
    saveMe.monetaryValue = Number.parseInt(saveMe.monetaryValue, 10);
    wishlistData.postMini(saveMe)
      .then(() => {
        this.closeModal();
        this.props.reload();
      })
      .catch(err => console.error('unable to save', err));
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { newMini } = this.state;
    return (
      <section>
        <h1>React-Modal Example</h1>
        <input type="button" value="Open" onClick={() => this.openModal()} />
        <Modal visible={this.state.visible} width="300" height="450" effect="fadeInUp" onClickAway ={() => this.closeModal()}>
          <div>
            <h1>Add to Your Wishlist</h1>
            </div>
            <form onSubmit={this.formSubmit}>
          <div className="form-group">
            {/* <label htmlFor="army">Army</label> */}
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
            {/* <label htmlFor="imageUrl">Image URL</label> */}
            <input
              type="text"
              className="form-control"
              id="imageUrl"
              placeholder="Image URL goes here"
              // value={newMini.imageUrl}
              onChange={this.imageUrlChange}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name of the unit?"
              // value={newMini.name}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="numberOwned">Number Owned</label> */}
            <input
              type="number"
              className="form-control"
              id="numberOwned"
              placeholder="How many are owned?"
              // value={newMini.numberOwned}
              onChange={this.numberOwnedChange}
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="pointValue">Point Value</label> */}
            <input
              type="number"
              className="form-control"
              id="pointValue"
              placeholder="What is the point value of mini"
              // value={newMini.pointValue}
              onChange={this.pointValueChange}
            />
          </div>
          <div className="form-group">
          {/* <label htmlFor="monetaryValue">Monetary Value</label> */}
          <input
            type="text"
            className="form-control"
            id="numberDesired"
            placeholder="Number Desired?"
            // value={newMini.monetaryValue}
            onChange={this.monetaryValueChange}
          />
        </div>
          <button type="submit" className="btn btn-primary">Save Mini</button>
        </form>
        </Modal>
      </section>
    );
  }
}

export default NewModal;
