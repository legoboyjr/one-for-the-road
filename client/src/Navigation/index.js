import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <div className="flex" style={{ height: '10%', justifyContent: "space-between"}}>
            <NavLink to='/' 
                className={`no-decoration flex-grow-1 
                text-white flex justify-content-center 
                align-items-center bg-red fw4`}
            >
               {" <|  Home"}
            </NavLink>
            <NavLink to='/notes' 
                className={`no-decoration flex-grow-1 
                text-white flex justify-content-center 
                align-items-center bg-blue fw4`}
            >
                {" Notes List |> "}
            </NavLink>
        </div>
    );
}