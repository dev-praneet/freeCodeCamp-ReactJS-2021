import React from 'react';
import PropTypes from 'prop-types';

// Components
import Thumb from '../Thumb';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

// Image
import NoImage from '../../images/no_image.jpg';

// Styling
import { Wrapper, Content, Text, Rating, Score, Director } from './MovieInfo.styles';

const MovieInfo = props => {
    return (
        <Wrapper backdrop={props.movie.backdrop_path} >
            <Content>
                <Thumb image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : NoImage}
                clickable={false} />
                <Text>
                    <h1>{props.movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{props.movie.overview}</p>

                    <Rating>
                        <div>
                            <h3>RATING</h3>
                            <Score>{props.movie.vote_average}</Score>
                        </div>
                        <Director>
                            <h3>DIRECTOR{props.movie.directors.length > 1 ? 'S' : ''}</h3>
                            {props.movie.directors.map(director => (
                                <p key={director.credit_id}>{director.name}</p>
                            ))}
                        </Director>
                    </Rating>
                </Text>
            </Content>
        </Wrapper>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.object,
}

export default MovieInfo;