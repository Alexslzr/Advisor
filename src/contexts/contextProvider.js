import React , {createContext, useContext, useState} from "react";
import {barbers} from '../api/data'

const StateContext = createContext()

export const ContextProvider = ({children}) =>{

    const [filteredPlaces , setFilteredPlaces] = useState([])
    const [type, setType] = useState('barber')
    const [rating, setRating] = useState(0)
    const [places, setPlaces] = useState(barbers)
    const [coordinates, setCoordinates] = useState({})
    const [bounds, setBounds] = useState({sw:{lat:0,lng:0},ne: {lat:0,lng:0}})
    const [childClicked, setChildClicked] = useState(null)
    const [ loading, setLoading] = useState(false)

 


    return(
        <StateContext.Provider
        value={{
            setCoordinates, 
            setFilteredPlaces, 
            places, 
            rating, 
            filteredPlaces, 
            loading, 
            type, 
            setType, 
            setBounds, 
            coordinates, 
            setChildClicked, 
            setRating, 
            childClicked
            }}>
        {children}
        </StateContext.Provider>
    )
}

export const useStateContext = ()=> useContext(StateContext)