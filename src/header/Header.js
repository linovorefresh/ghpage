import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                
                <NavLink to={`/kingdoms`} className="Header-link">Kingdoms</NavLink>
                <NavLink to={`/houses`} className="Header-link">Houses</NavLink>
                <NavLink to={`/characters`} className="Header-link">Characters</NavLink>
                {/* <NavLink to={`/showings`} className="Header-link">Season/Episodes</NavLink> */}
                
            </div>
        )
    }
}

export default Header;
