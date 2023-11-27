import React, {useEffect, useState} from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import { CssBaseline, Grid } from '@material-ui/core'
import { getPlacesData } from './api'
import {barbers} from './api/data'




const App = () => {
  const [filteredPlaces , setFilteredPlaces] = useState([])
  const [type, setType] = useState('barber')
  const [rating, setRating] = useState(0)
  const [places, setPlaces] = useState(barbers)
  const [coordinates, setCoordinates] = useState({})
  const [bounds, setBounds] = useState({sw:{lat:0,lng:0},ne: {lat:0,lng:0}})
  const [childClicked, setChildClicked] = useState(null)
  const [ loading, setLoading] = useState(false)

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
      setCoordinates({lat: latitude, lng: longitude}) 
    })
  },[])

  useEffect(()=>{
    const filtered = places.filter( places=> places.rating>=rating)

    setFilteredPlaces(filtered)
  },[rating])
/*
  useEffect(()=>{
    setLoading(true)
    getPlacesData(bounds.sw, bounds.ne).then((data)=>{
      setPlaces(data)
      setLoading(false)
    })
  },[/*coordinates, bounds])*/

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List 
              places={filteredPlaces.length ? filteredPlaces : places}
              childClicked={childClicked} 
              loading={loading} 
              type={type} 
              setType={setType} 
              setRating={setRating} 
              rating={rating}/>
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
              setCoordinates={setCoordinates} 
              setBounds={setBounds} 
              coordinates={coordinates} 
              places={filteredPlaces.length ? filteredPlaces : places}
              setChildClicked={setChildClicked}/>
        </Grid>
      </Grid>
    </>
  )
}

export default App
