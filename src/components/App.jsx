import React, { Component } from 'react';
import Notiflix from 'notiflix';
//import { nanoid } from 'nanoid';
import ContactForm from './contactsform';
import ContactList from './contactlist';
import FilterContacts from './filter';
import Title from './title';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const appStyles = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '24px',
  gap: '8px',
  color: '#010101',
};
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    //name: '',
    //number: '',
  };

  // methods
  onFormSubmit = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    console.log(this.state.contacts);
  };

  onSearchContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = (id, name) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
    Notiflix.Notify.info(`Succesfully removed ${name} from your contacts`);
  };
  // - methods

  render() {
    const { contacts, filter } = this.state;
    return (
      <div style={{ ...appStyles, backgroundColor: getRandomHexColor() }}>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onFormSubmit={this.onFormSubmit} contacts={contacts} />
          <Title title={'Contacts'} />
          <FilterContacts
            filter={filter}
            onSearchContact={this.onSearchContact}
          />
          <ContactList
            contacts={contacts}
            deleteContact={this.deleteContact}
            filter={filter}
          />
        </div>
      </div>
    );
  }
}

/**
 <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
 */
/*
  addContact = value => {
    const { name, number } = value;
    let exContact = this.state.contacts.find(
      exCon => exCon.name === name && exCon.number === number
    );
    if (!(exContact === undefined)) {
      Notiflix.Notify.warning(`${name} ${number} is already in contact`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ ...value, id: nanoid() }, ...prevState.contacts],
    }));
  };
  deleteContact = contactId => {};
  onChangeFind = evt => {
    this.setState({ filter: evt.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
  };*/

/*
 */
