import styled from 'styled-components';

export const Section = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const Header = styled.h1`
    text-transform: uppercase;
    font-family: 'Anton', sans-serif;
    font-size: clamp(3rem, 24vw, 14rem);
    letter-spacing: clamp(.3rem, 2vw, 1rem);
`;