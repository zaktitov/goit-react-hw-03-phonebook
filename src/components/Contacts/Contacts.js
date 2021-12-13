import s from "./Contacts.module.css";

const Contacts = ({ contacts, deleteContact }) => (
  <div>
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactsItem}>
          <p className={s.contactsParagraph}>{name}:</p>
          <p className={s.contactsNumber}>{number}</p>
          <button
            type="button"
            onClick={() => {
              deleteContact(id);
            }}
            className={s.contactsBtn}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Contacts;
