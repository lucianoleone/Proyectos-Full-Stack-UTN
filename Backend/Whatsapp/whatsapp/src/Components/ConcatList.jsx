import React, { useContext } from 'react'
import { ContactsContext } from '../Context/ContactsContext'
import Contact from './Contact';

const ConcatList = () => {
  const {contacts_state}=useContext(ContactsContext);
  //es una funcion nativa de react que nos permite consumir contexto
  
  return (
    <div>
        {
          contacts_state.map(contact => {
            return (
              <Contact 
                key={contact.id} 
                name={contact.name} 
                id={contact.id}
              />
            )
          })
        }
    </div>
  )
}

export default ConcatList