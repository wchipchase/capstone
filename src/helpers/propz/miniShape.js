import PropTypes from 'prop-types';

const miniCardShape = PropTypes.shape({
  army: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  numberOwned: PropTypes.string.isRequired,
  pointValue: PropTypes.string.isRequired,
  monetaryValue: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { miniCardShape };
