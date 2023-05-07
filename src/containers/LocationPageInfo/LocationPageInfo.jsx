import React from 'react';
import { useParams } from 'react-router';
import { getApiResourse } from '../../utils/network';
import { API_LOCATIONINFO } from '../../constants/api';
import { withErrorApi } from '../../hoc-helper/withErrorApi';
import CharacterLinkBack from '../../components/CharacterPage/CharacterLinkBack/CharacterLinkBack';
import LocationInfo from '../../components/LocationPage/LocationInfo/LocationInfo';
import Loader from '../../components/Loader/Loader';

const CharacterList = React.lazy(() => import('../../components/LocationPage/CharacterList/CharacterList'));

//import styles from './LocationPageInfo.module.css';

const LocationPageInfo = ({ setErrorApi }) => {

    const [locationInfo, setLocationInfo] = React.useState(null);
    const [characterList, setCharacterList] = React.useState(null);



    const id = useParams().id;


    React.useEffect(() => {
        (async () => {

            const res = await getApiResourse(API_LOCATIONINFO + id);

            if (res) {

                setLocationInfo({
                    id: res.id,
                    name: res.name,
                    type: res.type,
                });

                res.residents.length && setCharacterList(res.residents);


                setErrorApi(false);
            } else {
                setErrorApi(true);
            }

        })();
    }, [id, setErrorApi]);


    return (
        <>
            <CharacterLinkBack />

            {locationInfo && (
                <LocationInfo
                    locationInfo={locationInfo}
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

export default withErrorApi(LocationPageInfo);