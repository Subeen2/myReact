import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import Profile from './Profile';

const Profiles =()=>{
    const activeStyle = {
        background : 'orange',
        color : 'white',
    }

    return(
    <div>
            <h3>사용자 목록</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/velopert">
                        velopert
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/mogackco">모각코 인원</NavLink>
                </li>
            </ul>

            <Route
                path="/Profiles"
                exact 
                render={() => <div>사용자를 선택해주세요 </div>}
            />
            <Route path="/Profiles/:username" component={Profile} />
        </div>
    );
}

export default Profiles;