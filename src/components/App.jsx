// import { Component } from 'react';
import FormPhoneBook from './FormPhoneBook/FormPhoneBook';
import ContactList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

const App = () => {
  // useEffect(() => {
  //   const saveContact = localStorage.getItem('contacts');
  //   if (saveContact) {
  //     setContacts({ contacts: JSON.parse(saveContact) });
  //   }
  // });
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, []);

  return (
    <div className="App">
      <Section title="PhoneBook">
        <FormPhoneBook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default App;
