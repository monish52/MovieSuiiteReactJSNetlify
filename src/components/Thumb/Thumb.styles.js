import styled from 'styled-components';

export const Image=styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.5s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumbImage 1s;

    :hover{
        opacity:0.8;
    }

    @keyframes animateThumbImage{
        from{
            opacity:0;
        }to{
            opavity:1;
        }
    }
`;