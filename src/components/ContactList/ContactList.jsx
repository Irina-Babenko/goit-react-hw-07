import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
const ContactList = ({ onDelete }) => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.length === 0 ? (
        <li>No contacts found</li>
      ) : (
        filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}
            <button onClick={() => onDelete(contact.id)}>Delete</button>{' '}
          </li>
        ))
      )}
    </ul>
  );
};

export default ContactList;
