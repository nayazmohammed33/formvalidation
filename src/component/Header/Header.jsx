import React from "react";
import img from "../../asset/img";
import "./Header.css";
import { Cart, Nav } from "../index";

export default function Header() {
    return (
        <header className="header">
            <div className="hold">
                <div className="headerLeft">
                    <Nav>
                        <a className="headerLogo" href="/">
                            <img src={img.logo} alt="Sneakers" />
                        </a>
                    </Nav>
                </div>

                <div className="headerRight">
                    
                    <a className="headerUser" href="/">
                        
                    </a>
                </div>
            </div>
        </header>
    );
}
