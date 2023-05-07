import React from 'react';


import styles from './SearchName.module.css';

const SearchName = ({ getResponse, setSearchTxt, searchTxt }) => {



    const inputChange = (event) => {
        event.preventDefault();
        getResponse(searchTxt);

    }

    return (
        <>
            <form onSubmit={inputChange}>
                <input
                    type='text'
                    placeholder='Input characters name'
                    onChange={e => setSearchTxt(e.target.value)}
                    value={searchTxt}
                />
                <button type='submit'>ПОИСК</button>
            </form>

        </>
    )
}

export default SearchName;