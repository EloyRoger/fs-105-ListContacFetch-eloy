import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "../components/ContactCard.jsx";
import { getContact, deleteContactById } from "../service/contact.js";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    //   const[dataLoaded, setDataLoaded] = useState({})
    const {store, dispatch} =useGlobalReducer();
    const navigate =useNavigate();
    const getData = async () => {
        const data = await  getContact ();
        if (data) {
            dispatch ({type: 'addContacts', payload: data})
        }

    }
    useEffect(() => {
        getData();
    },[]);
    const deleteContact = async (id) => {
       const isdelete = await deleteContactById(id);
        if (isdelete) {
            getData();
        }
    }

    const editContact = (contact) => {
        dispatch({type:'edit', payload: contact});
        navigate('/editContact')
    }

    return (
        <div className="text-center mt-5">
            <div>
                {store.contacts.map( (contact, index) => (
                <ContactCard key={index} contact={contact} deleteContact={deleteContact} editContact={editContact} />
                ))}
            </div>
        </div>
    );
};















// import { useEffect } from "react";
// import useGlobalReducer from "../hooks/useGlobalReducer";
// import {ContactCard} from "../components/ContactCard";

// const API_URL = "https:/playground.4geeks.com/contact/agendas/eloy";

// export const initialStore = () => ({
//   contacts: [],
//   currentContact: null,
//   loading: false,
//   error: null
// });

// export const storeReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOAD_CONTACTS':
//       return { ...state, contacts: action.payload, loading: false };
//     case 'ADD_CONTACT':
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     case 'UPDATE_CONTACT':
//       return {
//         ...state,
//         contacts: state.contacts.map(contact =>
//           contact.id === action.payload.id ? action.payload : contact
//         )
//       };
//     case 'DELETE_CONTACT':
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== action.payload)
//       };
//     case 'SET_LOADING':
//       return { ...state, loading: action.payload };
//     case 'SET_ERROR':
//       return { ...state, error: action.payload, loading: false };
//     default:
//       return state;
//   }
// };

// export const ContactActions = {
//   getContacts: async (dispatch) => {
//     try {
//       dispatch({ type: 'SET_LOADING', payload: true });
//       const response = await fetch(`${API_URL}contacts`);
//       const data = await response.json();
//       dispatch({ type: 'LOAD_CONTACTS', payload: data });
//     } catch (error) {
//       dispatch({ type: 'SET_ERROR', payload: error.message });
//     }
//   },

//   addContact: async (dispatch, contact) => {
//     try {
//       const response = await fetch(`${API_URL}contacts`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(contact)
//       });
//       const newContact = await response.json();
//       dispatch({ type: 'ADD_CONTACT', payload: newContact });
//     } catch (error) {
//       dispatch({ type: 'SET_ERROR', payload: error.message });
//     }
//   },

//   updateContact: async (dispatch, id, updatedContact) => {
//     try {
//       const response = await fetch(`${API_URL}contacts/${id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(updatedContact)
//       });
//       const data = await response.json();
//       dispatch({ type: 'UPDATE_CONTACT', payload: data });
//     } catch (error) {
//       dispatch({ type: 'SET_ERROR', payload: error.message });
//     }
//   },

//   deleteContact: async (dispatch, id) => {
//     try {
//       await fetch(`${API_URL}contacts/${id}`, { method: 'DELETE' });
//       dispatch({ type: 'DELETE_CONTACT', payload: id });
//     } catch (error) {
//       dispatch({ type: 'SET_ERROR', payload: error.message });
//     }
//   }
// };

// export const Home = () => {
//     //   const[dataLoaded, setDataLoaded] = useState({})
//     const {store, dispatch} =useGlobalReducer();
//     const getData = async () => {
//         try {
//             const response = await fetch("https://playground.4geeks.com/contact/agendas/eloy/");
//             const data = await response.json();
//             dispatch({type:'addContacts', payload: data})
//         } catch (error) {
//             console.log('ERROR GET CONTACT LIST', error);
//         }
//     }
//     useEffect(() => {
//         getData();
//     },[]);
//     const deleteContact = (id) => {
//         console.log(id);
//     }
// 	if (!store.contacts) return <div>Loading...</div>;

//     return (
//     <div className="container mt-4">
//       <h1>Contacts</h1>
//       <div className="row">
//         {contacts.map(contact => (
//           <div className="col-md-4" key={contact.id}>
//             <ContactCard 
//               contact={contact} 
//               onDelete={id => deleteContact(id)}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };