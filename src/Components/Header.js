import React, { useState, useEffect } from 'react';
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useHistory } from "react-router-dom";
function Header() {
    let history = useHistory();
    const [menuClicked, setmenuClicked] = useState(1);
    return (
        <nav className="navBar">
            <label className="logo" onClick={() => { history.push("/") }}><label className="logo-half">Soft</label>Mobility</label>
            <ul className={menuClicked ? "nav__links" : "nav__links active"} >
                <li><a className="active" onClick={() => { history.push("/") }}>Home</a></li>
                <li><a onClick={() => { history.push("/user-list") }}>User List</a></li>
                <li><a onClick={() => { history.push("/login") }}>About us</a></li>
                <button>Contact Us</button>
            </ul>
            <div id="menuIcon" onClick={() => { if (menuClicked) { setmenuClicked(0) } else { setmenuClicked(1) } }}>{menuClicked ? <FaBars /> : <FaTimes />}</div>


        </nav>

    )
}

export default Header;