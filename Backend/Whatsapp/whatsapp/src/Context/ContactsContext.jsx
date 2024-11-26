import React from "react";
import { useState,children, createContext } from "react";
import contactos from "../Data/contactData";
const ContactsContext = createContext();
const ContactsContextProvider = ({children}) => {
    const [contact, setContact] = useState(contactos);
    return (
        <ContactsContext.Provider>
            {children}       
        </ContactsContext.Provider>
    )
}

export {ContactsContextProvider,ContactsContext}


