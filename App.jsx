import React from 'react';
import Home from './Home';
import {Route, Link} from 'react-router-dom';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App=()=>{
  return(
    <div>
      <ul>
        <li>
          <Link to="/">홈으로</Link>
        </li>
        <li>
          <Link to="/About" >정보</Link>  {/* 선택 */}
        </li>
        <li>
          <Link to="/Profiles">정보들</Link>
        </li>
        <li>
          <Link to="/history">홈페이지 예제</Link>
        </li>
      </ul>
      {/* <Route path="/" component={Home} exact /> */}
      <Route path="/About" component={About} /> {/* 필수 */}
      <Route path="/Profiles" component={Profiles} />
      <Route path="/history" component={HistorySample} />
    </div>
  );
}

export default App;