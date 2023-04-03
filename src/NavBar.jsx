import React from "react";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="name-container">
                <a href="#">
                    Paul Ulerick
                </a>
            </div>
            <div className="sub-container">
                <div>
                    <a href="#">
                        About me     
                    </a>
                </div>
                <div>
                    <a href="#">
                        Projects
                    </a>
                </div>     
                <div>
                    <a href="#">
                        Resume
                    </a>
                </div> 
            </div>
        </nav>
         
    )
}

export default NavBar;
