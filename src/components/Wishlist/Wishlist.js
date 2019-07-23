import React from 'react';
<<<<<<< HEAD
import ModalExample from '../Modal/Modal';
=======
import firebase from 'firebase/app';
import 'firebase/auth';
import Modal from '../Modal/Modal';
import wishlistData from '../../helpers/data/wishlist';

import MiniCard from '../MiniCard/MiniCard';

import './Wishlist.scss';
>>>>>>> f8b3b9ba1925cacb0a4b54f2ed7a1fcf7913cea5

class Wishlist extends React.Component {
  state = {
    minis: [],
    totalMonetaryValue: 0,
    totalPointValue: 0,
    totalNumberOfModels: 0,
  }

  getMinis = () => {
    const { uid } = firebase.auth().currentUser;
    wishlistData.getMyMinis(uid)
      .then((minis) => {
        const reducer1 = (totalMonetaryValue, mini) => totalMonetaryValue + mini.monetaryValue;
        const totalMonetaryValue = minis.reduce(reducer1, 0);
        const reducer2 = (totalPointValue, mini) => totalPointValue + mini.pointValue;
        const totalPointValue = minis.reduce(reducer2, 0);
        const reducer3 = (totalNumberOfModels, mini) => totalNumberOfModels + mini.numberOwned;
        const totalNumberOfModels = minis.reduce(reducer3, 0);
        this.setState({
          minis,
          totalMonetaryValue,
          totalPointValue,
          totalNumberOfModels,
        });
      })
      .catch(err => console.error('could not get minis', err));
  }

  componentDidMount() {
    this.getMinis();
  }

  deleteMini = (miniId) => {
    wishlistData.deleteMini(miniId)
      .then(() => this.getMinis())
      .catch(err => console.error('unable to delete', err));
  }

  render() {
<<<<<<< HEAD
    return (
      <ModalExample />
=======
    const makeMiniCards = this.state.minis.map(mini => (
      <MiniCard
        key={mini.id}
        mini={mini}
        deleteMini={this.deleteMini}
      />
    ));

    return (
      <div className="Wishlist col">
        <div className="d-flex flex-wrap">
        <Modal />
          {makeMiniCards}
        </div>
        <footer className="footer navbar navbar-expand-md navbar-dark fixed-bottom bg-dark">
          <div className="totalMonetaryValue"><h5>Projected Cost: ${this.state.totalMonetaryValue}</h5></div>
          <div className="totalPointValue"><h5>Total Point Value: {this.state.totalPointValue}</h5></div>
          <div className="numberOfModels"><h5>Number of Models Wished For: {this.state.totalNumberOfModels}</h5></div>
        </footer>
      </div>
>>>>>>> f8b3b9ba1925cacb0a4b54f2ed7a1fcf7913cea5
    );
  }
}

export default Wishlist;
