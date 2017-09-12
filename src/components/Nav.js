import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from '../store/auth.actions';
import styled from 'styled-components';

const NavList = styled.ul`
    margin: -10px 0;
    padding: 0;
`;
    
const NavItem = styled.li`
    text-align: left;
    display: inline-block;
    margin: -20px 10px 10px 20px;
    list-style-type: none;
`;

const NavLink = props => <Link style={{ color: 'white' }} { ...props}/>;

function Nav({ user, signout }) {
    return (
        <nav>
            <NavList>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                    </NavItem>
                <NavItem>
                    <NavLink to="/game">Game</NavLink>
                </NavItem>
                <NavItem>
                    { user
                    ? <NavLink to='/' onClick = {signout}>Logout</NavLink>
                    : <NavLink to="/auth/signin">Login</NavLink>
                    }
                </NavItem>
                <NavItem>
                    { user &&
                    <NavLink to="/cards">Add a Card</NavLink>
                    }
                </NavItem>
            </NavList>
        </nav>
    );
}

export default connect(
    state => ({ user: state.auth.user }),
    dispatch => ({
        signout() { dispatch(signout()); }
    })
)(Nav);
