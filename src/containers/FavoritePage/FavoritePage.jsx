import React from 'react';
import { useSelector } from 'react-redux'
import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';
import EpisodeList from '../../components/EpisodePage/EpisodeList/EpisodeList';
import LocationList from '../../components/LocationPage/LocationList';
import styles from './FavoritePage.module.css';

const FavoritePage = () => {
    const [character, setCharacter] = React.useState([]);
    const [episode, setEpisode] = React.useState([]);
    const [location, setLocation] = React.useState([]);

    const storeData = useSelector(state => state);

    React.useEffect(() => {
        const CharacterArr = Object.entries(storeData.favoriteCharacterReducer);
        const EpisodeArr = Object.entries(storeData.favoriteEpisodeReducer);
        const LocationArr = Object.entries(storeData.favoriteLocationReducer);

        if (CharacterArr.length) {
            const res = CharacterArr.map(item => {
                return {
                    name: item[1].name,
                    status: item[1].status,
                    species: item[1].species,
                    img: item[1].img,
                    id: item[0],
                }
            })
            setCharacter(res);
        }

        if (EpisodeArr.length) {
            const res = EpisodeArr.map(item => {
                return {
                    name: item[1].name,
                    date: item[1].date,
                    episode: item[1].episode,
                    id: item[0],
                }
            })
            setEpisode(res);
        }

        if (LocationArr.length) {
            const res = LocationArr.map(item => {
                return {
                    name: item[1].name,
                    type: item[1].type,
                    residents: item[1].residents,
                    id: item[0],
                }
            })
            setLocation(res);
        }

    }, [storeData.favoriteCharacterReducer, storeData.favoriteEpisodeReducer, storeData.favoriteLocationReducer])



    return (
        <>
            <h1 className={styles.title2}>Character</h1>
            {character.length
                ?
                < PeopleList
                    people={character}
                />
                : <h1 className={styles.title}>You haven't added anything yet</h1>
            }
            <h1 className={styles.title2}>Episodes</h1>
            {episode.length
                ?
                < EpisodeList
                    episode={episode}
                />
                : <h1 className={styles.title}>You haven't added anything yet</h1>
            }
            <h1 className={styles.title2}>Locations</h1>
            {location.length
                ?
                < LocationList
                    location={location}
                />
                : <h1 className={styles.title}>You haven't added anything yet</h1>
            }

        </>
    )
}

export default FavoritePage;

