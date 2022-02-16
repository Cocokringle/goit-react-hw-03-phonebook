import React from 'react';
import s from './ContactList.module.css'
import PropTypes from 'prop-types';

const ContactList = ({contacts, onDeleteContact}) => {
   return (
    <ul>{contacts.map(({id, name, number}) => 
    <li className={s.contact} key={id}>
        <p className={s.contact_name}>{name}</p>
         <a className={s.contact_number} href="tel:{number}">{number}</a>
         <button className={s.contact_button} type='button' onClick={() => onDeleteContact(id)}>Delete</button>
    </li>)}
    </ul>
   )

}

ContactList.propTypes = {
   onDeleteContact: PropTypes.func.isRequired,
   contacts: PropTypes.array.isRequired
}

export default ContactList;