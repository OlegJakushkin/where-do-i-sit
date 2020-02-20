import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch, useLocation, Redirect, } from 'react-router-dom';

import ChooseStationWindow from './ChooseStationWindow'
import StationTimetable from './StationTimetable'

import './styles/App.css' 

import {ReactComponent as Logo} from './images/Logo.svg'


//delete
import NotificationsBlock from './NotificationsBlock';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  let query = useQuery()

  return (
      <div className="app">
      <header className="header">
          <div className="logo">
            <Link to="/"><Logo /></Link>       
          </div>
      </header>
      <div className="main-area">
        <Switch>          
          <Route path="/timetable" render={() => <StationTimetable query={query.get("station")} />} />          
          <Route exact path="/" component={ChooseStationWindow} />
          <Route render={() => <Redirect to="/"/>} />
        </Switch>
        
      </div>
      </div>
  )
}

export default App
