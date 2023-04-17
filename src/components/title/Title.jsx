import PropTypes from 'prop-types';
import '../title/Title.css';

const Title = ({ title }) => { 
    return (<h2 className='titlerow'>{title}</h2>);
}

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};