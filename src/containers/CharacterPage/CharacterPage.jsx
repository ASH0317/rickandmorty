import React from 'react';
import { useParams } from 'react-router';
import CharacterInfo from '../../components/CharacterPage/CharacterInfo/CharacterInfo';
import { getApiResourse } from '../../utils/network';
import { API_PERSON } from '../../constants/api';
import { withErrorApi } from '../../hoc-helper/withErrorApi';
import CharacterLinkBack from '../../components/CharacterPage/CharacterLinkBack/CharacterLinkBack';
import Loader from '../../components/Loader/Loader';


const EpisodeList = React.lazy(() => import('../../components/CharacterPage/EpisodeList/EpisodeList'))
// import styles from './CharacterPage.module.css';

const CharacterPage = ({ setErrorApi }) => {

    const [personInfo, setPersonInfo] = React.useState(null);
    const [episodeList, setEpisodeList] = React.useState(null);

    const id = useParams().id;


    React.useEffect(() => {
        (async () => {

            const res = await getApiResourse(API_PERSON + id);

            if (res) {

                setPersonInfo({
                    id: res.id,
                    name: res.name,
                    status: res.status,
                    species: res.species,
                    gender: res.gender,
                    img: res.image,
                    o_name: res.origin.name,
                    id_location: res.origin.url,
                });

                res.episode.length && setEpisodeList(res.episode);


                setErrorApi(false);
            } else {
                setErrorApi(true);
            }

        })();
    }, [id, setErrorApi]);


    return (
        <>
            <CharacterLinkBack />

            {personInfo && (
                <CharacterInfo
                    personInfo={personInfo}
                />
            )}

            {episodeList && (
                <React.Suspense
                    fallback={<Loader />}
                >
                    <EpisodeList
                        episodeList={episodeList}
                        personInfo={personInfo}
                    />
                </React.Suspense>

            )}

        </>
    )
}

export default withErrorApi(CharacterPage);