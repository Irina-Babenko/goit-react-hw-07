import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import { selectFilteredContacts } from '../../redux/selectors';
import { fetchContacts, deleteContact } from '../../redux/contactsOps';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(state => state.contacts.loading);
  const error = useSelector(state => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      {loading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && (
        <ContactList contacts={filteredContacts} onDelete={handleDelete} />
      )}
    </div>
  );
}
