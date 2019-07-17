import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import miniShape from '../../helpers/propz/miniShape';

class MiniCard extends React.Component {
  static propTypes = {
    mini: miniShape.miniCardShape,
    deleteMini: PropTypes.func.isRequired,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { mini, deleteMini } = this.props;
    deleteMini(mini.id);
  }

  render() {
    const { mini } = this.props;
    const editLink = `/edit/${mini.id}`;
    return (
      <div className="MiniCard d-flex flex-wrap col-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{mini.army}</h2>
            <h3 className="card-title">{mini.name}</h3>
            <img src={mini.imageUrl} alt={mini.name}/>
            <p className="card-text">{mini.numberOwned}</p>
            <p className="card-text">{mini.pointValue}</p>
            <p className="card-text">{mini.monetaryValue}</p>
            <Link className="btn btn-primary" to={editLink}>Edit</Link>
            <button className="btn btn-danger" onClick={this.deleteMe}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MiniCard;
