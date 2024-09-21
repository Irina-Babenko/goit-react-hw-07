import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.box}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        className={css.boxInput}
        id="search"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}
