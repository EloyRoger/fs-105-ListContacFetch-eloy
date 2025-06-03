import { deleteContactById } from "../service/contact";

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
                    <button className="btn btn-primary" onClick={() => contact (id)} >Edit</button>
                    <button className="btn btn-danger" onClick={() => deleteContact (id)}>
                            DELETE
                    </button>
                </div>
            </div>
        </div>
)}

// export const ContactCard = ({ contact, deleteContact }) => {
//   return (
//     <div className="card mb-3">
//       <div className="card-body">
//         <h5 className="card-title">{contact.full_name}</h5>
//         <p className="card-text">Email: {contact.email}</p>
//         <p className="card-text">Teléfono: {contact.phone}</p>
//         <p className="card-text">Dirección: {contact.address}</p>
        
//         {/* Botón de eliminar */}
//         <button 
//           className="btn btn-danger"
//           onClick={() => {
//             if (window.confirm('¿Seguro que quieres eliminar este contacto?')) {
//               deleteContact(contact.id);
//             }
//           }}>
//           DELETE
//         </button>
//       </div>
//     </div>
//   );
// };