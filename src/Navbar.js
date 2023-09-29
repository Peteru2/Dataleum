import { Link } from "react-router-dom";
import navMenu from "./navMenu";

import "./navbar.css";
import { useState } from "react";


const Navbar = () => {

   const [name, setState] = useState(false)

  const  handleClick = () => {
        setState(current => !current )
    }

   return (
   
        <nav className="nav">
            <h2 className="nav-logo">
               <span>Dataleum</span>
            </h2>

            <div className="menu-icon" onClick={handleClick}>
                <i className = {name ? "fa fa-times" : "fa fa-bars"}></i>
            </div>

            <div className = {name ? "nav-menu active":"nav-menu"}>
            {navMenu.map((item,index) => {
                return (
                          
                       <li className="nav-list" key = {index}>
                            <Link  className = {item.cName}  to = {item.url}>
                                {item.title}
                            </Link>
                            </li>
                    
                );
            })}
            <h2 className="nav-side cursor-pointer">
                <span className=" bg-bro">
                 <Link to={"/Dashboard"}>
                    Login
                </Link>
                </span>
                
              </h2>
        </div>
              
              </nav>

)
        }
export default Navbar;