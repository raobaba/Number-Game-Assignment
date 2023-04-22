import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Play from './Play'
import LeaderBoard from './LeaderBoard'
export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/play' element={<Play/>} />
      <Route path='/leaderboard' element={<LeaderBoard/>}/>
    </Routes>
  )
}
