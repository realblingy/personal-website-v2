import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const CarouselContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media (min-width: 750px) {
        display: none;
    }
`

const LogoImage = styled(animated.img)`
    width: ${props => props.width || "50px"};
    height: ${props => props.height || "50px"};
    margin-left: 1rem;
    margin-right: 1rem;
`

function LogoCarousel({ logos, logoSpring }) {

    const LogoSpring = useSpring({
        loop: true,
        to: [
            { transform: 'translateX(105px)'},

        ],
        from: {
            transform: 'translateX(-653px)',
        },
        config: {
            duration: 20000,
        }
    })

    const doubleLogos = logos.concat(logos).concat(logos);

    return (
        <CarouselContainer>
            {
                doubleLogos.map(({ src, width, height }) => (
                    <LogoImage style={LogoSpring} src={src} width={width} height={height} />
                ))
            }
        </CarouselContainer>
    )
}

export default LogoCarousel
