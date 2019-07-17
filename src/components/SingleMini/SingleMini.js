import React from 'react';
import { Link } from 'react-router-dom';

import miniData from '../../helpers/data/minis';

import './SingleMini.scss';

class SingleMini extends React.Component {
  state = {
    mini: {},
  }

  componentDidMount() {
    const miniId = this.props.match.params.id;
    miniData.getSingleMini(miniId)
      .then(miniPromise => this.setState({ mini: miniPromise.data }))
      .catch(err => console.error('unable to get single mini', err));
  }

  deleteMini = () => {
    const miniId = this.props.match.params.id;
    miniData.deleteMini(miniId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to delete', err));
  }

  render() {
    const { mini } = this.state;
    const editLink = `/edit/${this.props.match.params.id}`;
    return (
      <div className="SingleMini">
        <h1>{mini.army}</h1>
        <img src={mini.imageUrl} alt={mini.name}/>
        <h2>{mini.name}</h2>
        <h3>{mini.numberOwned}</h3>
        <h3>{mini.pointValue}</h3>
        <h3>{mini.monetaryValue}</h3>
        <Link className="btn btn-primary" to={editLink}>Edit</Link>
        <button className="btn btn-danger" onClick={this.deleteMini}>Delete</button>
      </div>
    );
  }
}

export default SingleMini;
