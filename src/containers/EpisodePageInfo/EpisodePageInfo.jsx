import React from 'react';
import { useParams } from 'react-router';
import { getApiResourse } from '../../utils/network';
import { API_EPISODEINFO } from '../../constants/api';
import { withErrorApi } from '../../hoc-helper/withErrorApi';
import CharacterLinkBack from '../../components/CharacterPage/CharacterLinkBack/CharacterLinkBack';
import Loader from '../../components/Loader/Loader';


import EpisodeInfo from '../../components/EpisodePage/EpisodeInfo/EpisodeInfo';


const CharacterList = React.lazy(() => import('../../components/EpisodePage/CharacterList/CharacterList'));

//import styles from './EpisodePageInfo.module.css';

const EpisodePageInfo = ({ setErrorApi }) => {

    const [episodeInfo, setEpisodeInfo] = React.useState(null);
    const [characterList, setCharacterList] = React.useState(null);



    const id = useParams().id;


    React.useEffect(() => {
        (async () => {

            const res = await getApiResourse(API_EPISODEINFO + id);

            if (res) {

                setEpisodeInfo({
                    id: res.id,
                    name: res.name,
                    date: res.air_date,
                    episode: res.episode
                });

                res.characters.length && setCharacterList(res.characters);


                setErrorApi(false);
            } else {
                setErrorApi(true);
            }

        })();
    }, [id, setErrorApi]);


    return (
        <>
            <CharacterLinkBack />

            {episodeInfo && (
                <EpisodeInfo
                    episodeInfo={episodeInfo}
                />
            )}

            {characterList && (

                <React.Suspense
                    fallback={<Loader />}
                >
                    <CharacterList
                        characterList={characterList}
                    />
                </React.Suspense>


            )}

        </>
    )
}

export default withErrorApi(EpisodePageInfo);