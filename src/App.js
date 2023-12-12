import React, {useEffect, useState} from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import { CssBaseline, Grid } from '@material-ui/core'
import { getPlacesData } from './api'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scheduler  from './Pages/Scheduler'
import SearchResults from './Pages/searchResults'




const App = () => {
 
/*
  useEffect(()=>{
    setLoading(true)
    getPlacesData(bounds.sw, bounds.ne).then((data)=>{
      setPlaces(data)
      setLoading(false)
    })
  },[/*coordinates, bounds])*/

  return (
    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<SearchResults/>} />
                            <Route path="/agenda" element={<Scheduler />}/>
                        </Routes>
    </BrowserRouter>
  )
}

export default App
