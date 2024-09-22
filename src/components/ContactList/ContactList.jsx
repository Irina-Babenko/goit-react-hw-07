import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import { deleteContact } from '../../redux/contactsOps';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.listContainer}>
      {filteredContacts.length === 0 ? (
        <li>No contacts found</li>
      ) : (
        filteredContacts.map(contact => (
          <li key={contact.id}>
            <Contact data={contact} onDelete={handleDelete} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ContactList;
