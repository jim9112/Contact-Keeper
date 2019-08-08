import React, { useContext, useRef, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {

    const contactContext = useContext(ContactContext);
    const text = useRef('');

    const { filterContacts, clearFilter, filtered } = contactContext;

    // set text value of search field to empty when filter changes to null
    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });

    // call filtercontact function on change
    const onChange = e => {
        if(text.current.value !== '') {
            filterContacts(e.target.value);
        } else {
            clearFilter();
        }
    };

    return (
        <form>
            <input ref={text} type="text" placeholder='Filter Contacts...' onChange={onChange}/>
        </form>
    )
}

export default ContactFilter
