import styled from 'styled-components';

import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
    background: ${props => props.backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop})` : '#000'};
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1000ms;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    @media (max-width: 768px) {
        display: block;
        max-heigth: none;
    }
`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: white;
`;

export const Rating = styled.div`
    display: flex;
    justify-content: flex-start;
`;
export const Score = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
`;
export const Director = styled.div`
    margin: 0 0 0 40px;

    p {
        margin: 0;
    }
    h1 {
        @media (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;