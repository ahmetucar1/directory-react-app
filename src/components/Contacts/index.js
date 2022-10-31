import {useState, useEffect} from 'react'

import "./styles.css";

import List from './List'
import Form from './Form'


const Contacts = () => {
    const [contacts, setContacts] = useState([
    {
        fullname: "Yılmaz",
        phone_number: "053266486"
    },
    {
        fullname: "Ayşe",
        phone_number: "058766486"
    }
    ]);
    useEffect(() => {
        console.log(contacts);
    }, [contacts])

  return (
    <div id='container'>
        <h1 className='title'>Contacts</h1>
        <List contacts={contacts}/>
        <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts;