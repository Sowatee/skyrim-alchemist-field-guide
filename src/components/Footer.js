import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaRedditAlien} from 'react-icons/fa';


export default function Footer () {
    return (
        <Wrapper>
            <a href="https://github.com/Sowatee/skyrim-alchemist-field-guide" target="_blank"><FaGithub/></a>
            <a href="https://www.reddit.com/user/PoutinePush" target="_blank"><FaRedditAlien/></a>
            <a href="https://www.linkedin.com/in/james-prescott-967280232/" target="_blank"><FaLinkedin/></a>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    background: #000;
    width: 100vw;
    height: 3rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    position: fixed;
    bottom: 0; 

    a {
        color: white;
        text-decoration: none;
        font-size: 2rem;

        &:hover {
            cursor: pointer;
        }
    }
`