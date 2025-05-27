import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary">
        <form className="container-fluid ">
            <Link to="/">
                <button className="btn btn-outline-success me-2" type="button">Main</button>
            </Link>
            <Link to="/AddContact">
                <button className="btn btn-outline-success me-2" type="button">New contact</button>
            </Link>
        </form>
        </nav>
    );
};




// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
//       <div className="container">
//         <Link className="navbar-brand" to="/">
//           <i className="fas fa-address-book me-2"></i>
//           Contact Manager
//         </Link>
        
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" 
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/add">
//                 <i className="fas fa-plus-circle me-1"></i>
//                 Add Contact
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 <i className="fas fa-list me-1"></i>
//                 Contact List
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;