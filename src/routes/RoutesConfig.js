import PeoplePage from "../containers/PeoplePage/PeoplePage";
import ErrorMassage from "../components/ErrorMassage/ErrorMassage";
import EpisodePage from "../containers/EpisodePage/EpisodePage";
import LocationPage from "../containers/LocationPage/LocationPage";
import CharacterPage from "../containers/CharacterPage/CharacterPage";
import EpisodePageInfo from "../containers/EpisodePageInfo/EpisodePageInfo"
import LocationPageInfo from "../containers/LocationPageInfo/LocationPageInfo";
import FavoritePage from "../containers/FavoritePage/FavoritePage";


const routesConfig = [
    {
        path: '/',
        exact: false,
        element: PeoplePage
    },
    {
        path: '/character',
        exact: true,
        element: PeoplePage
    },
    {
        path: '/character/:id',
        exact: true,
        element: CharacterPage
    },
    {
        path: '/episode',
        exact: true,
        element: EpisodePage
    },
    {
        path: '/episode/:id',
        exact: true,
        element: EpisodePageInfo
    },
    {
        path: '/location',
        exact: true,
        element: LocationPage
    },
    {
        path: '/location/:id',
        exact: true,
        element: LocationPageInfo
    },
    {
        path: '/favorites',
        exact: true,
        element: FavoritePage
    },
    {
        path: '*',
        exact: true,
        element: ErrorMassage
    },
]

export default routesConfig;