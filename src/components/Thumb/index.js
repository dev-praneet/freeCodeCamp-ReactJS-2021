import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Styles

import { Image } from './Thumb.styles';

const Thumb = props => {
    return (
        <div>
            {props.clickable ? (
                <Link to={`/${props.movieId}`} >
                    <Image src={props.image} alt='movie-thumb' />
                </Link>
            ) : (
            <Image src={props.image} alt='movie-thumb' />
            )}
        </div>
    )
}

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
}

export default Thumb;