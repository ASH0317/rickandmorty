import React from 'react';
import { getApiResourse } from '../../utils/network';
import { API_PARAM_NAME, BASE_URL, API_CHARACTER } from '../../constants/api';

// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { setCharacterToStore, removeCharacterToStore } from '../../store/actions';

import styles from './Search.module.css';

import SearchName from './searchName/SearchName';

const Search = ({page, setInfPeople, infPeople, setSearch, setSearchTxt, searchTxt}) => {

    // const dispatch = useDispatch();

    // const set = () => {
    //     dispatch(setCharacterToStore(infPeople.map(()=>{
    //         return {

    //         }
    //     })));
    // }

    // const remove = () => {
    //     dispatch(removeCharacterToStore(personInfo.id));
    // }

    const getResponse = async (param) => {
        if (param) {
            const res = await getApiResourse(BASE_URL + page + '?' + API_PARAM_NAME + param)
            const name = param;

            setSearch(true)

            if (res) {
                const arr = [];
                const pageNum = res.info.pages;
                for (let index = 1; index <= pageNum; index++) {
                    const res = await getApiResourse(API_CHARACTER + index + '&' + API_PARAM_NAME + name);

                    const peopleList = res.results.map((element) => {
                        return {
                            name: element.name,
                            status: element.status,
                            species: element.species,
                            img: element.image,
                            id: element.id,
                        }

                    })
                    arr.push(...peopleList);
                    setInfPeople([...arr]);

                }

            }
        } else {
            setSearch(false)
        }



    }


    return (
        <>
            <SearchName
                getResponse={getResponse}
                setSearchTxt={setSearchTxt}
                searchTxt={searchTxt}
            />
        </>
    )
}

export default Search;