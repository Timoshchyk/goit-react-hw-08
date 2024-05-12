import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.list}>
      {filteredContacts.length === 0 ? (
        <h2>There is no contacts</h2>
      ) : (
        filteredContacts.map((contact) => {
          return (
            <li key={contact.id} className={css.contact}>
              <Contact item={contact} />
            </li>
          );
        })
      )}
    </ul>
  );
}
