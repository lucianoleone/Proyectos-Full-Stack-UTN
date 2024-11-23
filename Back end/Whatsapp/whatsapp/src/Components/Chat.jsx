import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ContactsContext } from '../Context/ContactsContext'
import MessagesList from './Messagelist'
const Chat = () => {
    const {contact_id}=useParams()
    const {getContactById}=useContext(ContactsContext)
    const contact_selected=getContactById(contact_id);
    console.log(contact_selected)
  return (
    <div>
        <h1>Chat</h1>
        <MessagesList messages={contact_selected.messages}/>
    </div>
  )
}

export default Chat