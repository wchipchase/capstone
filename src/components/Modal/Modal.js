<<<<<<< HEAD
=======
import React from 'react';
import Modal from 'react-awesome-modal';

class NewModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible : false
    };
  }

  openModal() {
    this.setState({
      visible : true
    });
  }

  closeModal() {
    this.setState({
      visible : false
    });
  }

  render() {
    return (
      <section>
        <h1>React-Modal Example</h1>
        <input type="button" value="Open" onClick={() => this.openModal()} />
        <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway ={() => this.closeModal()}>
          <div>
            <h1>title</h1>
            <p>Some Content</p>
            </div>
            <form onSubmit={this.formSubmit}>
          <div className="form-group">
            {/* <label htmlFor="army">Army</label> */}
            <input
              type="text"
              className="form-control"
              id="army"
              placeholder="Which army?"
              // value={newMini.army}
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
>>>>>>> f8b3b9ba1925cacb0a4b54f2ed7a1fcf7913cea5
