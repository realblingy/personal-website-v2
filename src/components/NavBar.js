import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavBarContainer = styled.div`
    width: 450px;
    height: 45px;
    background-color: #7854AF;
    position: fixed;
    top: 0;
    right: 0;
    border-bottom-left-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 0.3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    justify-content: space-between;
    box-sizing: border-box;
    z-index: 5;

    @media (max-width: 750px) {
        width: 100%;
        border-bottom-left-radius: 0;
        font-size: 90%;
    }
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.2em;
    font-weight: ${props => props.selected && "bold"};
    cursor: pointer;

    &:hover {
        filter: opacity(0.8);
    }
`

const links = ["Home", "About", "Projects", "Contact"]

function NavBar() {

    // const [currLink, setCurrLink] = useState(0);
    const [showMenuBar, setMenuBar] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 750 && !showMenuBar) {
                setMenuBar(true);
            } else if (window.innerWidth > 750 && showMenuBar) {
                setMenuBar(false);
            }
        })
    }, [])

    return (
        <NavBarContainer>
            {
                links.map((link, idx) => (
                    <NavLink
                        smooth
                        // selected={idx === currLink}
                        // onClick={() => {
                        //     setCurrLink(idx);
                        // }}
                        to={link}
                        ignoreCancelEvents
                    >
                        {link}
                    </NavLink>
                ))
            }
        </NavBarContainer>
    );
}

export default NavBar
