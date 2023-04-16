import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';

export class App extends Component {
  

  state = {
    contacts: [
      /*{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },*/
    ],
    //filter: '',
    name: '',
    //number: '',
  };
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

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 28,
          gap: '18px',
          color: '#010101',
        }}
      >
        <div>
          goit-react-hw-02-phonebook
          
          <h1>Phonebook</h1>
          <form onSubmit={this.handleSubmit}>
          <label>Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
              />
          </label>
            <button type="submit">Add contact</button>
          </form>

          <h2>Contacts</h2>
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
