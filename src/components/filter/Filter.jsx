import PropTypes from 'prop-types';
import '../filter/Filter.css';

const FilterContacts = ({ filter, onSearchContact }) => {
  return (
    <input
      className="searchInput"
      type="text"
      name="search"
      value={filter}
      onChange={onSearchContact}
    />
  );
};

export default FilterContacts;

FilterContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  onSearchContact: PropTypes.func.isRequired,
};
