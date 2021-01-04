import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';

const adjust_input = (input) => {
    const temp_search = input.replace(/\s/g, '');
    const search = temp_search.toLowerCase();
    return search;
};

const HomeScreen = () => {
    const [search_field, setSearchField] = useState('');

    return (
        <form class='searchform cf'>
            <input
                type='text'
                value={search_field}
                onChange={(event) => setSearchField(event.target.value)}
                placeholder='Is it me you’re looking for?'
            />
            <Link to={`/book/${adjust_input(search_field)}`}>
                <button type='submit'>Search</button>
            </Link>
        </form>
    );
};

export default HomeScreen;
