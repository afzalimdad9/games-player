/* eslint-disable */
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Play from './pages/Play';
import Games from './pages/Games';
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Games />} />
          <Route path='play/:id' element={<Play />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
