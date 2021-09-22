import React from 'react';

// Styles

import { Image } from './Thumb.styles';

const Thumb = props => {
    return (
        <div>
            <Image src={props.image} alt='movie-thumb' />
        </div>
    )
}

export default Thumb;