import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Music from './pages/Music';
import store from './features/store';
import Musics from './pages/Add/Musics';
import EditMusic from './pages/Edit/Music'
import Status from "./pages/Status"

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Add/Music" element={<Musics />} />
          <Route path="/Edit/Music" element={<EditMusic />} />
          <Route path="/Status" element={<Status />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;


