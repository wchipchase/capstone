import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import miniData from '../../helpers/data/minis';

import MiniCard from '../MiniCard/MiniCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    minis: [],
  }

  getMinis = () => {
    const { uid } = firebase.auth().currentUser;
    miniData.getMyMinis(uid)
      .then(minis => this.setState({ minis }))
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
      <div className="Home col">
        <h1>Home</h1>
        <div className="d-flex flex-wrap">
          {makeMiniCards}
        </div>

      </div>
    );
  }
}

export default Home;
