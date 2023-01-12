import { v4 as uuidv4 } from 'uuid';
// import PropTypes from 'prop-types';
import Style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

const searchId = uuidv4();
const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor={searchId} className={Style.labelFilter}>
        Find contacts by name
        <input
          className={Style.inputFilter}
          type="text"
          name="filter"
          value={filter}
          onChange={evt => dispatch(setFilter(evt.target.value))}
          id={searchId}
        />
      </label>
    </>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string,
// };

export default Filter;
