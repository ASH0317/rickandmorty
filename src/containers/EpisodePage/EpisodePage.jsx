import React from 'react';
import { API_EPISODE, BASE_URL } from '../../constants/api';
import { withErrorApi } from '../../hoc-helper/withErrorApi';
import { getApiResourse } from '../../utils/network';
import { useQueryParams } from '../../hooks/useQueryParams';
import { getCharacterPageId } from '../../utils/getID/getID';
import EpisodeList from '../../components/EpisodePage/EpisodeList/EpisodeList';
import PeopleNav from '../../components/PeopleNav/PeopleNav';

// import styles from './EpisodePage.module.css';

const EpisodePage = ({ setErrorApi }) => {

    const [episode, setEpisode] = React.useState(null);

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
            const episodeList = res.results.map((element) => {
                return {
                    name: element.name,
                    date: element.air_date,
                    episode: element.episode,
                    id: element.id
                }
            })

            setEpisode(episodeList);
            setPrevPage(res.info.prev);
            setNextPage(res.info.next);
            setCounterPage(getCharacterPageId(url))
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }


    }, [setErrorApi]) 

    React.useEffect(() => {
        getResours(API_EPISODE + queryPage);
    }, [queryPage, getResours])

    React.useEffect(() => {
        getCounterPage('episode')
    }, [])

    const numPageMemo = React.useMemo(() => {
        return numPage;
    }, [numPage])

    return (
        <>

            {episode && <EpisodeList episode={episode} />}

            <PeopleNav
                numPageMemo={numPageMemo}
                page='episode'
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
        </>
    )
}

export default withErrorApi(EpisodePage);