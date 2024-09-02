import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Music from './pages/Music';
import store from './features/store';
import Musics from './pages/Add/Musics';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Add/Music" element={<Musics />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;


