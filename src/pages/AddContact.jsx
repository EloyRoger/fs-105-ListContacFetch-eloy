import { useState } from "react";
import { Link } from "react-router-dom";
import { UserComplete } from "../components/UserComplete.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const AddContact = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  // const { store, dispatch } = useGlobalReducer()
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [message, setMessage] = useState();
  const onChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setContact({...contact,[name]: value});
  }
  const onSubmit = async (event)=> {
    event.preventDefault();
    console.log(contact);
    await createContact();
  }
  const createContact = async () => {
    try {
      const response = await fetch('https://playground.4geeks.com/contact/agendas/Eloy/contacts', {
        method: 'POST',
        headers:{
          'content-type': 'application/json',
        },
        body: JSON.stringify(contact),
      });
      console.log(response);
      if(response.status === 201){
        setMessage('Contact create')
      }
    } catch (err) {
      console.log('error in create contact', err)
    }
  }
  return (
    <div className="formulario">
      <h1>Add a new contact</h1>
        <form onChange={onChange} onSubmit={onSubmit}>
          <div>
            <label>Full Name:</label>
              <input
                className="form-control"
                type="texto"
                name="name"
                placeholder="Full Name">
            </input>
          </div>
          <div className="mt-3">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email">
            </input>
          </div>
          <div className="mt-3">
            <label>Phone:</label>
              <input
                className="form-control"
                type="number"
                name="phone"
                placeholder="Phone">
              </input>
          </div>
          <div className="mt-3 mb-3">
            <label>Address:</label>
              <input
                className="form-control"
                type="texto"
                name="address"
                placeholder="Address">
              </input>
          </div>
          <button type="submit" className="btn btn-primary" style={{width: "100%"}}> save </button>
          {message && <UserComplete message= {message}/> }
        </form>
        <Link to='/'>or get back to contacts</Link>
    </div>
  );
};
