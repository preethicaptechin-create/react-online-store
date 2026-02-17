// import { Link } from "react-router-dom";
// import "./Navbar.css";

// import {
//   FaMale,
//   FaFemale,
//   FaChild,
//   FaMobileAlt
// } from "react-icons/fa";
// import { GiLipstick } from "react-icons/gi";
// import { IoShoePrints } from "react-icons/io5";


// function Navbar() {
//   return (
//     <nav className="navbar">

//       <Link to="/men" className="nav-item">
//         <FaMale />
//         <span>Men</span>
//       </Link>

//       <Link to="/women" className="nav-item">
//         <FaFemale />
//         <span>Women</span>
//       </Link>

//       <Link to="/kids" className="nav-item">
//         <FaChild />
//         <span>Kids</span>
//       </Link>

//       <Link to="/beauty" className="nav-item">
//         <GiLipstick />
//         <span>Beauty</span>
//       </Link>

//       <Link to="/shoes" className="nav-item">
//         <IoShoePrints />
//         <span>Shoes</span>
//       </Link>

//       <Link to="/mobiles" className="nav-item">
//         <FaMobileAlt />
//         <span>Mobiles</span>
//       </Link>

//     </nav>
//   );
// }

// export default Navbar;

import { Link } from "react-router-dom";
import "./Navbar.css";

import {
  FaMale,
  FaFemale,
  FaChild,
  FaMobileAlt,
  FaShoePrints
} from "react-icons/fa";

import { GiLipstick } from "react-icons/gi";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/men" className="nav-item">
        <FaMale />
        <span>Men</span>
      </Link>

      <Link to="/women" className="nav-item">
        <FaFemale />
        <span>Women</span>
      </Link>

      <Link to="/kids" className="nav-item">
        <FaChild />
        <span>Kids</span>
      </Link>

      <Link to="/beauty" className="nav-item">
        <GiLipstick />
        <span>Beauty</span>
      </Link>

      <Link to="/shoes" className="nav-item">
        <FaShoePrints />
        <span>Shoes</span>
      </Link>

      <Link to="/mobiles" className="nav-item">
        <FaMobileAlt />
        <span>Mobiles</span>
      </Link>

    </nav>
  );
}

export default Navbar;
