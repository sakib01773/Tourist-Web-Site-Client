import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div className='shadow'>
            <div className=' container mx-auto p-4'>
            <Navbar
                fluid={true}
                rounded={true}
                >
                <Navbar.Brand href="https://flowbite.com/">
                    <img
                    src="https://wallpaperaccess.com/full/1318313.jpg"
                    className="mr-3 h-6 sm:h-9 rounded-lg"
                    alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-bold custom-brand">
                    Tourist Service
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <div className='custom-nav'>
                        <Link to={"/home"}>Home</Link>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/home"}>Services</Link>
                        <Link to={"/login"}><Button gradientDuoTone="tealToLime">log in</Button></Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>
            </div>
        </div>
    );
};

export default Header;