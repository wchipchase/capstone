import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import miniData from '../../helpers/data/minis';

import MiniCard from '../MiniCard/MiniCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    minis: [],
    totalMonetaryValue: 0,
    totalPointValue: 0,
    totalNumberOfModels: 0,
  }

  getMinis = () => {
    const { uid } = firebase.auth().currentUser;
    miniData.getMyMinis(uid)
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
    miniData.deleteMini(miniId)
      .then(() => this.getMinis())
      .catch(err => console.error('unable to delete', err));
  }

  render() {
    const makeMiniCards = this.state.minis.map(mini => (
      <MiniCard
        key={mini.id}
        mini={mini}
        deleteMini={this.deleteMini}
      />
    ));

    return (
      <div className="Home">
        <div className="d-flex flex-wrap">
          {makeMiniCards}
        </div>
        <footer className="footer navbar navbar-expand-md navbar-dark fixed-bottom bg-dark">
          <div className="totalMonetaryValue"><h5>Total Monetary Value: ${this.state.totalMonetaryValue}</h5></div>
          <div className="totalPointValue"><h5>Total Point Value: {this.state.totalPointValue}</h5></div>
          <div className="numberOfModels"><h5>Number of Models Owned: {this.state.totalNumberOfModels}</h5></div>
        </footer>
      </div>
    );
  }
}

export default Home;
