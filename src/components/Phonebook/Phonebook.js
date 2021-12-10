import React from "react";
import s from "./Phonebook.module.css";
import { Fragment } from "react/cjs/react.production.min";
import shortid from "shortid";

class Phonebook extends React.Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    number: "",
    filter: "",
  };

  nameId = shortid.generate();
  numberId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

    console.log(this.state.name);
  };

  handleSubmit = (e) => {
    alert("Contact has been saved:" + this.state.name);
    e.preventDefault();
    this.reset();

    console.log(this.state);
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <Fragment>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label className={s.label} htmlFor={this.nameId}>
            Name
          </label>
          <input
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameId}
          />

          <button type="submit" className={s.btnSubmit}>
            Add contact
          </button>

          <label className={s.label} htmlFor={this.numberId}>
            Number
          </label>
          <input
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberId}
          />
        </form>

        <div>
          <h2 className={s.contacts}>Contacts</h2>
          <ul className={s.list}></ul>
        </div>
      </Fragment>
    );
  }
}

export default Phonebook;
