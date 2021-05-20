import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import FreeLancingImg from '../assets/FreeLancing.png'
import GithubLogo from '../assets/iconlogos/github.png'
import GmailLogo from '../assets/iconlogos/gmail.png'
import InstagramLogo from '../assets/iconlogos/instagram.png'
import LinkedInLogo from '../assets/iconlogos/linkedin.png'

const ContactContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    height: max(100vh, 800px);
    width: 100%;
    textAlign: center;
`

const FreeLancePoster = styled.img`
    width: 350px;
    height: 350px;
`

const SocialMediaGroup = styled.div`
    width: 600px;
    height: 200px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const SocialMediaContainer = styled.div`
    height: 50px;
    width: 50px;
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    border: solid;
`

const SocialMediaIcon = styled.img`
    width: 50px;
    height: 50px;
`

const socialMediaData = [
    {
        id: '@jamespdang',
        image: InstagramLogo
    },
    {
        id: 'James Dang',
        image: LinkedInLogo
    },
    {
        id: 'jamesphidang@gmail.com',
        image: GmailLogo
    },
    {
        id: 'realblingy',
        image: GithubLogo
    }
]

function Contact() {
    return (
        <Element name="Contact">
            <ContactContainer>
                <p style={{ fontSize: '2em' }}>Social Media (In the works...)</p>
                <p>Instagram: @jamespdvng</p>
                <p>Email: jamesphidang@gmail.com</p>
                <a style={{ textDecoration: 'none', marginTop: '1rem' }} href="https://www.linkedin.com/in/james-dang-05b8331b0/">LinkedIn: Click for my profile</a>
                {/* <SocialMediaGroup>
                    {
                        socialMediaData.map(({ id, image }) => (
                                <SocialMediaIcon src={image} />
                        ))
                    }
                </SocialMediaGroup>
                <FreeLancePoster src={FreeLancingImg} /> */}
            </ContactContainer>
        </Element>
    )
}

export default Contact
