import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum'

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>

            <img
                className="header__logo"
                src="https://cdn1.iconfinder.com/data/icons/social-media-circle-6/1024/tinder-circle-1024.png"
                alt="tinder-logo" 
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
