import React, {useEffect, useState} from 'react'
import Header from '../components/Header/Header'
import List from '../components/List/List'
import Map from '../components/Map/Map'
import { CssBaseline, Grid } from '@material-ui/core'
import { getPlacesData } from '../api'
import { useStateContext } from '../contexts/contextProvider'




const SearchResults = () => {
    const {setCoordinates, setFilteredPlaces, places, rating, filteredPlaces,} = useStateContext()

    useEffect(()=>{
      navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=>{
        setCoordinates({lat: latitude, lng: longitude}) 
      })
    },[])
  
    useEffect(()=>{
      const filtered = places.filter( places=> places.rating>=rating)
      setFilteredPlaces(filtered)
    },[rating])

  return (
    <>
        <CssBaseline />
            <Header setCoordinates={setCoordinates}/>
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List 
                        places={filteredPlaces.length ? filteredPlaces : places}
                        />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map 
                        places={filteredPlaces.length ? filteredPlaces : places}
                        />
                </Grid>
            </Grid>
  </>
  )
}

export default SearchResults
