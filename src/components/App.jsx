// import { Component } from 'react';
import FormPhoneBook from './FormPhoneBook/FormPhoneBook';
import ContactList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import Section from './Section/Section';
// import { v4 as uuidv4 } from 'uuid';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import useLocalStorage from './useLocalStorage';
import { useSelector } from 'react-redux';
import { getContact } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [filter, setFilter] = useState('');
  // const dispatch = useDispatch;

  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);
  // useEffect(() => {
  //   const saveContact = localStorage.getItem('contacts');
  //   if (saveContact) {
  //     setContacts({ contacts: JSON.parse(saveContact) });
  //   }
  // });
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, []);
  const formContactChange = (name, number) => {
    // const newContact = {
    //   id: uuidv4(),
    //   name,
    //   number,
    // };

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return false;
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
      return false;
    }

    // setContacts(prevContacts => [newContact, ...prevContacts]);
    // return true;
  };
  // const changeFilter = e => {
  //   setFilter(e.target.value);
  // };

  const filtredContacts = () => {
    if (filter) {
      const normalizedFilter = filter.toLowerCase();
      if (contacts.length !== 0) {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );
      }
    }
    return contacts;
  };
  // const deleteContact = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   );
  // };
  return (
    <div className="App">
      <Section title="PhoneBook">
        <FormPhoneBook onSubmit={formContactChange} />
      </Section>
      <Section title="Contacts">
        <Filter
        // value={filter} onChange={changeFilter}
        />
        <ContactList
          contacts={filtredContacts()}
          // onDeleteContact={deleteContact}
        />
      </Section>
    </div>
  );
};

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     const saveContact = localStorage.getItem('contacts');
//     if (saveContact) {
//       this.setState({ contacts: JSON.parse(saveContact) });
//     }
//   }
//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
//   formContactChange = data => {
//     if (this.state.contacts.find(({ name }) => name === data.name)) {
//       alert(`${data.name} is already in contacts.`);
//       return false;
//     } else if (
//       this.state.contacts.find(({ number }) => number === data.number)
//     ) {
//       alert(`${data.number} is already in contacts.`);
//       return false;
//     }

//     const newContact = {
//       id: uuidv4(),
//       name: data.name,
//       number: data.number,
//     };
//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }));
//     return true;
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.target.value });
//   };

//   getFiltredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };
//   render() {
//     const { filter } = this.state;
//     const filtredContacts = this.getFiltredContacts();

//     return (
//       <div className="App">
//         <Section title="PhoneBook">
//           <FormPhoneBook onSubmit={this.formContactChange} />
//         </Section>
//         <Section title="Contacts">
//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactList
//             contacts={filtredContacts}
//             onDeleteContact={this.deleteContact}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

export default App;
