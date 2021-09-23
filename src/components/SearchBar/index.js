import { useState, useEffect, useRef } from 'react';

// Image
import searchIcon from '../../images/search-icon.svg';

// Styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = props => {

    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            props.setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer)
    }, [props.setSearchTerm, state])

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon' />
                <input type='text' placeholder='Search Movie' onChange={event => setState(event.currentTarget.value)} value={state}/>
            </Content>
        </Wrapper>
    )
}

export default SearchBar;