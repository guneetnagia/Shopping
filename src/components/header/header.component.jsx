import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { auth } from 'firebase';

const Header = ({currentUser}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser ?
                    <div className='option' onClick={()=>auth.signOut()}>Sign Out</div>:
                    <Link className="option" to="/signin">Sign In</Link>
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser : state.user.currrentUser
});

export default connect(mapStateToProps)(Header);