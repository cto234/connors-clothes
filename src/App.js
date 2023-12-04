import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import clothes from './clothes'

const App = () => {
  return (
    <Router>
      <div>
        <Header />

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<Home clothes={clothes}/>} />
          {/* <Route path="/:id" element={<Item clothes={clothes}/>} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

