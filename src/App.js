import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import EPG from './scheduleGrid/epgfull/epgfull.js';

function App() {
  return (
    <Router>
      {/* <HeaderMenu /> */}
      <Route path='/' exact strict component={EPG} />
      {/* <Route path='/program/:id' exact component={FullShowRoute} /> */}
    </Router>
  );
}
// function FullShowRoute({ match }) {
//   return <FullShow id={match.params.id} />;
// }

export default App;
