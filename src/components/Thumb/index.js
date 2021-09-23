import React from 'react';
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

export default Thumb;