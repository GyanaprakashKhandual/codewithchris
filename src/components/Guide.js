import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import CypressNote from '../config/CypressNote';
import SeleniumNote from '../config/SeleniumNote';
import PlaywrightNote from '../config/PlaywrightNote';

export const Guide = () => {
  return (
    <div style={{ display: 'flex' }} className='mt-15'>
      <Sidebar />
      <div style={{ flex: 1, padding: '1rem' }} className=''>
        <Routes>
          <Route path="/" element={<CypressNote/>} />
          <Route path="/" element={<SeleniumNote/>} />
          <Route path="/" element={<PlaywrightNote/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Guide;
