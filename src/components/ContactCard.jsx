export const ContactCard = ({contact, deleteContact}) => {
    const {name, phone, email, address, id} = contact;
    return (
        <div className="card" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://imagenes.20minutos.es/files/image_640_auto/uploads/imagenes/2023/03/17/cantabro.jpeg" className="imgPerfil" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{phone}</p>
                        <p className="card-text">{email}</p>
                        <p className="card-text"><small className="text-body-secondary">{address}</small></p>
                    </div>
                    <button>Edit</button>
                    <button onClick={() => deleteContact(id)}>Delete</button>
                </div>
            </div>
        </div>
)}

// import { Link } from "react-router-dom";
// import { useState } from "react";


// const ContactCard = ({ contact, onDelete }) => {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <div className="card mb-3">
//       <div className="card-body">
//         <h5 className="card-title">{contact.full_name}</h5>
//         <p className="card-text">Email: {contact.email}</p>
//         <p className="card-text">Phone: {contact.phone}</p>
//         <div className="d-flex gap-2">
//           <Link to={`/edit/${contact.id}`} className="btn btn-warning">
//             Edit
//           </Link>
//           <button 
//             onClick={() => setShowModal(true)} 
//             className="btn btn-danger"
//           >
//             Delete
//           </button>
//         </div>
//       </div>

//       {showModal && (
//         <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Confirm Delete</h5>
//               </div>
//               <div className="modal-body">
//                 Are you sure you want to delete this contact?
//               </div>
//               <div className="modal-footer">
//                 <button 
//                   className="btn btn-secondary" 
//                   onClick={() => setShowModal(false)}
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   className="btn btn-danger"
//                   onClick={() => {
//                     onDelete(contact.id);
//                     setShowModal(false);
//                   }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
// export default ContactCard;