import React from 'react';
import { API_LOCATION, BASE_URL } from '../../constants/api';
import { withErrorApi } from '../../hoc-helper/withErrorApi';
import { getApiResourse } from '../../utils/network';
import { useQueryParams } from '../../hooks/useQueryParams';
import { getCharacterPageId } from '../../utils/getID/getID';
import LocationList from '../../components/LocationPage/LocationList';
import PeopleNav from '../../components/PeopleNav/PeopleNav';

// import styles from './LocationPage.module.css';

const LocationPage = ({ setErrorApi }) => {

    const [location, setLocation] = React.useState(null);
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
            const locationList = res.results.map((element) => {
                return {
                    name: element.name,
                    type: element.type,
                    id: element.id,
                    residents: element.residents,
                }
            })
            setLocation(locationList);
            setPrevPage(res.info.prev);
            setNextPage(res.info.next);
            setCounterPage(getCharacterPageId(url))
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }


    }, [setErrorApi])

    React.useEffect(() => {
        getResours(API_LOCATION + queryPage);
    }, [queryPage, getResours])

    React.useEffect(() => {
        getCounterPage('location')
    }, [])

    const numPageMemo = React.useMemo(() => {
        return numPage;
    }, [numPage])

    return (
        <>

            {location && <LocationList location={location} />}

            <PeopleNav
                numPageMemo={numPageMemo}
                page='location'
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
        </>
    )
}

export default withErrorApi(LocationPage);