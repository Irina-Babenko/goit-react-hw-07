import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

const ContactList = ({ onDelete }) => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.listContainer}>
      {filteredContacts.length === 0 ? (
        <li>No contacts found</li>
      ) : (
        filteredContacts.map(contact => (
          <li key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))
      )}
    </ul>
  );
};

export default ContactList;
