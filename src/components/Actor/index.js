import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Image } from './Actor.styles';

const Actor = props => {
    return (
        <Wrapper>
            <Image src={props.imageUrl} alt='actor-thumb' />
            <h3>{props.name}</h3>
            <p>{props.character}</p>
        </Wrapper>
    )
}

Actor.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    imageUrl: PropTypes.string,
}

export default Actor;