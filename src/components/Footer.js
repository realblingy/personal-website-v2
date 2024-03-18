import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding-bottom: 1rem;
    color: white;
`

const Footer = () => {
    return (
        <FooterContainer>
            James Dang - Certified Banh Mi Demolisher
        </FooterContainer>
    )
}

export default Footer
