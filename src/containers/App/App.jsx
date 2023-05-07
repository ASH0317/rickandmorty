import { Route, Routes } from 'react-router-dom';

import routesConfig from '../../routes/RoutesConfig';

// import styles from './App.module.css';
import Header from '../../components/Header/Header';

const App = () => {
  return (
    <>

      <Header />

      <Routes>

        {routesConfig.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={<route.element />}
          />
        ))}

      </Routes>

    </>
  );
}

export default App;
