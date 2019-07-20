import PropTypes from 'prop-types';

const miniCardShape = PropTypes.shape({
  army: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  numberOwned: PropTypes.number.isRequired,
  pointValue: PropTypes.number.isRequired,
  monetaryValue: PropTypes.number.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { miniCardShape };
