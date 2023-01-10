import PropTypes from 'prop-types';
import Style from './Contacts.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts }) => {
  return (
    <ul className={Style.contactsList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            id={id}
            key={id}
            name={name}
            number={number}
            // onDeleteContact={}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactList;
