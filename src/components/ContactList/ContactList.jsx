import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import Contact from '../Contact/Contact';

const ContactList = ({ onDelete }) => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
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
