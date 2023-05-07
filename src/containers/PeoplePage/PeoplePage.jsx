import React from 'react';
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import PeopleNav from '../../components/PeopleNav/PeopleNav';
import { getApiResourse } from '../../utils/network';
import { API_CHARACTER, BASE_URL } from '../../constants/api';
import { withErrorApi } from '../../hoc-helper/withErrorApi';
import { useQueryParams } from '../../hooks/useQueryParams';
import { getCharacterPageId } from '../../utils/getID/getID';
import Search from '../../components/search/Search';


// import styles from './PeoplePage.module.css';

const PeoplePage = ({ setErrorApi }) => {

    const [people, setPeople] = React.useState([]);
    const [infPeople, setInfPeople] = React.useState([]);
    const [searchTxt, setSearchTxt] = React.useState('');

    const [search, setSearch] = React.useState(false);


    const [prevPage, setPrevPage] = React.useState(null);
    const [nextPage, setNextPage] = React.useState(null);
    const [counterPage, setCounterPage] = React.useState(1);

    const [numPage, setNumPage] = React.useState(0);


    const getCounterPage = async (page) => {

        const res = await getApiResourse(BASE_URL + page);
        const countPage = await res.info.pages;

        setNumPage(countPage);

    }


    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResours = React.useCallback(async (url) => {
        const res = await getApiResourse(url);

        if (res) {
            const peopleList = res.results.map((element) => {
                return {
                    name: element.name,
                    status: element.status,
                    species: element.species,
                    img: element.image,
                    id: element.id,
                }
            })


            setPeople(peopleList);
            setPrevPage(res.info.prev);
            setNextPage(res.info.next);
            setCounterPage(getCharacterPageId(url));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }


    }, [setErrorApi])

    React.useEffect(() => {
        getResours(API_CHARACTER + queryPage);
    }, [queryPage, getResours])

    React.useEffect(() => {
        getCounterPage('character')
    }, [])

    const numPageMemo = React.useMemo(() => {
        return numPage;
    }, [numPage])


    return (
        <>


            <Search
                page='character/'
                setInfPeople={setInfPeople}
                infPeople={infPeople}
                setSearch={setSearch}
                setSearchTxt={setSearchTxt}
                searchTxt={searchTxt}
            />

            {search
                ? <PeopleList people={infPeople} />
                : <>
                    <PeopleList people={people} />
                    <PeopleNav
                        numPageMemo={numPageMemo}
                        page='character'
                        prevPage={prevPage}
                        nextPage={nextPage}
                        counterPage={counterPage}
                    />
                </>
            }





        </>
    )
}

export default withErrorApi(PeoplePage);