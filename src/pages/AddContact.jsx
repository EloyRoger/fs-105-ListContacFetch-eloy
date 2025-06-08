import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserComplete } from "../components/UserComplete.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { addContact, putContact } from "../service/contact";

const initial_state = {
  name: '',
  email: '',
  phone: '',
  address: ''
}

export const AddContact = ({ type }) => {
  const { store } = useGlobalReducer();
  const isEdit = type === 'edit';
  const [contact, setContact] = useState(initial_state);
  const [message, setMessage] = useState();

  useEffect(() => {
    if (isEdit && store.contact) {
      setContact(store.contact);
    } else {
      setContact(initial_state);
    }
  }, [isEdit, store.contact]); 

  const onChange = (event) => {
    const { name, value } = event.target;
    setContact(prev => ({ ...prev, [name]: value }));
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isEdit) {
      await editContact();
    } else {
      await createContact();
    }
  }

  const createContact = async () => {
    const addContactResponse = await addContact(contact);
    if (addContactResponse) {
      setMessage(addContactResponse);
      setContact(initial_state);
    }
  }

  const editContact = async () => {
    const editContactResponse = await putContact(contact);
    if (editContactResponse) {
      setMessage(editContactResponse);
    }
  }

  return (
    <div className="formulario">
      <h1>{isEdit ? "Edit contact" : "Add a new contact"}</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Full Name"
            value={contact.name}
            onChange={onChange}
          />
        </div>
        <div className="mt-3">
          <label>Email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={onChange}
          />
        </div>
        <div className="mt-3">
          <label>Phone:</label>
          <input
            className="form-control"
            type="number"
            name="phone"
            placeholder="Phone"
            value={contact.phone}
            onChange={onChange}
          />
        </div>
        <div className="mt-3 mb-3">
          <label>Address:</label>
          <input
            className="form-control"
            type="text"
            name="address"
            placeholder="Address"
            value={contact.address}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
          {isEdit ? "Save Changes" : "Save Contact"}
        </button>
        {message && <UserComplete message={message} />}
      </form>
      <Link to='/'>or get back to contacts</Link>
    </div>
  );
};