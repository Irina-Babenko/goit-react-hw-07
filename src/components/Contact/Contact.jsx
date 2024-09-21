import { IoPerson, IoPhonePortrait } from 'react-icons/io5';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactContainer}>
      <ul>
        <li className={css.contactWrapper}>
          <IoPerson />
          {name}
        </li>
        <li className={css.contactWrapper}>
          <IoPhonePortrait />
          {number}
        </li>
      </ul>
      <button className={css.contactBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
