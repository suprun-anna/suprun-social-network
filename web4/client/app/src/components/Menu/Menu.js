import React from 'react';
import '../../styles/menuStyles.css';
import logo from './placeholder_logo.png';


const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li>
                    <a href="/home">
                        <img id="logo" src={logo} alt="Logo" />
                    </a>
                </li>
                <hr />
                <li>
                    <a href="/profile/user/me">Profile</a>
                </li>
                <li>
                    <a href="/home">Followers' updates</a>
                </li>
                <li>
                    <a href="/posts/post/create">Create post</a>
                </li>
                <li>
                    <a href="#">Messages</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;